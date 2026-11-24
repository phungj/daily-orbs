import {StaticImageData} from "next/image";

export type OrbCategory =
    | "language"
    | "science"
    | "geography"
    | "pop-culture";

export interface OrbBase {
    id: string;
    title: string;
    category: OrbCategory;
    instructions: string;
    thresholds: number[];
    referenceImages?: QuestionImage[];
}

export interface QuestionImage {
    src: StaticImageData;
    alt: string;
}

export interface QuestionMedia {
    prompt?: string;
    promptImage?: QuestionImage;

    answer?: AcceptedAnswer;
    answerImage?: QuestionImage;

    explanation?: string;
    explanationImage?: QuestionImage;
}

export interface MatchingQuestion extends QuestionMedia {

}

export interface MatchingOrb extends OrbBase {
    type: "matching";
    promptLabel: string;
    answerLabel: string;
    questions: MatchingQuestion[];
}

export interface ShortAnswerQuestion extends QuestionMedia {
    answer: AcceptedAnswer;
}

export interface ShortAnswerOrb extends OrbBase {
    type: "short-answer";
    questions: ShortAnswerQuestion[];
}

export type Orb =
    | MatchingOrb
    | ShortAnswerOrb
    | CategorizationOrb
    | FreeResponseOrb;

export interface DailySet {
    date: string;
    orbs: Orb[];
}

export interface OrbProgress {
    correctAnswers: number;
    heartsRemaining: number;
    earnedOrbs: number;
    completed: boolean;
}

export interface GameEvent {
    type: "orb-earned" | "heart-lost";
    orbId: string;
    timestamp: number;
}


export interface CategorizationQuestion extends QuestionMedia {
    category: string;
}

export interface CategorizationOrb extends OrbBase {
    type: "categorization";
    categories: string[];
    questions: CategorizationQuestion[];
}

export interface MatchingOrbState {
    type: "matching";
    selectedPrompt: number | null;
    selectedAnswer: number | null;
    matched: number[];
    wrongPairs: {
        prompt: number;
        answer: number;
    }[];
    revealed: boolean;
    shuffledPrompts: number[];
    shuffledAnswers: number[];
}

export interface ShortAnswerOrbState {
    type: "short-answer";
    answers: Record<number, string>;
    answered: number[];
    wrongAttempts: Record<number, string[]>;
    revealed: boolean;
}

export interface CategorizationOrbState {
    type: "categorization";
    responses: Record<number, string>;
    revealed: boolean;
}

export type OrbInteractionState =
    | MatchingOrbState
    | ShortAnswerOrbState
    | CategorizationOrbState
    | FreeResponseOrbState;

export interface OrbInteraction {
    [orbId: string]: OrbInteractionState;
}

export interface GameSession {
    events: GameEvent[];
    progress: Record<string, OrbProgress>;
    interaction: OrbInteraction;
}

export interface FreeResponseOrb extends OrbBase {
    type: "free-response";
    prompt: string;
    answers: AcceptedAnswer[];
    safeAnswers?: AcceptedAnswer[];
}

export interface FreeResponseOrbState {
    type: "free-response";
    answer: string;
    foundAnswers: string[];
    foundSafeAnswers: string[];
    wrongAttempts: string[];
    revealed: boolean;
}

export interface AcceptedAnswer {
    text: string;
    aliases?: string[];
}