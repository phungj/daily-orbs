
export interface MatchingQuestion {
    prompt: string;
    answer: string;
    explanation?: string;
}

export interface MatchingOrb {
    id: string;
    title: string;
    type: "matching";
    instructions: string;
    questions: MatchingQuestion[];
}

export interface DailySet {
    date: string;
    orbs: MatchingOrb[];
}
