
import { DailySet } from "@/data/days/days";

const day: DailySet = {
    date: "2026-11-24",
    orbs: [
        {
            id: "i-like-your-funny-words-magic-man-iv",
            title: "I Like Your Funny Words Magic Man",
            category: "language",
            type: "matching",
            instructions: "Match each colloquial word to its original scientific meaning.",
            promptLabel: "Word",
            answerLabel: "Scientific Meaning",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Theory",
                    answer: {
                        text: "A well-supported explanation of natural phenomena.",
                    },
                },
                {
                    prompt: "Hypothesis",
                    answer: {
                        text: "A proposed explanation that can be tested through investigation or experimentation.",
                    },
                },
                {
                    prompt: "Law",
                    answer: {
                        text: "A description of a consistent pattern or relationship observed in nature.",
                    },
                },
                {
                    prompt: "Significant",
                    answer: {
                        text: "A result unlikely to have occurred by chance under a specified statistical model.",
                    },
                },
                {
                    prompt: "Random",
                    answer: {
                        text: "Governed by chance and described using probabilities.",
                    },
                },
                {
                    prompt: "Organic",
                    answer: {
                        text: "Relating to carbon-containing compounds, particularly in chemistry.",
                    },
                },
                {
                    prompt: "Work",
                    answer: {
                        text: "Energy transferred when a force causes an object to move through a distance.",
                    },
                },
                {
                    prompt: "Energy",
                    answer: {
                        text: "A conserved physical quantity that can be transferred or transformed.",
                    },
                },
                {
                    prompt: "Force",
                    answer: {
                        text: "An interaction that can change an object's motion.",
                    },
                },
                {
                    prompt: "Momentum",
                    answer: {
                        text: "The product of an object's mass and velocity.",
                    },
                },
            ],
        },
        {
            id: "i-like-your-funny-words-math-man",
            title: "I Like Your Funny Words Math Man",
            category: "science",
            type: "categorization",
            instructions: "Identify whether each mathematical term is named after a person.",
            categories: ["Named after a person", "Not named after a person"],
            thresholds: [3, 6, 10],
            questions: [
                {
                    "prompt": "Fibonacci",
                    "category": "Named after a person",
                    "explanation": "Named after Leonardo of Pisa, an Italian mathematician also known as Fibonacci, who helped popularize the sequence in Western mathematics."
                },
                {
                    "prompt": "Boolean",
                    "category": "Named after a person",
                    "explanation": "Named after George Boole, an English mathematician who developed the algebraic system underlying Boolean logic."
                },
                {
                    "prompt": "Cartesian",
                    "category": "Named after a person",
                    "explanation": "Named after René Descartes, the French philosopher and mathematician who developed coordinate geometry."
                },
                {
                    "prompt": "Gaussian",
                    "category": "Named after a person",
                    "explanation": "Named after Carl Friedrich Gauss, a German mathematician whose work contributed extensively to number theory, statistics, and many other fields."
                },
                {
                    "prompt": "Möbius",
                    "category": "Named after a person",
                    "explanation": "Named after August Ferdinand Möbius, a German mathematician and astronomer known for the Möbius strip and contributions to geometry."
                },
                {
                    "prompt": "Abelian",
                    "category": "Named after a person",
                    "explanation": "Named after Niels Henrik Abel, a Norwegian mathematician whose work included fundamental contributions to algebra and the theory of equations."
                },
                {
                    "prompt": "Eigenvalue",
                    "category": "Not named after a person",
                    "explanation": "Derived from the German word eigen, meaning 'own' or 'characteristic.' An eigenvalue describes how much an eigenvector is scaled by a linear transformation."
                },
                {
                    "prompt": "Abscissa",
                    "category": "Not named after a person",
                    "explanation": "Derived from Latin abscissa, meaning 'cut off.' It refers to the x-coordinate of a point in a Cartesian coordinate system."
                },
                {
                    "prompt": "Mantissa",
                    "category": "Not named after a person",
                    "explanation": "Derived from a Latin word meaning 'addition' or 'makeweight.' In logarithms, it refers to the fractional part of a logarithm; in floating-point notation, it is commonly used to refer to the significand."
                },
                {
                    "prompt": "Lambda",
                    "category": "Not named after a person",
                    "explanation": "Named after the Greek letter λ. It is used in mathematics for various purposes, including eigenvalues, wavelengths, and the lambda calculus."
                },
                {
                    "prompt": "Adele",
                    "category": "Not named after a person",
                    "explanation": "An adele is a mathematical structure used in number theory, combining information about a number field at all of its completions. The name derives from 'additive idele,' rather than a mathematician."
                }
            ],
        },
        {
            id: "fashion-around-the-world",
            title: "Fashion Around the World",
            category: "geography",
            type: "matching",
            instructions: "Match each article of clothing to the country or region it was named after.",
            promptLabel: "Clothing",
            answerLabel: "Country or Region",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Balaclava",
                    answer: { text: "Crimea" },
                    explanation: "Named after Balaclava, a town in Crimea, where the Battle of Balaclava took place during the Crimean War",
                },
                {
                    prompt: "Bikini",
                    answer: { text: "Marshall Islands" },
                    explanation: "Named after Bikini Atoll in the Marshall Islands, where the United States conducted nuclear tests",
                },
                {
                    prompt: "Tuxedo",
                    answer: { text: "United States" },
                    explanation: "Named after Tuxedo Park, New York, where the style became fashionable among wealthy Americans",
                },
                {
                    prompt: "Denim",
                    answer: { text: "France" },
                    explanation: "From serge de Nîmes, meaning a sturdy fabric from the French city of Nîmes",
                },
                {
                    prompt: "Jersey",
                    answer: { text: "Channel Islands" },
                    explanation: "Named after the island of Jersey, where the wool fabric was traditionally produced",
                },
                {
                    prompt: "Duffel Coat",
                    answer: { text: "Belgium" },
                    explanation: "Named after Duffel, a town near Antwerp, Belgium, where the coarse woolen fabric originated",
                },
                {
                    prompt: "Capri Pants",
                    answer: { text: "Italy" },
                    explanation: "Named after the island of Capri, a popular resort destination in Italy",
                },
                {
                    prompt: "Bermuda Shorts",
                    answer: { text: "Bermuda" },
                    explanation: "Named after Bermuda, where British colonial officers adopted shorts as practical clothing in the tropical climate",
                },
                {
                    prompt: "Homburg Hat",
                    answer: { text: "Germany" },
                    explanation: "Named after Bad Homburg, a German spa town where the hat became fashionable",
                },
                {
                    prompt: "Jodhpurs",
                    answer: { text: "India" },
                    explanation: "Named after Jodhpur, an Indian city whose local riding trousers inspired the style",
                },
            ],
        },
        {
            id: "games-of-the-year",
            title: "Games of the Year",
            category: "pop-culture",
            type: "categorization",
            instructions: "Identify whether each game won the BAFTA Award for Best Game.",
            categories: ["Won", "Did not win"],
            thresholds: [3, 6, 10],
            questions: [
                {
                    prompt: "Outer Wilds",
                    category: "Won",
                    explanation: "Won Best Game at the 2020 BAFTA Games Awards.",
                },
                {
                    prompt: "Cocoon",
                    category: "Did not win",
                    explanation: "Did not win Best Game at the 2024 BAFTA Games Awards. It was not nominated; the award went to Baldur's Gate 3.",
                },
                {
                    prompt: "Hades",
                    category: "Won",
                    explanation: "Won Best Game at the 2021 BAFTA Games Awards.",
                },
                {
                    prompt: "Disco Elysium",
                    category: "Did not win",
                    explanation: "Did not win Best Game at the 2020 BAFTA Games Awards. It was nominated, but lost to Outer Wilds.",
                },
                {
                    prompt: "Returnal",
                    category: "Won",
                    explanation: "Won Best Game at the 2022 BAFTA Games Awards.",
                },
                {
                    prompt: "Sekiro: Shadows Die Twice",
                    category: "Did not win",
                    explanation: "Did not win Best Game at the 2020 BAFTA Games Awards. It was nominated, but lost to Outer Wilds.",
                },
                {
                    prompt: "Vampire Survivors",
                    category: "Won",
                    explanation: "Won Best Game at the 2023 BAFTA Games Awards.",
                },
                {
                    prompt: "It Takes Two",
                    category: "Did not win",
                    explanation: "Did not win Best Game at the 2022 BAFTA Games Awards. It was nominated, but lost to Returnal.",
                },
                {
                    prompt: "Baldur's Gate 3",
                    category: "Won",
                    explanation: "Won Best Game at the 2024 BAFTA Games Awards.",
                },
                {
                    prompt: "Elden Ring",
                    category: "Did not win",
                    explanation: "Did not win Best Game at the 2023 BAFTA Games Awards. It was nominated, but lost to Vampire Survivors.",
                },
                {
                    prompt: "Clair Obscur: Expedition 33",
                    category: "Won",
                    explanation: "Won Best Game at the 2026 BAFTA Games Awards.",
                },
                {
                    prompt: "Hades II",
                    category: "Did not win",
                    explanation: "Did not win Best Game at the 2026 BAFTA Games Awards. It was not nominated; the award went to Clair Obscur: Expedition 33.",
                },
            ],
        },
    ],
};

export default day;
