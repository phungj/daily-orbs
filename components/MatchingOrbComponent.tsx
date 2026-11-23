
"use client";

import Image from "next/image";
import {
    MatchingOrb,
    MatchingOrbState,
} from "@/data/days/days";
import OrbStatus from "@/components/OrbStatus";
import { orbStyles } from "@/components/orbStyles";

interface OrbProps {
    orb: MatchingOrb;
    heartsRemaining: number;
    earnedOrbs: number;
    correctAnswers: number;
    state: MatchingOrbState;
    onStateChange: (state: MatchingOrbState) => void;
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
                                                 correctAnswers,
                                                 state,
                                                 onStateChange,
                                                 onCorrectAnswer,
                                                 onIncorrectAnswer,
                                                 onComplete,
                                             }: OrbProps) {
    const {
        selectedPrompt,
        selectedAnswer,
        matched,
        wrongPairs,
        revealed,
        shuffledPrompts,
        shuffledAnswers,
    } = state;

    const complete = matched.length === orb.questions.length;
    const categoryColor = orbStyles[orb.category].color;

    function updateState(updates: Partial<MatchingOrbState>) {
        onStateChange({
            ...state,
            ...updates,
        });
    }

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

            updateState({
                matched: newMatched,
                selectedPrompt: null,
                selectedAnswer: null,
            });

            onCorrectAnswer(orb.id);

            if (newMatched.length === orb.questions.length) {
                onComplete(orb.id);
            }
        } else {
            const pair: Pair = {
                prompt: promptIndex,
                answer: answerIndex,
            };

            const alreadyRecorded = wrongPairs.some(
                item =>
                    item.prompt === pair.prompt &&
                    item.answer === pair.answer
            );

            updateState({
                wrongPairs: alreadyRecorded
                    ? wrongPairs
                    : [...wrongPairs, pair],
                selectedPrompt: null,
                selectedAnswer: null,
            });

            if (!alreadyRecorded) {
                onIncorrectAnswer(orb.id);
            }
        }
    }

    function selectPrompt(index: number) {
        if (revealed || complete || matched.includes(index)) return;

        if (selectedAnswer !== null) {
            checkPair(index, selectedAnswer);
        } else {
            updateState({
                selectedPrompt: index,
            });
        }
    }

    function selectAnswer(index: number) {
        if (revealed || complete || matched.includes(index)) return;

        if (selectedPrompt !== null) {
            checkPair(selectedPrompt, index);
        } else {
            updateState({
                selectedAnswer: index,
            });
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

        updateState({
            revealed: true,
            selectedPrompt: null,
            selectedAnswer: null,
        });

        onComplete(orb.id);
    }

    const remainingPrompts = shuffledPrompts.filter(
        index => !matched.includes(index)
    );

    const remainingAnswers = shuffledAnswers.filter(
        index => !matched.includes(index)
    );

    function renderPrompt(index: number, incorrect = false) {
        const question = orb.questions[index];

        return (
            <div className="flex flex-col items-center gap-2">
                {question.prompt && (
                    <span className={incorrect ? "line-through" : ""}>
                        {question.prompt}
                    </span>
                )}

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

    function renderAnswer(index: number, incorrect = false) {
        const question = orb.questions[index];

        return (
            <div className="flex flex-col items-center gap-2">
                {question.answer && (
                    <span className={incorrect ? "line-through" : ""}>
                        {question.answer.text}
                    </span>
                )}

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

            {!revealed && !complete && (
                <>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-center">
                                {orb.promptLabel}
                            </h2>

                            {remainingPrompts.map(index => (
                                <button
                                    key={index}
                                    className={`btn h-auto min-h-16 whitespace-normal text-wrap transition-colors ${getButtonClass(index, "prompt")}`}
                                    onClick={() => selectPrompt(index)}
                                >
                                    {renderPrompt(index)}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold text-center">
                                {orb.answerLabel}
                            </h2>

                            {remainingAnswers.map(index => (
                                <button
                                    key={index}
                                    className={`btn h-auto min-h-16 whitespace-normal text-wrap transition-colors ${getButtonClass(index, "answer")}`}
                                    onClick={() => selectAnswer(index)}
                                >
                                    {renderAnswer(index)}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        className="btn btn-outline btn-sm self-center rounded-lg border border-base-300 p-2"
                        onClick={revealAnswers}
                    >
                        Reveal Answers
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
                        {renderPrompt(pair.prompt, true)}
                    </div>

                    <div className="hidden sm:block text-error font-bold">
                        ✕
                    </div>

                    <div className="flex-1 rounded-lg bg-error/10 border border-error/40 p-3">
                        {renderAnswer(pair.answer, true)}
                    </div>

                    <span
                        className={`text-2xl self-center ${categoryColor}`}
                        aria-label="Incorrect answer"
                    >
                        💔
                    </span>
                </div>
            ))}

            {revealed && remainingPrompts.map(index => (
                <div key={index} className="flex flex-col gap-2">
                    <div className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center">
                        <div className="flex-1 rounded-lg border border-base-300 p-3">
                            {renderPrompt(index)}
                        </div>

                        <div className="hidden sm:block text-base-content/50">
                            ↔
                        </div>

                        <div className="flex-1 rounded-lg border border-base-300 p-3">
                            {renderAnswer(index)}
                        </div>
                    </div>

                    {renderExplanation(index)}
                </div>
            ))}
        </div>
    );
}
