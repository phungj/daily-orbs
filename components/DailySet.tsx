
import {
    DailySet as DailySetData,
    OrbProgress,
} from "@/data/days/days";
import {orbStyles} from "@/components/orbStyles";
import OrbStatus from "@/components/OrbStatus";

interface DailySetProps {
    day: DailySetData;
    progress: Record<string, OrbProgress>;
    onSelectOrb: (orbId: string) => void;
    onBack: () => void;
}

export default function DailySet({
                                     day,
                                     progress,
                                     onSelectOrb,
                                     onBack,
                                 }: DailySetProps) {
    return (
        <div className="flex flex-col gap-3 w-full">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <button
                    className="btn btn-ghost p-2 rounded-lg border border-base-300 justify-self-start"
                    onClick={onBack}
                >
                    ← Back to Days
                </button>

                <h1 className="text-2xl font-bold text-center">
                    {new Date(day.date + "T12:00:00").toLocaleDateString(
                        undefined,
                        {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        }
                    )}
                </h1>

                <div />
            </div>

            <div className="grid grid-cols-1 gap-3">
                {day.orbs.map((orb, index) => {
                    const orbProgress = progress[orb.id];
                    const style = orbStyles[orb.category];

                    return (
                        <button
                            key={orb.id}
                            className="card bg-base-200 hover:bg-base-300 transition-colors text-left"
                            onClick={() => onSelectOrb(orb.id)}
                        >
                            <div className="card-body">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="min-w-0">
                                        <h2 className={`card-title font-bold ${style.title}`}>
                                            {orb.title}
                                        </h2>
                                    </div>

                                    <OrbStatus
                                        category={orb.category}
                                        earnedOrbs={orbProgress?.earnedOrbs ?? 0}
                                        heartsRemaining={orbProgress?.heartsRemaining ?? 3}
                                    />
                                </div>

                                <p className="text-sm text-base-content/60">
                                    {orb.instructions}
                                </p>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
