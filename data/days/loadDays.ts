
import fs from "fs";
import path from "path";
import { DailySet } from "./days";

const daysDirectory = path.join(
    process.cwd(),
    "data",
    "days"
);

export function loadDays(): DailySet[] {
    const files = fs.readdirSync(daysDirectory)
        .filter(file => file.endsWith(".json"));

    const days = files.map(file => {
        const filePath = path.join(daysDirectory, file);
        const contents = fs.readFileSync(filePath, "utf8");

        return JSON.parse(contents) as DailySet;
    });

    return days.sort((a, b) =>
        b.date.localeCompare(a.date)
    );
}
