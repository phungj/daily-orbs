import { DailySet } from "@/data/days/days";

import gold from "../../public/images/2026-11-10/gold.jpg";
import bismuth from "../../public/images/2026-11-10/bismuth.jpg";
import halite from "../../public/images/2026-11-10/halite.jpg";
import sulfur from "../../public/images/2026-11-10/sulfur.jpg";
import quartz from "../../public/images/2026-11-10/quartz.jpg";
import granite from "../../public/images/2026-11-10/granite.jpg";
import lapisLazuli from "../../public/images/2026-11-10/lapis-lazuli.jpg";
import fluorite from "../../public/images/2026-11-10/fluorite.jpg";
import obsidian from "../../public/images/2026-11-10/obsidian.jpg";
import pyrite from "../../public/images/2026-11-10/pyrite.jpg";

const day: DailySet = {
    date: "2026-11-10",
    orbs: [
        {
            id: "double-doodie",
            title: "Double Doodie",
            category: "language",
            type: "matching",
            instructions: "Each clue gives two definitions to two words with a one-letter difference. Identify either word.",
            promptLabel: "Clue",
            answerLabel: "Either word",
            thresholds: [2, 4, 6],
            questions: [
                {
                    prompt: "Castle defense / Watercraft",
                    answer: {
                        text: "Moat",
                        aliases: ["Boat"],
                    },
                    explanation: "Moat/Boat",
                },
                {
                    prompt: "Alcoholic beverage / Possessive pronoun",
                    answer: {
                        text: "Wine",
                        aliases: ["Mine"],
                    },
                    explanation: "Wine/Mine",
                },
                {
                    prompt: "Swimming area / Survey",
                    answer: {
                        text: "Pool",
                        aliases: ["Poll"],
                    },
                    explanation: "Pool/Poll",
                },
                {
                    prompt: "Flippered mammal / Agreement",
                    answer: {
                        text: "Seal",
                        aliases: ["Deal"],
                    },
                    explanation: "Seal/Deal",
                },
                {
                    prompt: "To change / A religious table",
                    answer: {
                        text: "Alter",
                        aliases: ["Altar"],
                    },
                    explanation: "Alter/Altar",
                },
                {
                    prompt: "A combustible, black rock / To gently persuade using flattery",
                    answer: {
                        text: "Coal",
                        aliases: ["Coax"],
                    },
                    explanation: "Coal/Coax",
                },
                {
                    prompt: "Retaliatory harm / A company's total income",
                    answer: {
                        text: "Revenge",
                        aliases: ["Revenue"],
                    },
                    explanation: "Revenge/Revenue",
                },
            ],
        },
        {
            id: "rocks-4-jocks",
            title: "Rocks 4 Jocks",
            category: "science",
            type: "matching",
            instructions: "Match each rock or mineral to its corresponding image.",
            promptLabel: "Rock or mineral",
            answerLabel: "Image",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Gold",
                    answerImage: { src: gold, alt: "" },
                },
                {
                    prompt: "Bismuth",
                    answerImage: { src: bismuth, alt: "" },
                },
                {
                    prompt: "Halite",
                    answerImage: { src: halite, alt: "" },
                },
                {
                    prompt: "Sulfur",
                    answerImage: { src: sulfur, alt: "" },
                },
                {
                    prompt: "Quartz",
                    answerImage: { src: quartz, alt: "" },
                },
                {
                    prompt: "Granite",
                    answerImage: { src: granite, alt: "" },
                },
                {
                    prompt: "Lapis lazuli",
                    answerImage: { src: lapisLazuli, alt: "" },
                },
                {
                    prompt: "Fluorite",
                    answerImage: { src: fluorite, alt: "" },
                },
                {
                    prompt: "Obsidian",
                    answerImage: { src: obsidian, alt: "" },
                },
                {
                    prompt: "Pyrite",
                    answerImage: { src: pyrite, alt: "" },
                },
            ],
        },
        {
            id: "black-gold",
            title: "Black Gold",
            category: "geography",
            type: "free-response",
            instructions: "Identify the countries that are the top producers of tea. Top 20 will not cost a heart.",
            prompt: "",
            thresholds: [2, 5, 9],
            answers: [
                {
                    text: "China",
                    explanation: "49.68%",
                },
                {
                    text: "India",
                    explanation: "18.81%",
                },
                {
                    text: "Kenya",
                    explanation: "8.21%",
                },
                {
                    text: "Sri Lanka",
                    explanation: "4.63%",
                },
                {
                    text: "Turkey",
                    aliases: ["Türkiye"],
                    explanation: "4.32%",
                },
                {
                    text: "Vietnam",
                    aliases: ["Viet Nam"],
                    explanation: "3.53%",
                },
                {
                    text: "Indonesia",
                    explanation: "2.01%",
                },
                {
                    text: "Bangladesh",
                    explanation: "1.34%",
                },
                {
                    text: "Uganda",
                    explanation: "1.27%",
                },
                {
                    text: "Argentina",
                    explanation: "1.09%",
                },
            ],
            safeAnswers: [
                {
                    text: "Japan",
                    explanation: "0.98%",
                },
                {
                    text: "Malawi",
                    explanation: "0.76%",
                },
                {
                    text: "Rwanda",
                    explanation: "0.49%",
                },
                {
                    text: "Nepal",
                    explanation: "0.41%",
                },
                {
                    text: "Tanzania",
                    explanation: "0.39%",
                },
                {
                    text: "Myanmar",
                    explanation: "0.37%",
                },
                {
                    text: "Thailand",
                    explanation: "0.33%",
                },
                {
                    text: "Iran",
                    explanation: "0.24%",
                },
                {
                    text: "Ethiopia",
                    explanation: "0.23%",
                },
                {
                    text: "Zimbabwe",
                    explanation: "0.17%",
                },
            ],
        },
        {
            id: "whos-on-first",
            title: "Who's on First",
            category: "pop-culture",
            type: "categorization",
            instructions: "Identify whether each name is on the baseball team in Who's on First.",
            categories: ["Yes", "No"],
            thresholds: [3, 6, 10],
            questions: [
                {
                    prompt: "Naturally",
                    category: "No",
                },
                {
                    prompt: "When",
                    category: "No",
                },
                {
                    prompt: "I Don't Know",
                    category: "Yes",
                },
                {
                    prompt: "I Don't Give A Darn",
                    category: "Yes",
                },
                {
                    prompt: "Why",
                    category: "Yes",
                },
                {
                    prompt: "Yesterday",
                    category: "No",
                },
                {
                    prompt: "How",
                    category: "No",
                },
                {
                    prompt: "Nobody",
                    category: "No",
                },
                {
                    prompt: "Who",
                    category: "Yes",
                },
                {
                    prompt: "What",
                    category: "Yes",
                },
                {
                    prompt: "Because",
                    category: "Yes",
                },
                {
                    prompt: "Where",
                    category: "No",
                },
            ],
        },
    ],
};

export default day;
