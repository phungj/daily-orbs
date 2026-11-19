"use client";

import { useState } from "react";
import { DailySet as DailySetData } from "@/data/days/days";
import DayList from "./DayList";
import DailySet from "@/components/DailySet";
import Orb from "@/components/Orb";

interface AppProps {
    days: DailySetData[];
}

export default function App({ days }: AppProps) {
    const [selectedDay, setSelectedDay] =
        useState<DailySetData | null>(null);

    const [selectedOrbId, setSelectedOrbId] =
        useState<string | null>(null);

    return (
        <main className="container mx-auto max-w-3xl p-4">
            {selectedDay === null ? (
                <>
                    <h1 className="text-3xl font-bold mb-6 text-center">
                        Daily Orbs
                    </h1>

                    <DayList
                        days={days}
                        onSelectDay={setSelectedDay}
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

                    <DailySet
                        day={selectedDay}
                        onSelectOrb={setSelectedOrbId}
                    />
                </>
            ) : (
                <>
                    <button
                        className="btn btn-ghost mb-4"
                        onClick={() => setSelectedOrbId(null)}
                    >
                        ← Back to orbs
                    </button>

                    <div>
                        <Orb
                            orb={selectedDay.orbs.find(
                                (orb) => orb.id === selectedOrbId
                            )!}
                        />
                    </div>
                </>
            )}
        </main>
    );
}