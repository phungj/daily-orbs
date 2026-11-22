import {OrbCategory} from "@/data/days/days";

interface OrbStyle {
    color: string;
    title: string;
    filledOrb: string;
    filledHeart: string;
}

export const orbStyles: Record<OrbCategory, OrbStyle> = {
    language: {
        color: "text-orange-500",
        title: "text-orange-500",
        filledOrb: "🟠",
        filledHeart: "🧡",
    },
    science: {
        color: "text-green-500",
        title: "text-green-500",
        filledOrb: "🟢",
        filledHeart: "💚",
    },
    geography: {
        color: "text-blue-500",
        title: "text-blue-500",
        filledOrb: "🔵",
        filledHeart: "💙",
    },
    "pop-culture": {
        color: "text-purple-500",
        title: "text-purple-500",
        filledOrb: "🟣",
        filledHeart: "💜",
    },
};