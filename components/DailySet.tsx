
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
}

export default function DailySet({
                                     day,
                                     progress,
                                     onSelectOrb,
                                 }: DailySetProps) {
    return (
        <div className="flex flex-col gap-3">
            <div>
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
                                        <div className={`text-sm ${style.title}`}>
                                            ORB {index + 1}
                                        </div>
                                        <h2 className="card-title">
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
