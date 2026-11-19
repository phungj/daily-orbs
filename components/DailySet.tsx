import { DailySet as DailySetData } from "@/data/days/days";

interface DailySetProps {
    day: DailySetData;
    onSelectOrb: (orbId: string) => void;
}

export default function DailySet({
                                     day,
                                     onSelectOrb
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
                            day: "numeric"
                        }
                    )}
                </h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
                {day.orbs.map((orb, index) => (
                    <button
                        key={orb.id}
                        className="card bg-base-200 hover:bg-base-300 transition-colors text-left"
                        onClick={() => onSelectOrb(orb.id)}
                    >
                        <div className="card-body">
                            <div className="text-sm text-base-content/50">
                                ORB {index + 1}
                            </div>
                            <h2 className="card-title">
                                {orb.title}
                            </h2>
                            <p className="text-sm text-base-content/60">
                                {orb.instructions}
                            </p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}