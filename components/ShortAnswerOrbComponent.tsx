
"use client";

import { useState } from "react";
import Image from "next/image";
import { ShortAnswerOrb as ShortAnswerOrbData } from "@/data/days/days";
import OrbStatus from "@/components/OrbStatus";

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
    const [revealed, setRevealed] = useState(false);

    function submitAnswer(index: number) {
        if (answered.includes(index) || revealed) return;

        const guess = (answers[index] ?? "").trim();
        if (!guess) return;

        const question = orb.questions[index];
        const normalizedGuess = guess.toLowerCase();
        const normalizedAnswer = (question.answer ?? "").trim().toLowerCase();

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

    function revealAnswers() {
        if (complete) return;

        setRevealed(true);
        onComplete(orb.id);
    }

    const complete = revealed || answered.length === orb.questions.length;

    const remainingQuestions = orb.questions
        .map((question, index) => ({ question, index }))
        .filter(item => !answered.includes(item.index));

    function renderPrompt(index: number) {
        const question = orb.questions[index];

        return (
            <div className="flex flex-col gap-2">
                {question.prompt && (
                    <span className="font-semibold">{question.prompt}</span>
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

    function renderAnswer(index: number) {
        const question = orb.questions[index];

        return (
            <div className="flex flex-col gap-2">
                {question.answer && (
                    <p className="text-success">{question.answer}</p>
                )}

                {question.answerImage && (
                    <Image
                        src={question.answerImage.src}
                        alt={question.answerImage.alt}
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
                    <p className="text-sm text-base-content/70">
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
                        className="max-h-64 w-auto max-w-full rounded-lg object-contain"
                    />
                )}
            </>
        );
    }

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
                        {answered.length + (revealed ? orb.questions.length - answered.length : 0)} / {orb.questions.length} answered
                    </p>
                </div>

                <OrbStatus
                    category={orb.category}
                    earnedOrbs={earnedOrbs}
                    heartsRemaining={heartsRemaining}
                />
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
                    {renderPrompt(index)}

                    {!revealed && (
                        <>
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
                        </>
                    )}

                    {revealed && (
                        <div className="flex flex-col gap-2">
                            {renderAnswer(index)}
                            {renderExplanation(index)}
                        </div>
                    )}
                </form>
            ))}

            {answered.map(index => (
                <div
                    key={index}
                    className="flex flex-col gap-2 rounded-lg border border-success/40 p-4"
                >
                    {renderPrompt(index)}
                    {renderAnswer(index)}
                    {renderExplanation(index)}
                </div>
            ))}

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
                    All questions answered! Well done.
                </div>
            )}
        </div>
    );
}
