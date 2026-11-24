
import type { DailySet } from "@/data/days/days";

import a10c from "../../public/images/2026-10-15/a-10c-thunderbolt-ii.jpg";
import ea18g from "../../public/images/2026-10-15/ea-18g-growler.jpg";
import f22a from "../../public/images/2026-10-15/f-22a-raptor.jpg";
import f35c from "../../public/images/2026-10-15/f-35c-lightning-ii.jpg";
import rafaleM from "../../public/images/2026-10-15/rafale-m.jpg";
import mig29a from "../../public/images/2026-10-15/mig-29a-fulcrum.jpg";
import su57 from "../../public/images/2026-10-15/su-57-felon.jpg";
import av8b from "../../public/images/2026-10-15/av-8b-harrier-ii-plus.jpg";
import e2c from "../../public/images/2026-10-15/e-2c-hawkeye.jpg";
import b2a from "../../public/images/2026-10-15/b-2a-spirit.jpg";

const day: DailySet = {
    date: "2026-10-15",
    orbs: [
        {
            id: "nato-or-not-o",
            title: "NATO or NOT-O",
            category: "language",
            type: "categorization",
            instructions: "Identify whether each word is part of the current NATO phonetic alphabet.",
            thresholds: [3, 6, 10],
            categories: [
                "NATO",
                "Not NATO"
            ],
            questions: [
                { prompt: "Tango", category: "NATO" },
                { prompt: "Able", category: "Not NATO" },
                { prompt: "Juliett", category: "NATO" },
                { prompt: "Foxtrot", category: "NATO" },
                { prompt: "Baker", category: "Not NATO" },
                { prompt: "Victor", category: "NATO" },
                { prompt: "How", category: "Not NATO" },
                { prompt: "Dog", category: "Not NATO" },
                { prompt: "Easy", category: "Not NATO" },
                { prompt: "Zebra", category: "Not NATO" },
                { prompt: "Charlie", category: "NATO" },
                { prompt: "Whiskey", category: "NATO" }
            ]
        },
        {
            id: "planespotting",
            title: "Planespotting",
            category: "science",
            type: "matching",
            instructions: "Match each plane with its image.",
            promptLabel: "Aircraft",
            answerLabel: "Image",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "A-10C Thunderbolt II",
                    answerImage: { src: a10c, alt: "" }
                },
                {
                    prompt: "EA-18G Growler",
                    answerImage: { src: ea18g, alt: "" }
                },
                {
                    prompt: "F-22A Raptor",
                    answerImage: { src: f22a, alt: "" }
                },
                {
                    prompt: "F-35C Lightning II",
                    answerImage: { src: f35c, alt: "" }
                },
                {
                    prompt: "Rafale M",
                    answerImage: { src: rafaleM, alt: "" }
                },
                {
                    prompt: "MiG-29A Fulcrum",
                    answerImage: { src: mig29a, alt: "" }
                },
                {
                    prompt: "Su-57 Felon",
                    answerImage: { src: su57, alt: "" }
                },
                {
                    prompt: "AV-8B Harrier II+",
                    answerImage: { src: av8b, alt: "" }
                },
                {
                    prompt: "E-2C Hawkeye",
                    answerImage: { src: e2c, alt: "" }
                },
                {
                    prompt: "B-2A Spirit",
                    answerImage: { src: b2a, alt: "" }
                }
            ]
        },
        {
            id: "flags-in-vietnam",
            title: "Flags in Vietnam",
            category: "geography",
            type: "free-response",
            instructions: "Name the countries and political entities represented among the belligerents in the Vietnam War.",
            prompt: "Name the participating entities.",
            thresholds: [3, 7, 12],
            answers: [
                { text: "South Vietnam" },
                { text: "United States", aliases: ["USA", "US", "America", "United States of America"] },
                { text: "South Korea", aliases: ["Republic of Korea", "ROK"] },
                { text: "Australia" },
                { text: "New Zealand" },
                { text: "Laos" },
                { text: "Khmer Republic" },
                { text: "Thailand" },
                { text: "The Philippines", aliases: ["Philippines"] },
                { text: "Taiwan", aliases: ["Republic of China", "ROC"] },
                { text: "North Vietnam", aliases: ["Democratic Republic of Vietnam"] },
                { text: "China", aliases: ["People's Republic of China", "PRC"] },
                { text: "Soviet Union", aliases: ["USSR", "Union of Soviet Socialist Republics"] },
                { text: "North Korea", aliases: ["Democratic People's Republic of Korea", "DPRK"] }
            ]
        },
        {
            id: "a-match-made-in-literature",
            title: "A Match Made in Literature",
            category: "pop-culture",
            type: "matching",
            instructions: "Match each book with its corresponding author.",
            promptLabel: "Author",
            answerLabel: "Book",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Thomas Hardy",
                    answer: { text: "Tess of the d'Urbervilles" }
                },
                {
                    prompt: "Mary Shelley",
                    answer: { text: "Frankenstein" }
                },
                {
                    prompt: "William Shakespeare",
                    answer: { text: "Othello" }
                },
                {
                    prompt: "Franz Kafka",
                    answer: { text: "The Metamorphosis" }
                },
                {
                    prompt: "Voltaire",
                    answer: { text: "Candide" }
                },
                {
                    prompt: "Oscar Wilde",
                    answer: { text: "The Picture of Dorian Gray" }
                },
                {
                    prompt: "James Joyce",
                    answer: { text: "Ulysses" }
                },
                {
                    prompt: "Fyodor Dostoevsky",
                    answer: { text: "The Brothers Karamazov" }
                },
                {
                    prompt: "Aldous Huxley",
                    answer: { text: "Brave New World" }
                },
                {
                    prompt: "F. Scott Fitzgerald",
                    answer: { text: "The Great Gatsby" }
                }
            ]
        }
    ]
};

export default day;
