
"use client";

import { useState } from "react";
import {
    DailySet as DailySetData,
    GameSession,
} from "@/data/days/days";
import DayList from "./DayList";
import DailySet from "@/components/DailySet";
import MatchingOrbComponent from "@/components/MatchingOrbComponent";
import OrbRenderer from "@/components/OrbRenderer";

interface AppProps {
    days: DailySetData[];
}

const STARTING_HEARTS = 3;
const DAILY_ORB_GOAL = 6;

export default function App({ days }: AppProps) {
    const [selectedDay, setSelectedDay] =
        useState<DailySetData | null>(null);

    const [selectedOrbId, setSelectedOrbId] =
        useState<string | null>(null);

    const [session, setSession] = useState<GameSession>({
        events: [],
        progress: {},
    });

    function startDay(day: DailySetData) {
        setSelectedDay(day);
        setSelectedOrbId(null);

        const initialProgress: GameSession["progress"] = {};

        for (const orb of day.orbs) {
            initialProgress[orb.id] = {
                correctAnswers: 0,
                heartsRemaining: STARTING_HEARTS,
                earnedOrbs: 0,
                completed: false,
            };
        }

        setSession({
            events: [],
            progress: initialProgress,
        });
    }

    function handleCorrectAnswer(orbId: string) {
        const orb = selectedDay?.orbs.find(
            item => item.id === orbId
        );

        if (!orb) return;

        const timestamp = Date.now();

        setSession(previous => {
            const current = previous.progress[orbId];

            if (!current || current.completed) {
                return previous;
            }

            const correctAnswers = current.correctAnswers + 1;

            const nextThreshold = orb.thresholds[current.earnedOrbs];

            const earnsOrb =
                current.heartsRemaining > 0 &&
                current.earnedOrbs < 3 &&
                nextThreshold !== undefined &&
                correctAnswers >= nextThreshold;

            const earnedOrbs = earnsOrb
                ? current.earnedOrbs + 1
                : current.earnedOrbs;

            return {
                ...previous,
                progress: {
                    ...previous.progress,
                    [orbId]: {
                        ...current,
                        correctAnswers,
                        earnedOrbs,
                    },
                },
                events: earnsOrb
                    ? [
                        ...previous.events,
                        {
                            type: "orb-earned",
                            orbId,
                            timestamp,
                        },
                    ]
                    : previous.events,
            };
        });
    }

    function handleIncorrectAnswer(orbId: string) {
        const timestamp = Date.now();

        setSession(previous => {
            const current = previous.progress[orbId];

            if (
                !current ||
                current.completed ||
                current.heartsRemaining <= 0
            ) {
                return previous;
            }

            return {
                ...previous,
                progress: {
                    ...previous.progress,
                    [orbId]: {
                        ...current,
                        heartsRemaining: current.heartsRemaining - 1,
                    },
                },
                events: [
                    ...previous.events,
                    {
                        type: "heart-lost",
                        orbId,
                        timestamp,
                    },
                ],
            };
        });
    }

    function handleComplete(orbId: string) {
        setSession(previous => {
            const current = previous.progress[orbId];

            if (!current || current.completed) {
                return previous;
            }

            return {
                ...previous,
                progress: {
                    ...previous.progress,
                    [orbId]: {
                        ...current,
                        completed: true,
                    },
                },
            };
        });
    }

    async function handleShare() {
        if (!selectedDay) return;

        const symbols = {
            language: { orb: "🟠", heart: "🧡" },
            science: { orb: "🟢", heart: "💚" },
            geography: { orb: "🔵", heart: "💙" },
            "pop-culture": { orb: "🟣", heart: "💜" },
        };

        const date = new Date(
            selectedDay.date + "T12:00:00"
        ).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        }).replace(",", "");

        const result: string[] = [];
        let earnedCount = 0;

        for (const event of session.events) {
            const orb = selectedDay.orbs.find(
                item => item.id === event.orbId
            );

            if (!orb) continue;

            if (event.type === "orb-earned") {
                result.push(symbols[orb.category].orb);
                earnedCount++;

                if (
                    earnedCount === DAILY_ORB_GOAL
                ) {
                    result.push("🏆");
                }
            } else {
                result.push(symbols[orb.category].heart);
            }
        }

        const shareText = `DailyOrbs ${date}\n${result.join("")}`;

        await navigator.clipboard.writeText(shareText);

        alert("Results copied to clipboard!");
    }

    const totalEarnedOrbs = Object.values(session.progress).reduce(
        (total, item) => total + item.earnedOrbs,
        0
    );

    const selectedOrb = selectedDay?.orbs.find(
        orb => orb.id === selectedOrbId
    );

    const selectedProgress = selectedOrbId
        ? session.progress[selectedOrbId]
        : null;

    return (
        <main className="container mx-auto max-w-3xl p-4">
            {selectedDay === null ? (
                <>
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        Jon's Daily Orbs
                    </h1>

                    <DayList
                        days={days}
                        onSelectDay={startDay}
                    />
                </>
            ) : selectedOrbId === null ? (
                <>
                    <button
                        className="btn btn-ghost mb-4"
                        onClick={() => setSelectedDay(null)}
                    >
                        ← Back to days
                    </button>

                    <div className="mb-4 text-center">
                        <h2 className="text-xl font-bold">
                            Daily progress
                        </h2>
                        <p className="text-base-content/70">
                            {totalEarnedOrbs} / {DAILY_ORB_GOAL} orbs earned
                        </p>
                    </div>

                    <DailySet
                        day={selectedDay}
                        progress={session.progress}
                        onSelectOrb={setSelectedOrbId}
                    />

                    <div className="mt-8">
                        <h2 className="font-bold mb-3">
                            Event history
                        </h2>

                        {session.events.length === 0 ? (
                            <p className="text-sm text-base-content/60">
                                No events yet.
                            </p>
                        ) : (
                            <ol className="flex flex-col gap-2">
                                {session.events.map((event, index) => {
                                    const eventOrb = selectedDay.orbs.find(
                                        orb => orb.id === event.orbId
                                    );

                                    return (
                                        <li
                                            key={`${event.timestamp}-${index}`}
                                            className="flex items-center justify-between gap-3 text-sm"
                                        >
                                            <span>
                                                {event.type === "orb-earned"
                                                    ? "Earned an orb"
                                                    : "Lost a heart"}
                                                {eventOrb && ` — ${eventOrb.title}`}
                                            </span>

                                            <span className="text-base-content/50 shrink-0">
                                                {new Date(
                                                    event.timestamp
                                                ).toLocaleTimeString([], {
                                                    hour: "numeric",
                                                    minute: "2-digit",
                                                })}
                                            </span>
                                        </li>
                                    );
                                })}
                            </ol>
                        )}
                    </div>

                    <button
                        className="btn btn-outline btn-sm mt-4"
                        onClick={handleShare}
                    >
                        Share results
                    </button>
                </>
            ) : (
                <>
                    <button
                        className="btn btn-ghost mb-4"
                        onClick={() => setSelectedOrbId(null)}
                    >
                        ← Back to orbs
                    </button>

                    {selectedOrb && selectedProgress && (
                        <>
                            {totalEarnedOrbs >= DAILY_ORB_GOAL && (
                                <div className="alert alert-success mb-4">
                                    Daily goal reached! You've earned six orbs.
                                </div>
                            )}

                            <OrbRenderer
                                key={selectedOrb.id}
                                orb={selectedOrb}
                                heartsRemaining={selectedProgress.heartsRemaining}
                                earnedOrbs={selectedProgress.earnedOrbs}
                                onCorrectAnswer={handleCorrectAnswer}
                                onIncorrectAnswer={handleIncorrectAnswer}
                                onComplete={handleComplete}
                            />
                        </>
                    )}
                </>
            )}
        </main>
    );
}
