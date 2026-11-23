import { AcceptedAnswer } from "@/data/days/days";

export function normalizeAnswer(value: string): string {
    return value
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
}

export function matchesAnswer(
    guess: string,
    acceptedAnswer: AcceptedAnswer
): boolean {
    const normalizedGuess = normalizeAnswer(guess);

    return [
        acceptedAnswer.text,
        ...(acceptedAnswer.aliases ?? []),
    ].some(
        candidate => normalizeAnswer(candidate) === normalizedGuess
    );
}