
export interface OrbBase {
    id: string;
    title: string;
    instructions: string;
    thresholds: number[];
}

export interface MatchingQuestion {
    prompt: string;
    answer: string;
    explanation?: string;
}

export interface MatchingOrb extends OrbBase {
    type: "matching";
    questions: MatchingQuestion[];
}

export interface ShortAnswerQuestion {
    prompt: string;
    answer: string;
    explanation?: string;
}

export interface ShortAnswerOrb extends OrbBase {
    type: "short-answer";
    questions: ShortAnswerQuestion[];
}

export type Orb =
    | MatchingOrb
    | ShortAnswerOrb
    | CategorizationOrb;

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

export interface GameSession {
    events: GameEvent[];
    progress: Record<string, OrbProgress>;
}


export interface CategorizationQuestion {
    prompt: string;
    category: string;
    explanation?: string;
}

export interface CategorizationOrb extends OrbBase {
    type: "categorization";
    categories: string[];
    questions: CategorizationQuestion[];
}
