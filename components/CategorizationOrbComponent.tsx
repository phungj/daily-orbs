
"use client";

import { useState } from "react";
import { CategorizationOrb as CategorizationOrbData } from "@/data/days/days";

interface CategorizationOrbProps {
    orb: CategorizationOrbData;
    heartsRemaining: number;
    earnedOrbs: number;
    onCorrectAnswer: (orbId: string) => void;
    onIncorrectAnswer: (orbId: string) => void;
    onComplete: (orbId: string) => void;
}

export default function CategorizationOrbComponent({
                                                       orb,
                                                       heartsRemaining,
                                                       earnedOrbs,
                                                       onCorrectAnswer,
                                                       onIncorrectAnswer,
                                                       onComplete,
                                                   }: CategorizationOrbProps) {
    const [responses, setResponses] = useState<Record<number, string>>({});
    const [revealed, setRevealed] = useState(false);

    function selectCategory(questionIndex: number, category: string) {
        if (responses[questionIndex] !== undefined || revealed) return;

        const question = orb.questions[questionIndex];
        const isCorrect = category === question.category;

        setResponses(previous => ({
            ...previous,
            [questionIndex]: category,
        }));

        if (isCorrect) {
            onCorrectAnswer(orb.id);
        } else {
            onIncorrectAnswer(orb.id);
        }

        if (Object.keys(responses).length + 1 === orb.questions.length) {
            onComplete(orb.id);
        }
    }

    function revealAnswers() {
        if (complete) return;

        setRevealed(true);
        onComplete(orb.id);
    }

    const answeredCount = Object.keys(responses).length;
    const complete = revealed || answeredCount === orb.questions.length;

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
                        {answeredCount + (revealed ? orb.questions.length - answeredCount : 0)} / {orb.questions.length} answered
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

            <div className="flex flex-col gap-3">
                {orb.questions.map((question, index) => {
                    const response = responses[index];
                    const answered = response !== undefined;
                    const wasRevealed = revealed && !answered;
                    const correct = response === question.category;

                    return (
                        <div
                            key={index}
                            className="flex flex-col gap-2 py-3"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                <p className="font-semibold flex-1">
                                    {question.prompt}
                                </p>

                                {!answered && !revealed && (
                                    <div className="flex flex-wrap gap-2 sm:justify-end">
                                        {orb.categories.map(category => {
                                            const remainingCount = orb.questions.filter(
                                                (item, questionIndex) =>
                                                    item.category === category &&
                                                    responses[questionIndex] === undefined
                                            ).length;

                                            return (
                                                <button
                                                    key={category}
                                                    className="btn btn-sm p-4 rounded-lg border border-base-300 btn-outline"
                                                    onClick={() => selectCategory(index, category)}
                                                >
                                                    <p>{category}</p>
                                                    <p>{remainingCount}</p>
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>

                            {answered && (
                                <div className={`text-sm pl-1 ${
                                    correct ? "text-success" : "text-error"
                                }`}>
                                    <p className="font-semibold">
                                        {correct
                                            ? "Correct! The answer is " + question.category + "."
                                            : "Incorrect. The answer is " + question.category + "."}
                                    </p>

                                    {question.explanation && (
                                        <p className="mt-1 text-base-content/70">
                                            {question.explanation}
                                        </p>
                                    )}
                                </div>
                            )}

                            {wasRevealed && (
                                <div className="text-sm pl-1">
                                    <p className="font-semibold">
                                        Answer: {question.category}.
                                    </p>

                                    {question.explanation && (
                                        <p className="mt-1 text-base-content/70">
                                            {question.explanation}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {!complete && (
                <button
                    className="btn btn-outline btn-sm self-center rounded-lg border border-base-300 p-2"
                    onClick={revealAnswers}
                >
                    Reveal remaining answers
                </button>
            )}

            {complete && (
                <div className="alert alert-success">
                    All categories completed! Well done.
                </div>
            )}
        </div>
    );
}
