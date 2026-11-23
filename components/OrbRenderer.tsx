"use client";

import {
    Orb,
    OrbInteractionState,
    MatchingOrbState,
    ShortAnswerOrbState,
    CategorizationOrbState, FreeResponseOrbState,
} from "@/data/days/days";

import MatchingOrbComponent from "@/components/MatchingOrbComponent";
import ShortAnswerOrbComponent from "@/components/ShortAnswerOrbComponent";
import CategorizationOrbComponent from "@/components/CategorizationOrbComponent";
import FreeResponseOrbComponent from "@/components/FreeResponseOrbComponent";

interface OrbRendererProps {
    orb: Orb;
    heartsRemaining: number;
    earnedOrbs: number;
    correctAnswers: number;
    state: OrbInteractionState;
    onStateChange: (state: OrbInteractionState) => void;
    onCorrectAnswer: (orbId: string) => void;
    onIncorrectAnswer: (orbId: string) => void;
    onComplete: (orbId: string) => void;
}

export default function OrbRenderer(props: OrbRendererProps) {
    switch (props.orb.type) {
        case "matching":
            return (
                <MatchingOrbComponent
                    {...props}
                    orb={props.orb}
                    state={props.state as MatchingOrbState}
                    onStateChange={props.onStateChange}
                />
            );

        case "short-answer":
            return (
                <ShortAnswerOrbComponent
                    {...props}
                    orb={props.orb}
                    state={props.state as ShortAnswerOrbState}
                    onStateChange={props.onStateChange}
                />
            );

        case "categorization":
            return (
                <CategorizationOrbComponent
                    {...props}
                    orb={props.orb}
                    state={props.state as CategorizationOrbState}
                    onStateChange={props.onStateChange}
                />
            );

        case "free-response":
            return (
                <FreeResponseOrbComponent
                    {...props}
                    orb={props.orb}
                    state={props.state as FreeResponseOrbState}
                    onStateChange={props.onStateChange}
                />
            );
        default:
            return null;
    }
}