
import { DailySet as DailySetData } from "@/data/days/days";

interface DayListProps {
    days: DailySetData[];
    completedDates: string[];
    onSelectDay: (day: DailySetData) => void;
}

export default function DayList({
                                    days,
                                    completedDates,
                                    onSelectDay
                                }: DayListProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            {days.map(day => (
                <button
                    key={day.date}
                    className="btn btn-outline w-72 grid grid-cols-[1fr_auto_1fr] items-center cursor-pointer"
                    onClick={() => onSelectDay(day)}
                >
                    <span></span>

                    <span>
        {new Date(day.date + "T12:00:00").toLocaleDateString(
            undefined,
            {
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        )}
    </span>

                    <span className="justify-self-end text-success">
        {completedDates.includes(day.date) && "✓"}
    </span>
                </button>
            ))}
        </div>
    );
}
