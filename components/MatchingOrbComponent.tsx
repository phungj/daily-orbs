
"use client";

import { useState } from "react";
import Image from "next/image";
import { MatchingOrb } from "@/data/days/days";
import OrbStatus from "@/components/OrbStatus";

interface OrbProps {
    orb: MatchingOrb;
    heartsRemaining: number;
    earnedOrbs: number;
    onCorrectAnswer: (orbId: string) => void;
    onIncorrectAnswer: (orbId: string) => void;
    onComplete: (orbId: string) => void;
}

interface Pair {
    prompt: number;
    answer: number;
}

export default function MatchingOrbComponent({
                                                 orb,
                                                 heartsRemaining,
                                                 earnedOrbs,
                                                 onCorrectAnswer,
                                                 onIncorrectAnswer,
                                                 onComplete,
                                             }: OrbProps) {
    const [selectedPrompt, setSelectedPrompt] =
        useState<number | null>(null);

    const [selectedAnswer, setSelectedAnswer] =
        useState<number | null>(null);

    const [matched, setMatched] = useState<number[]>([]);
    const [wrongPairs, setWrongPairs] = useState<Pair[]>([]);
    const [revealed, setRevealed] = useState(false);

    const [shuffledPrompts] = useState(() =>
        orb.questions
            .map((question, index) => ({
                originalIndex: index,
            }))
            .sort(() => Math.random() - 0.5)
    );

    const [shuffledAnswers] = useState(() =>
        orb.questions
            .map((question, index) => ({
                originalIndex: index,
            }))
            .sort(() => Math.random() - 0.5)
    );

    const complete = matched.length === orb.questions.length;

    function checkPair(
        promptIndex: number | null,
        answerIndex: number | null
    ) {
        if (
            promptIndex === null ||
            answerIndex === null ||
            revealed ||
            complete
        ) {
            return;
        }

        if (promptIndex === answerIndex) {
            const newMatched = [...matched, promptIndex];

            setMatched(newMatched);
            onCorrectAnswer(orb.id);

            if (newMatched.length === orb.questions.length) {
                onComplete(orb.id);
            }
        } else {
            const pair = {
                prompt: promptIndex,
                answer: answerIndex,
            };

            const alreadyRecorded = wrongPairs.some(
                item =>
                    item.prompt === pair.prompt &&
                    item.answer === pair.answer
            );

            if (!alreadyRecorded) {
                setWrongPairs(previous => [...previous, pair]);
                onIncorrectAnswer(orb.id);
            }
        }

        setSelectedPrompt(null);
        setSelectedAnswer(null);
    }

    function selectPrompt(index: number) {
        if (revealed || complete || matched.includes(index)) return;

        if (selectedAnswer !== null) {
            checkPair(index, selectedAnswer);
        } else {
            setSelectedPrompt(index);
        }
    }

    function selectAnswer(index: number) {
        if (revealed || complete || matched.includes(index)) return;

        if (selectedPrompt !== null) {
            checkPair(selectedPrompt, index);
        } else {
            setSelectedAnswer(index);
        }
    }

    function getButtonClass(
        index: number,
        side: "prompt" | "answer"
    ) {
        const isSelected =
            side === "prompt"
                ? selectedPrompt === index
                : selectedAnswer === index;

        if (isSelected) {
            return "bg-primary text-primary-content border-primary ring-2 ring-primary ring-offset-2 ring-offset-base-100";
        }

        return "bg-base-200 hover:bg-base-300 border-base-300";
    }

    function revealAnswers() {
        if (revealed || complete) return;

        setRevealed(true);
        setSelectedPrompt(null);
        setSelectedAnswer(null);
        onComplete(orb.id);
    }

    const remainingPrompts = shuffledPrompts.filter(
        item => !matched.includes(item.originalIndex)
    );

    const remainingAnswers = shuffledAnswers.filter(
        item => !matched.includes(item.originalIndex)
    );

    function renderPrompt(index: number) {
        const question = orb.questions[index];

        return (
            <div className="flex flex-col items-center gap-2">
                {question.prompt && <span>{question.prompt}</span>}

                {question.promptImage && (
                    <Image
                        src={question.promptImage.src}
                        alt={question.promptImage.alt}
                        width={640}
                        height={480}
                        unoptimized
                        className="max-h-48 max-w-full w-auto rounded-lg object-contain"
                    />
                )}
            </div>
        );
    }

    function renderAnswer(index: number) {
        const question = orb.questions[index];

        return (
            <div className="flex flex-col items-center gap-2">
                {question.answer && <span>{question.answer}</span>}

                {question.answerImage && (
                    <Image
                        src={question.answerImage.src}
                        alt={question.answerImage.alt}
                        width={640}
                        height={480}
                        unoptimized
                        className="max-h-48 max-w-full w-auto rounded-lg object-contain"
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
                    <p className="text-sm text-base-content/70 pl-1">
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
                        className="max-h-64 w-auto rounded-lg object-contain"
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

            <OrbStatus
                category={orb.category}
                earnedOrbs={earnedOrbs}
                heartsRemaining={heartsRemaining}
            />

            {!revealed && !complete && (
                <>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-center">
                                Prompts
                            </h2>

                            {remainingPrompts.map(item => (
                                <button
                                    key={item.originalIndex}
                                    className={`btn h-auto min-h-16 whitespace-normal text-wrap transition-colors ${getButtonClass(item.originalIndex, "prompt")}`}
                                    onClick={() => selectPrompt(item.originalIndex)}
                                >
                                    {renderPrompt(item.originalIndex)}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-center">
                                Answers
                            </h2>

                            {remainingAnswers.map(item => (
                                <button
                                    key={item.originalIndex}
                                    className={`btn h-auto min-h-16 whitespace-normal text-wrap transition-colors ${getButtonClass(item.originalIndex, "answer")}`}
                                    onClick={() => selectAnswer(item.originalIndex)}
                                >
                                    {renderAnswer(item.originalIndex)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        className="btn btn-outline btn-sm self-center rounded-lg border border-base-300 p-2"
                        onClick={revealAnswers}
                    >
                        Reveal remaining answers
                    </button>
                </>
            )}

            {matched.map(index => (
                <div key={index} className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                        <div className="flex-1 rounded-lg border border-success/40 p-3">
                            {renderPrompt(index)}
                        </div>

                        <div className="hidden sm:block text-success">
                            ↔
                        </div>

                        <div className="flex-1 rounded-lg border border-success/40 p-3">
                            {renderAnswer(index)}
                        </div>
                    </div>

                    {renderExplanation(index)}
                </div>
            ))}

            {wrongPairs.map(pair => (
                <div
                    key={`${pair.prompt}-${pair.answer}`}
                    className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center"
                >
                    <div className="flex-1 rounded-lg bg-error/10 border border-error/40 p-3">
                        {renderPrompt(pair.prompt)}
                    </div>

                    <div className="hidden sm:block text-error font-bold">
                        ✕
                    </div>

                    <div className="flex-1 rounded-lg bg-error/10 border border-error/40 p-3">
                        {renderAnswer(pair.answer)}
                    </div>
                </div>
            ))}

            {revealed && remainingPrompts.map(item => (
                <div key={item.originalIndex} className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                        <div className="flex-1 rounded-lg border border-base-300 p-3">
                            {renderPrompt(item.originalIndex)}
                        </div>

                        <div className="hidden sm:block text-base-content/50">
                            ↔
                        </div>

                        <div className="flex-1 rounded-lg border border-base-300 p-3">
                            {renderAnswer(item.originalIndex)}
                        </div>
                    </div>

                    {renderExplanation(item.originalIndex)}
                </div>
            ))}

            {complete && (
                <div className="alert alert-success">
                    All pairs matched! Well done.
                </div>
            )}
        </div>
    );
}
