"use client";

import { Orb } from "@/data/days/days";
import MatchingOrbComponent from "@/components/MatchingOrbComponent";
import ShortAnswerOrbComponent from "@/components/ShortAnswerOrbComponent";
import CategorizationOrbComponent from "@/components/CategorizationOrbComponent";

interface OrbRendererProps {
    orb: Orb;
    heartsRemaining: number;
    earnedOrbs: number;
    onCorrectAnswer: (orbId: string) => void;
    onIncorrectAnswer: (orbId: string) => void;
    onComplete: (orbId: string) => void;
}

export default function OrbRenderer(props: OrbRendererProps) {
    switch (props.orb.type) {
        case "matching":
            return <MatchingOrbComponent {...props} orb={props.orb} />;

        case "short-answer":
            return (
                <ShortAnswerOrbComponent
                    {...props}
                    orb={props.orb}
                />
            );

        case "categorization":
            return (
                <CategorizationOrbComponent
                    {...props}
                    orb={props.orb}
                />
            );

        default:
            return null;
    }
}