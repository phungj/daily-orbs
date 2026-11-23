
"use client";

import { OrbCategory } from "@/data/days/days";
import { orbStyles } from "@/components/orbStyles";

interface OrbStatusProps {
    category: OrbCategory;
    earnedOrbs: number;
    heartsRemaining: number;
    correctAnswers: number;
    thresholds: number[];
}

function getSlicePath(
    index: number,
    totalSlices: number,
    radius = 10,
    center = 12
): string {
    const startAngle = (index / totalSlices) * 2 * Math.PI - Math.PI / 2;
    const endAngle = ((index + 1) / totalSlices) * 2 * Math.PI - Math.PI / 2;

    const startX = center + radius * Math.cos(startAngle);
    const startY = center + radius * Math.sin(startAngle);
    const endX = center + radius * Math.cos(endAngle);
    const endY = center + radius * Math.sin(endAngle);

    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

    return [
        `M ${center} ${center}`,
        `L ${startX} ${startY}`,
        `A ${radius} ${radius} 0 ${largeArc} 1 ${endX} ${endY}`,
        "Z"
    ].join(" ");
}

function ProgressOrb({
                         filled,
                         total
                     }: {
    filled: number;
    total: number;
}) {
    return (
        <svg
            viewBox="0 0 24 24"
            className="w-6 h-6"
            aria-hidden="true"
        >
            {/* Filled portions */}
            {Array.from({ length: filled }, (_, index) => (
                <path
                    key={index}
                    d={getSlicePath(index, total)}
                    fill="currentColor"
                />
            ))}

            {/* Outer edge */}
            <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
            />
        </svg>
    );
}

export default function OrbStatus({
                                      category,
                                      earnedOrbs,
                                      heartsRemaining,
                                      correctAnswers,
                                      thresholds
                                  }: OrbStatusProps) {
    const style = orbStyles[category];

    return (
        <div className="flex flex-col items-end gap-1 shrink-0">
            {/* Orbs */}
            <div
                className={`flex items-center gap-1 ${style.color}`}
                aria-label={`${earnedOrbs} of 3 orbs earned`}
            >
                {Array.from({ length: 3 }, (_, index) => {
                    const previousThreshold =
                        index === 0 ? 0 : thresholds[index - 1];

                    const currentThreshold = thresholds[index];

                    const slicesNeeded =
                        currentThreshold - previousThreshold;

                    const slicesFilled = Math.max(
                        0,
                        Math.min(
                            correctAnswers - previousThreshold,
                            slicesNeeded
                        )
                    );

                    return (
                        <ProgressOrb
                            key={index}
                            filled={slicesFilled}
                            total={slicesNeeded}
                        />
                    );
                })}
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
