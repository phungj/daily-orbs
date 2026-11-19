
"use client";

import { useState } from "react";
import { MatchingOrb } from "@/data/days/days";

interface OrbProps {
    orb: MatchingOrb;
}

interface Pair {
    prompt: number;
    answer: number;
}

export default function Orb({ orb }: OrbProps) {
    const [selectedPrompt, setSelectedPrompt] =
        useState<number | null>(null);

    const [selectedAnswer, setSelectedAnswer] =
        useState<number | null>(null);

    const [matched, setMatched] = useState<number[]>([]);

    const [wrongPairs, setWrongPairs] = useState<Pair[]>([]);

    const [shuffledAnswers] = useState(() =>
        orb.questions
            .map((question, index) => ({
                answer: question.answer,
                originalIndex: index,
            }))
            .sort(() => Math.random() - 0.5)
    );

    function checkPair(
        promptIndex: number | null,
        answerIndex: number | null
    ) {
        if (promptIndex === null || answerIndex === null) return;

        if (promptIndex === answerIndex) {
            setMatched(previous => [...previous, promptIndex]);
        } else {
            const pair = {
                prompt: promptIndex,
                answer: answerIndex,
            };

            // Only record each incorrect combination once.
            setWrongPairs(previous => {
                const alreadyRecorded = previous.some(
                    item =>
                        item.prompt === pair.prompt &&
                        item.answer === pair.answer
                );

                return alreadyRecorded ? previous : [...previous, pair];
            });
        }

        // Return control immediately after either result.
        setSelectedPrompt(null);
        setSelectedAnswer(null);
    }

    function selectPrompt(index: number) {
        if (matched.includes(index)) return;

        if (selectedAnswer !== null) {
            checkPair(index, selectedAnswer);
        } else {
            setSelectedPrompt(index);
        }
    }

    function selectAnswer(index: number) {
        if (matched.includes(index)) return;

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

    const remainingPrompts = orb.questions
        .map((question, index) => ({ question, index }))
        .filter(item => !matched.includes(item.index));

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

            <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm text-base-content/60">
                    {matched.length} / {orb.questions.length} pairs matched
                </p>

                <p className="text-sm text-base-content/60">
                    {wrongPairs.length} unique wrong{" "}
                    {wrongPairs.length === 1 ? "pair" : "pairs"} tried
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-center">Prompts</h2>

                    {remainingPrompts.map(({ question, index }) => (
                        <button
                            key={index}
                            className={`btn h-auto min-h-16 whitespace-normal text-wrap transition-colors ${getButtonClass(index, "prompt")}`}
                            onClick={() => selectPrompt(index)}
                        >
                            {question.prompt}
                        </button>
                    ))}
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className="font-bold text-center">Answers</h2>

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

            {matched.length > 0 && (
                <div className="flex flex-col gap-3">
                    <h2 className="font-bold">
                        Matched pairs ({matched.length})
                    </h2>

                    {matched.map(index => (
                        <div
                            key={index}
                            className="flex flex-col gap-2"
                        >
                            <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                                <div className="flex-1 rounded-lg bg-success/15 border border-success/40 p-3">
                                    {orb.questions[index].prompt}
                                </div>

                                <div className="hidden sm:block text-success">
                                    ↔
                                </div>

                                <div className="flex-1 rounded-lg bg-success/15 border border-success/40 p-3">
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
                </div>
            )}

            {wrongPairs.length > 0 && (
                <div className="flex flex-col gap-3">
                    <h2 className="font-bold">
                        Incorrect pairs ({wrongPairs.length})
                    </h2>

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
                </div>
            )}
        </div>
    );
}
