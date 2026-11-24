import day20261122 from "./2026-11-22";
import day20261014 from "./2026-10-14";
import day20261015 from "./2026-10-15";
import day20261027 from "./2026-10-27";
import day20261102 from "./2026-11-02";
import day20261103 from "./2026-11-03";
import day20261109 from "./2026-11-09";

import type { DailySet } from "./days";

export function loadDays(): DailySet[] {
    return [
        day20261122,
        day20261014,
        day20261015,
        day20261027,
        day20261102,
        day20261103,
        day20261109,
    ].sort((a, b) => b.date.localeCompare(a.date));
}