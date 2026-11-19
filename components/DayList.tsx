import { DailySet as DailySetData } from "@/data/days/days";

interface DayListProps {
    days: DailySetData[];
    onSelectDay: (day: DailySetData) => void;
}

export default function DayList({
                                    days,
                                    onSelectDay
                                }: DayListProps) {
    return (
        <div className="flex flex-col gap-2">
            {days.map(day => (
                <button
                    key={day.date}
                    className="btn btn-outline justify-between"
                    onClick={() => onSelectDay(day)}
                >
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
                </button>
            ))}
        </div>
    );
}