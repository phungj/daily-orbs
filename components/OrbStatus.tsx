
"use client";

import { OrbCategory } from "@/data/days/days";
import { orbStyles } from "@/components/orbStyles";

interface OrbStatusProps {
    category: OrbCategory;
    earnedOrbs: number;
    heartsRemaining: number;
}

export default function OrbStatus({
                                      category,
                                      earnedOrbs,
                                      heartsRemaining,
                                  }: OrbStatusProps) {
    const style = orbStyles[category];

    return (
        <div className="flex flex-col items-end gap-1 shrink-0">
            {/* Orbs */}
            <div
                className={`flex items-center gap-1 text-xl ${style.color}`}
                aria-label={`${earnedOrbs} of 3 orbs earned`}
            >
                {Array.from({ length: 3 }, (_, index) => (
                    <span key={index}>
                        {index < earnedOrbs ? style.filledOrb : "◯"}
                    </span>
                ))}
            </div>

            {/* Hearts */}
            <div
                className={`flex items-center gap-1 text-xl ${style.color}`}
                aria-label={`${heartsRemaining} of 3 hearts remaining`}
            >
                {Array.from({ length: 3 }, (_, index) => (
                    <span key={index}>
                        {index < heartsRemaining ? style.filledHeart : "♡"}
                    </span>
                ))}
            </div>
        </div>
    );
}
