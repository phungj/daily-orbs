
"use client";

import Image from "next/image";
import {
    CategorizationOrb as CategorizationOrbData,
    CategorizationOrbState,
} from "@/data/days/days";
import OrbStatus from "@/components/OrbStatus";
import { orbStyles } from "@/components/orbStyles";

interface CategorizationOrbProps {
    orb: CategorizationOrbData;
    heartsRemaining: number;
    earnedOrbs: number;
    correctAnswers: number;
    state: CategorizationOrbState;
    onStateChange: (state: CategorizationOrbState) => void;
    onCorrectAnswer: (orbId: string) => void;
    onIncorrectAnswer: (orbId: string) => void;
    onComplete: (orbId: string) => void;
}

export default function CategorizationOrbComponent({
                                                       orb,
                                                       heartsRemaining,
                                                       earnedOrbs,
                                                       correctAnswers,
                                                       state,
                                                       onStateChange,
                                                       onCorrectAnswer,
                                                       onIncorrectAnswer,
                                                       onComplete,
                                                   }: CategorizationOrbProps) {
    const { responses, revealed } = state;

    const categoryColor = orbStyles[orb.category].color;

    function updateState(updates: Partial<CategorizationOrbState>) {
        onStateChange({
            ...state,
            ...updates,
        });
    }

    function selectCategory(questionIndex: number, category: string) {
        if (responses[questionIndex] !== undefined || revealed) return;

        const question = orb.questions[questionIndex];
        const isCorrect = category === question.category;

        const newResponses = {
            ...responses,
            [questionIndex]: category,
        };

        updateState({
            responses: newResponses,
        });

        if (isCorrect) {
            onCorrectAnswer(orb.id);
        } else {
            onIncorrectAnswer(orb.id);
        }

        if (Object.keys(newResponses).length === orb.questions.length) {
            onComplete(orb.id);
        }
    }

    function revealAnswers() {
        if (complete) return;

        updateState({
            revealed: true,
        });

        onComplete(orb.id);
    }

    const answeredCount = Object.keys(responses).length;
    const complete = revealed || answeredCount === orb.questions.length;

    function renderPrompt(index: number, incorrect = false) {
        const question = orb.questions[index];

        return (
            <div className="flex flex-col gap-2 flex-1">
                {question.prompt && (
                    <p className={`font-semibold ${incorrect ? "line-through" : ""}`}>
                        {question.prompt}
                    </p>
                )}

                {question.promptImage && (
                    <Image
                        src={question.promptImage.src}
                        alt={question.promptImage.alt}
                        width={640}
                        height={480}
                        unoptimized
                        className="max-h-64 w-auto max-w-full rounded-lg object-contain"
                    />
                )}
            </div>
        );
    }

    function renderExplanation(index: number) {
        const question = orb.questions[index];

        return (
            <>
                {question.explanation && (
                    <p className="mt-1 text-base-content/70">
                        {question.explanation}
                    </p>
                )}

                {question.explanationImage && (
                    <Image
                        src={question.explanationImage.src}
                        alt={question.explanationImage.alt}
                        width={640}
                        height={480}
                        unoptimized
                        className="mt-2 max-h-64 w-auto max-w-full rounded-lg object-contain"
                    />
                )}
            </>
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

            <div className="flex flex-col gap-3">
                {orb.questions.map((question, index) => {
                    const response = responses[index];
                    const answered = response !== undefined;
                    const wasRevealed = revealed && !answered;
                    const correct = response === question.category;
                    const incorrect = answered && !correct;

                    return (
                        <div
                            key={index}
                            className="flex flex-col gap-2 py-3"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                                {renderPrompt(index, incorrect)}

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
                                                    onClick={() =>
                                                        selectCategory(index, category)
                                                    }
                                                >
                                                    <p>{category}</p>
                                                    <p>{remainingCount}</p>
                                                </button>
                                            );
                                        })}
                                    </div>
                                )}

                                {incorrect && (
                                    <div className="flex justify-center sm:justify-end sm:min-w-16">
                                        <span
                                            className={`text-2xl ${categoryColor}`}
                                            aria-label="Incorrect answer"
                                        >
                                            💔
                                        </span>
                                    </div>
                                )}
                            </div>

                            {answered && (
                                <div className={`text-sm ${
                                    correct ? "text-success" : "text-error"
                                }`}>
                                    <p className="font-semibold">
                                        {"The answer is " + question.category + "."}
                                    </p>

                                    {renderExplanation(index)}
                                </div>
                            )}

                            {wasRevealed && (
                                <div className="text-sm">
                                    <p className="font-semibold">
                                        Answer: {question.category}.
                                    </p>

                                    {renderExplanation(index)}
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
                    Reveal Answers
                </button>
            )}
        </div>
    );
}
