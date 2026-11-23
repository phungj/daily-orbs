
"use client";

import { useEffect, useState } from "react";
import {
    DailySet as DailySetData,
    GameSession, Orb, OrbInteractionState,
} from "@/data/days/days";
import DayList from "./DayList";
import DailySet from "@/components/DailySet";
import OrbRenderer from "@/components/OrbRenderer";

interface AppProps {
    days: DailySetData[];
}

const STARTING_HEARTS = 3;
const DAILY_ORB_GOAL = 6;
const STORAGE_KEY = "daily-orbs";

const EMPTY_SESSION: GameSession = {
    events: [],
    progress: {},
    interaction: {},
};

function createInitialSession(day: DailySetData): GameSession {
    const progress: GameSession["progress"] = {};
    const interaction: GameSession["interaction"] = {};

    for (const orb of day.orbs) {
        progress[orb.id] = {
            correctAnswers: 0,
            heartsRemaining: STARTING_HEARTS,
            earnedOrbs: 0,
            completed: false,
        };

        interaction[orb.id] = createInitialInteraction(orb);
    }

    return {
        events: [],
        progress,
        interaction,
    };
}

function createInitialInteraction(orb: Orb): OrbInteractionState {
    switch (orb.type) {
        case "matching":
            return {
                type: "matching",
                selectedPrompt: null,
                selectedAnswer: null,
                matched: [],
                wrongPairs: [],
                revealed: false,
                shuffledPrompts: orb.questions
                    .map((_, index) => index)
                    .sort(() => Math.random() - 0.5),
                shuffledAnswers: orb.questions
                    .map((_, index) => index)
                    .sort(() => Math.random() - 0.5),
            };

        case "short-answer":
            return {
                type: "short-answer",
                answers: {},
                answered: [],
                wrongAttempts: {},
                revealed: false,
            };

        case "categorization":
            return {
                type: "categorization",
                responses: {},
                revealed: false,
            };

        case "free-response":
            return {
                type: "free-response",
                answer: "",
                foundAnswers: [],
                foundSafeAnswers: [],
                wrongAttempts: [],
                revealed: false,
            };
    }
}

function isRecord(value: unknown): value is Record<string, unknown> {
    return (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
    );
}

function isStoredSessions(
    value: unknown
): value is Record<string, GameSession> {
    if (!isRecord(value)) {
        return false;
    }

    return Object.values(value).every((session: unknown) => {
        if (
            !isRecord(session) ||
            !Array.isArray(session.events) ||
            !isRecord(session.progress) ||
            !isRecord(session.interaction)
        ) {
            return false;
        }

        const validEvents = session.events.every((event: unknown) =>
            isRecord(event) &&
            (event.type === "orb-earned" || event.type === "heart-lost") &&
            typeof event.orbId === "string" &&
            typeof event.timestamp === "number"
        );

        const validProgress = Object.values(session.progress).every(
            (progress: unknown) =>
                isRecord(progress) &&
                typeof progress.correctAnswers === "number" &&
                typeof progress.heartsRemaining === "number" &&
                typeof progress.earnedOrbs === "number" &&
                typeof progress.completed === "boolean"
        );

        return validEvents && validProgress;
    });
}

export default function App({ days }: AppProps) {
    const [selectedDay, setSelectedDay] =
        useState<DailySetData | null>(null);

    const [selectedOrbId, setSelectedOrbId] =
        useState<string | null>(null);

    const [sessions, setSessions] = useState<
        Record<string, GameSession>
    >({});

    const [isLoaded, setIsLoaded] = useState(false);

    // Load saved progress once when the app starts.
    useEffect(() => {
        try {
            const saved = localStorage.getItem(STORAGE_KEY);

            if (saved) {
                const parsed: unknown = JSON.parse(saved);

                if (isStoredSessions(parsed)) {
                    setSessions(parsed);
                }
            }
        } catch (error) {
            console.error("Could not load saved game progress:", error);
        }

        setIsLoaded(true);
    }, []);

    // Save progress whenever sessions change.
    useEffect(() => {
        if (!isLoaded) return;

        try {
            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(sessions)
            );
        } catch (error) {
            console.error("Could not save game progress:", error);
        }
    }, [sessions, isLoaded]);

    const session = selectedDay
        ? sessions[selectedDay.date] ?? createInitialSession(selectedDay)
        : EMPTY_SESSION;

    function updateSession(
        update: (previous: GameSession) => GameSession
    ) {
        if (!selectedDay) return;

        const date = selectedDay.date;

        setSessions(previous => ({
            ...previous,
            [date]: update(
                previous[date] ?? createInitialSession(selectedDay)
            ),
        }));
    }

    function updateOrbInteraction(
        orbId: string,
        state: OrbInteractionState
    ) {
        updateSession(previous => ({
            ...previous,
            interaction: {
                ...previous.interaction,
                [orbId]: state,
            },
        }));
    }

    function startDay(day: DailySetData) {
        setSelectedDay(day);
        setSelectedOrbId(null);

        setSessions(previous => ({
            ...previous,
            [day.date]: previous[day.date] ?? createInitialSession(day),
        }));
    }

    function handleCorrectAnswer(orbId: string) {
        const orb = selectedDay?.orbs.find(
            item => item.id === orbId
        );

        if (!orb) return;

        const timestamp = Date.now();

        updateSession(previous => {
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

        updateSession(previous => {
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
        updateSession(previous => {
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

                if (earnedCount === DAILY_ORB_GOAL) {
                    result.push("🏆");
                }
            } else {
                result.push(symbols[orb.category].heart);
            }
        }

        const shareText = `Jon's DailyOrbs ${date}\n${result.join("")}`;

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

    const selectedInteraction = selectedOrbId
        ? session.interaction[selectedOrbId]
        : null;

    const completedDates = days
        .filter(day =>
            day.orbs.length > 0 &&
            day.orbs.every(
                orb => sessions[day.date]?.progress[orb.id]?.completed
            )
        )
        .map(day => day.date);

    return (
        <main className="container mx-auto max-w-3xl p-4">
            {selectedDay === null ? (
                <>
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        Jon's Daily Orbs
                    </h1>

                    <DayList
                        days={days}
                        completedDates={completedDates}
                        onSelectDay={startDay}
                    />
                </>
            ) : selectedOrbId === null ? (
                <div className="min-h-[calc(100vh-4rem)] w-full flex flex-col items-center justify-center p-4">
                    <div className="w-full max-w-2xl">
                        <DailySet
                            day={selectedDay}
                            progress={session.progress}
                            onSelectOrb={setSelectedOrbId}
                            onBack={() => setSelectedDay(null)}
                        />
                    </div>

                    <div className="mt-4">
                        <button
                            className="btn btn-outline btn-sm p-2 rounded-lg border border-base-300"
                            onClick={handleShare}
                        >
                            Share Results
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    <button
                        className="btn btn-ghost mb-4 p-2 rounded-lg border border-base-300"
                        onClick={() => setSelectedOrbId(null)}
                    >
                        ← Back to Orbs
                    </button>

                    {selectedOrb && selectedProgress && selectedInteraction && (
                        <OrbRenderer
                            key={selectedOrb.id}
                            orb={selectedOrb}
                            heartsRemaining={selectedProgress.heartsRemaining}
                            earnedOrbs={selectedProgress.earnedOrbs}
                            state={selectedInteraction}
                            onStateChange={state =>
                                updateOrbInteraction(selectedOrb.id, state)
                            }
                            onCorrectAnswer={handleCorrectAnswer}
                            onIncorrectAnswer={handleIncorrectAnswer}
                            onComplete={handleComplete}
                        />
                    )}
                </>
            )}
        </main>
    );
}
