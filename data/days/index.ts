import day20261122 from "./2026-11-22";

import type { DailySet } from "./days";

export function loadDays(): DailySet[] {
    return [
        day20261122,
    ].sort((a, b) => b.date.localeCompare(a.date));
}