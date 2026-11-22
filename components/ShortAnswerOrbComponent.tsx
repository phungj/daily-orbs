
"use client";

import { useState } from "react";
import { ShortAnswerOrb as ShortAnswerOrbData } from "@/data/days/days";

interface ShortAnswerOrbProps {
    orb: ShortAnswerOrbData;
    heartsRemaining: number;
    earnedOrbs: number;
    onCorrectAnswer: (orbId: string) => void;
    onIncorrectAnswer: (orbId: string) => void;
    onComplete: (orbId: string) => void;
}

export default function ShortAnswerOrbComponent({
                                           orb,
                                           heartsRemaining,
                                           earnedOrbs,
                                           onCorrectAnswer,
                                           onIncorrectAnswer,
                                           onComplete,
                                       }: ShortAnswerOrbProps) {
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [answered, setAnswered] = useState<number[]>([]);
    const [wrongAttempts, setWrongAttempts] = useState<
        Record<number, string[]>
    >({});

    function submitAnswer(index: number) {
        if (answered.includes(index)) return;

        const guess = (answers[index] ?? "").trim();
        if (!guess) return;

        const question = orb.questions[index];
        const normalizedGuess = guess.toLowerCase();
        const normalizedAnswer = question.answer.trim().toLowerCase();

        if (normalizedGuess === normalizedAnswer) {
            const newAnswered = [...answered, index];

            setAnswered(newAnswered);
            onCorrectAnswer(orb.id);

            if (newAnswered.length === orb.questions.length) {
                onComplete(orb.id);
            }
        } else {
            const previousAttempts = wrongAttempts[index] ?? [];

            if (!previousAttempts.includes(normalizedGuess)) {
                setWrongAttempts(previous => ({
                    ...previous,
                    [index]: [...(previous[index] ?? []), normalizedGuess],
                }));

                onIncorrectAnswer(orb.id);
            }
        }
    }

    const remainingQuestions = orb.questions
        .map((question, index) => ({ question, index }))
        .filter(item => !answered.includes(item.index));

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-2xl font-bold">{orb.title}</h1>
                <p className="text-base-content/70 mt-2">
                    {orb.instructions}
                </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                    <p className="text-sm text-base-content/60">
                        {earnedOrbs} / 3 orbs earned
                    </p>

                    <p className="text-sm text-base-content/60">
                        {answered.length} / {orb.questions.length} answered
                    </p>
                </div>

                <div className="flex flex-col items-end gap-1">
                    <div className="flex items-center gap-1">
                        {Array.from({ length: 3 }, (_, index) => (
                            <span
                                key={index}
                                className={index < earnedOrbs ? "text-warning" : "text-base-300"}
                            >
                                {index < earnedOrbs ? "●" : "○"}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center gap-1">
                        {Array.from({ length: 3 }, (_, index) => (
                            <span
                                key={index}
                                className={index < heartsRemaining ? "text-error" : "text-base-300"}
                            >
                                {index < heartsRemaining ? "♥" : "♡"}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {remainingQuestions.map(({ question, index }) => (
                <form
                    key={index}
                    className="flex flex-col gap-2 p-4"
                    onSubmit={event => {
                        event.preventDefault();
                        submitAnswer(index);
                    }}
                >
                    <label className="font-semibold">
                        {question.prompt}
                    </label>

                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="text"
                            className="input input-bordered flex-1"
                            placeholder="Your answer..."
                            value={answers[index] ?? ""}
                            onChange={event =>
                                setAnswers(previous => ({
                                    ...previous,
                                    [index]: event.target.value,
                                }))
                            }
                        />

                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            Submit
                        </button>
                    </div>

                    {(wrongAttempts[index]?.length ?? 0) > 0 && (
                        <div className="text-sm">
                            <p className="text-error font-semibold">
                                Previously attempted answers:
                            </p>
                            <ul className="list-disc list-inside text-base-content/70">
                                {wrongAttempts[index].map((answer, attemptIndex) => (
                                    <li key={attemptIndex}>{answer}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </form>
            ))}

            {answered.map(index => {
                const question = orb.questions[index];

                return (
                    <div
                        key={index}
                        className="flex flex-col gap-2 rounded-lg border border-success/40 p-4"
                    >
                        <p className="font-semibold">
                            {question.prompt}
                        </p>

                        <p className="text-success">
                            {question.answer}
                        </p>

                        {question.explanation && (
                            <p className="text-sm text-base-content/70">
                                {question.explanation}
                            </p>
                        )}
                    </div>
                );
            })}

            {answered.length === orb.questions.length && (
                <div className="alert alert-success">
                    All questions answered! Well done.
                </div>
            )}
        </div>
    );
}
