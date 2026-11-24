
import day20261014 from "./2026-10-14";
import day20261015 from "./2026-10-15";
import day20261027 from "./2026-10-27";
import day20261102 from "./2026-11-02";
import day20261103 from "./2026-11-03";
import day20261109 from "./2026-11-09";
import day20261110 from "./2026-11-10";
import day20261111 from "./2026-11-11";
import day20261122 from "./2026-11-22";
import day20261124 from "./2026-11-24";

import type { DailySet } from "./days";

export function loadDays(): DailySet[] {
    return [
        day20261014,
        day20261015,
        day20261027,
        day20261102,
        day20261103,
        day20261109,
        day20261110,
        day20261111,
        day20261122,
        day20261124,
    ].sort((a, b) => b.date.localeCompare(a.date));
}