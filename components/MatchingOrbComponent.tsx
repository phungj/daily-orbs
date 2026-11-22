
"use client";

import { useState } from "react";
import { MatchingOrb } from "@/data/days/days";

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
                prompt: question.prompt,
                originalIndex: index,
            }))
            .sort(() => Math.random() - 0.5)
    );

    const [shuffledAnswers] = useState(() =>
        orb.questions
            .map((question, index) => ({
                answer: question.answer,
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

    const remainingAnswers = shuffledAnswers
        .filter(item => !matched.includes(item.originalIndex));

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-2xl font-bold">{orb.title}</h1>
                <p className="text-base-content/70 mt-2">
                    {orb.instructions}
                </p>
            </div>

            <div className="flex flex-col items-end gap-1">
                {/* Orbs */}
                <div className="flex items-center gap-1" aria-label={`${earnedOrbs} of 3 orbs earned`}>
                    {Array.from({ length: 3 }, (_, index) => (
                        <span
                            key={index}
                            className={index < earnedOrbs ? "text-warning" : "text-base-300"}
                        >
                {index < earnedOrbs ? "●" : "○"}
            </span>
                    ))}
                </div>

                {/* Hearts */}
                <div className="flex items-center gap-1" aria-label={`${heartsRemaining} of 3 hearts remaining`}>
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
                                    {item.prompt}
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
                                    {item.answer}
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
                            {orb.questions[index].prompt}
                        </div>

                        <div className="hidden sm:block text-success">
                            ↔
                        </div>

                        <div className="flex-1 rounded-lg border border-success/40 p-3">
                            {orb.questions[index].answer}
                        </div>
                    </div>

                    {orb.questions[index].explanation && (
                        <p className="text-sm text-base-content/70 pl-1">
                            {orb.questions[index].explanation}
                        </p>
                    )}
                </div>
            ))}

            {wrongPairs.map(pair => (
                <div
                    key={`${pair.prompt}-${pair.answer}`}
                    className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center"
                >
                    <div className="flex-1 rounded-lg bg-error/10 border border-error/40 p-3">
                        {orb.questions[pair.prompt].prompt}
                    </div>

                    <div className="hidden sm:block text-error font-bold">
                        ✕
                    </div>

                    <div className="flex-1 rounded-lg bg-error/10 border border-error/40 p-3">
                        {orb.questions[pair.answer].answer}
                    </div>
                </div>
            ))}

            {revealed && remainingPrompts.map(item => (
                <div key={item.originalIndex} className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                        <div className="flex-1 rounded-lg border border-base-300 p-3">
                            {item.prompt}
                        </div>

                        <div className="hidden sm:block text-base-content/50">
                            ↔
                        </div>

                        <div className="flex-1 rounded-lg border border-base-300 p-3">
                            {orb.questions[item.originalIndex].answer}
                        </div>
                    </div>

                    {orb.questions[item.originalIndex].explanation && (
                        <p className="text-sm text-base-content/70 pl-1">
                            {orb.questions[item.originalIndex].explanation}
                        </p>
                    )}
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
