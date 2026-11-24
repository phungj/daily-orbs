
"use client";

import Image from "next/image";
import {
    FreeResponseOrb,
    FreeResponseOrbState,
} from "@/data/days/days";
import OrbStatus from "@/components/OrbStatus";
import { orbStyles } from "@/components/orbStyles";
import { matchesAnswer, normalizeAnswer } from "@/data/answerUtils";

interface OrbProps {
    orb: FreeResponseOrb;
    heartsRemaining: number;
    earnedOrbs: number;
    correctAnswers: number;
    state: FreeResponseOrbState;
    onStateChange: (state: FreeResponseOrbState) => void;
    onCorrectAnswer: (orbId: string) => void;
    onIncorrectAnswer: (orbId: string) => void;
    onComplete: (orbId: string) => void;
}

export default function FreeResponseOrbComponent({
                                                     orb,
                                                     heartsRemaining,
                                                     earnedOrbs,
                                                     correctAnswers,
                                                     state,
                                                     onStateChange,
                                                     onCorrectAnswer,
                                                     onIncorrectAnswer,
                                                     onComplete,
                                                 }: OrbProps) {
    const {
        answer,
        foundAnswers,
        foundSafeAnswers,
        wrongAttempts,
        revealed,
    } = state;

    const safeAnswers = orb.safeAnswers ?? [];
    const complete = foundAnswers.length === orb.answers.length;
    const categoryColor = orbStyles[orb.category].color;

    function updateState(updates: Partial<FreeResponseOrbState>) {
        onStateChange({
            ...state,
            ...updates,
        });
    }

    function submitAnswer() {
        if (revealed || complete) return;

        const guess = answer.trim();
        const normalizedGuess = normalizeAnswer(guess);

        if (!normalizedGuess) return;

        const correctAnswer = orb.answers.find(
            item => matchesAnswer(guess, item)
        );

        const safeAnswer = safeAnswers.find(
            item => matchesAnswer(guess, item)
        );

        if (correctAnswer) {
            const alreadyFound = foundAnswers.some(
                item =>
                    normalizeAnswer(item) ===
                    normalizeAnswer(correctAnswer.text)
            );

            if (alreadyFound) {
                updateState({ answer: "" });
                return;
            }

            const newFoundAnswers = [...foundAnswers, correctAnswer.text];

            updateState({
                answer: "",
                foundAnswers: newFoundAnswers,
            });

            onCorrectAnswer(orb.id);

            if (newFoundAnswers.length === orb.answers.length) {
                onComplete(orb.id);
            }

            return;
        }

        if (safeAnswer) {
            const alreadyFound = foundSafeAnswers.some(
                item =>
                    normalizeAnswer(item) ===
                    normalizeAnswer(safeAnswer.text)
            );

            if (alreadyFound) {
                updateState({ answer: "" });
                return;
            }

            updateState({
                answer: "",
                foundSafeAnswers: [...foundSafeAnswers, safeAnswer.text],
            });

            return;
        }

        const alreadyTried = wrongAttempts.some(
            item => normalizeAnswer(item) === normalizedGuess
        );

        if (!alreadyTried) {
            updateState({
                answer: "",
                wrongAttempts: [...wrongAttempts, guess],
            });

            onIncorrectAnswer(orb.id);
        } else {
            updateState({ answer: "" });
        }
    }

    function revealAnswers() {
        if (revealed || complete) return;

        updateState({
            revealed: true,
            answer: "",
        });

        onComplete(orb.id);
    }

    function isFound(item: string) {
        return foundAnswers.some(
            found => normalizeAnswer(found) === normalizeAnswer(item)
        );
    }

    function isSafeFound(item: string) {
        return foundSafeAnswers.some(
            found => normalizeAnswer(found) === normalizeAnswer(item)
        );
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                    <h1 className="text-2xl font-bold">{orb.title}</h1>
                    <p className="text-base-content/70 mt-1">
                        {orb.instructions}
                    </p>
                </div>

                <OrbStatus
                    category={orb.category}
                    earnedOrbs={earnedOrbs}
                    heartsRemaining={heartsRemaining}
                    correctAnswers={correctAnswers}
                    thresholds={orb.thresholds}
                />
            </div>

            {orb.referenceImages && orb.referenceImages.length > 0 && (
                <div className="flex flex-col items-center gap-3">
                    {orb.referenceImages.map((image, index) => (
                        <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className="max-w-full max-h-[360px] w-auto h-auto object-contain rounded-lg"
                            sizes="(max-width: 768px) 100vw, 700px"
                        />
                    ))}
                </div>
            )}

            <div className="rounded-lg bg-base-200 py-4 flex flex-col gap-3">
                {!revealed && !complete && (
                    <form
                        onSubmit={event => {
                            event.preventDefault();
                            submitAnswer();
                        }}
                        className="flex flex-col sm:flex-row gap-2"
                    >
                        <input
                            type="text"
                            className="input input-bordered w-full"
                            placeholder="Enter an answer..."
                            value={answer}
                            onChange={event =>
                                updateState({ answer: event.target.value })
                            }
                        />

                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={!answer.trim()}
                        >
                            Submit
                        </button>
                    </form>
                )}
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="font-bold">Answers</h2>

                {orb.answers.map((item, index) => {
                    const found = isFound(item.text);
                    const showAnswer = found || revealed;

                    return (
                        <div
                            key={item.text}
                            className={`rounded-lg border p-3 flex items-center gap-3 ${
                                found
                                    ? "border-success/40"
                                    : "border-base-300"
                            }`}
                        >
                            <span className="font-bold text-base-content/60 w-6 text-right">
                                {index + 1}.
                            </span>

                            <span className={found ? "text-success" : ""}>
                                {showAnswer ? item.text : ""}
                            </span>

                            {found && (
                                <span className="ml-auto text-success">✓</span>
                            )}
                        </div>
                    );
                })}
            </div>

            {foundSafeAnswers.length > 0 && (
                <div className="flex flex-col gap-2">
                    {safeAnswers.map((item, index) => {
                        if (!isSafeFound(item.text)) return null;

                        return (
                            <div
                                key={item.text}
                                className="rounded-lg border border-base-300 p-3 flex items-center gap-3"
                            >
                                <span className="font-bold text-base-content/60 w-6 text-right">
                                    {orb.answers.length + index + 1}.
                                </span>
                                {item.text}
                            </div>
                        );
                    })}
                </div>
            )}

            {wrongAttempts.length > 0 && (
                <div className="flex flex-col gap-2">
                    {wrongAttempts.map((item, index) => (
                        <div
                            key={`${item}-${index}`}
                            className="rounded-lg bg-error/10 border border-error/40 p-3 flex items-center gap-3"
                        >
                            <span className="line-through flex-1">
                                {item}
                            </span>

                            <span
                                className={`text-2xl ${categoryColor}`}
                                aria-label="Incorrect answer"
                            >
                                💔
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {!revealed && !complete && (
                <button
                    className="btn btn-outline btn-sm self-center rounded-lg border border-base-300 p-2"
                    onClick={revealAnswers}
                >
                    Reveal Answers
                </button>
            )}
        </div>
    );
}
