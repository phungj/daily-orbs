import { DailySet } from "@/data/days/days";

const day: DailySet = {
    date: "2026-11-09",
    orbs: [
        {
            id: "double-duty",
            title: "Double Duty",
            category: "language",
            type: "matching",
            instructions: "Each clue gives two definitions belonging to a pair of homophones. Identify either word.",
            promptLabel: "Clue",
            answerLabel: "Either word",
            thresholds: [2, 4, 6],
            questions: [
                {
                    prompt: "Military equipment / Significant enough to determine an issue",
                    answer: {
                        text: "Materiel",
                        aliases: ["Material"]
                    },
                    explanation: "Materiel/Material"
                },
                {
                    prompt: "The sister of one's parent / A small, colonial insect",
                    answer: {
                        text: "Aunt",
                        aliases: ["Ant"]
                    },
                    explanation: "Aunt/Ant"
                },
                {
                    prompt: "A soft, gentle manner of speaking / A sudden and often violent seizure of power",
                    answer: {
                        text: "Coo",
                        aliases: ["Coup"]
                    },
                    explanation: "Coo/Coup"
                },
                {
                    prompt: "An adult female sheep / A second-person pronoun",
                    answer: {
                        text: "Ewe",
                        aliases: ["You"]
                    },
                    explanation: "Ewe/You"
                },
                {
                    prompt: "An object of extreme devotion / Not active",
                    answer: {
                        text: "Idol",
                        aliases: ["Idle"]
                    },
                    explanation: "Idol/Idle"
                },
                {
                    prompt: "When something suddenly makes sense / A small, exclusive group of people",
                    answer: {
                        text: "Click",
                        aliases: ["Clique"]
                    },
                    explanation: "Click/Clique"
                },
                {
                    prompt: "A gun / A hand gesture",
                    answer: {
                        text: "Piece",
                        aliases: ["Peace"]
                    },
                    explanation: "Piece/Peace"
                }
            ]
        },
        {
            id: "i-like-your-funny-words-magic-man-ii",
            title: "I Like Your Funny Words, Magic Man",
            category: "science",
            type: "matching",
            instructions: "Match each technological term with its corresponding technological field.",
            promptLabel: "Term",
            answerLabel: "Field",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Flexplay",
                    answer: { text: "Disks" },
                    explanation: "Flexplay was a disposable DVD format. Once its packaging was opened, the disc began a chemical process that made it unplayable after a limited period."
                },
                {
                    prompt: "Schlieren",
                    answer: { text: "Photography" },
                    explanation: "Schlieren imaging uses changes in light refraction to make otherwise invisible variations in the density of transparent materials visible, such as shock waves in air."
                },
                {
                    prompt: "Fresnel",
                    answer: { text: "Lenses" },
                    explanation: "Fresnel lenses use concentric stepped sections to focus light while being thinner and lighter than conventional lenses."
                },
                {
                    prompt: "Superheterodyne",
                    answer: { text: "Radio" },
                    explanation: "A superheterodyne receiver converts incoming radio signals to a fixed intermediate frequency, making them easier to filter and amplify."
                },
                {
                    prompt: "Autoclave",
                    answer: { text: "Sterilization" },
                    explanation: "An autoclave uses pressurized steam and high temperatures for sterilization."
                },
                {
                    prompt: "Turbofan",
                    answer: { text: "Jets" },
                    explanation: "A turbofan is a jet engine that uses a large fan to move additional air around the engine core."
                },
                {
                    prompt: "Endoscope",
                    answer: { text: "Medicine" },
                    explanation: "An endoscope is an instrument with a camera or optical system that allows doctors to examine the inside of the body."
                },
                {
                    prompt: "Xerography",
                    answer: { text: "Photocopying" },
                    explanation: "Xerography is the dry photocopying process that uses electrostatic charges and toner to transfer images onto paper."
                },
                {
                    prompt: "Sextant",
                    answer: { text: "Navigation" },
                    explanation: "A sextant measures the angle between a celestial body and the horizon, allowing navigators to determine their position at sea."
                },
                {
                    prompt: "Magnetron",
                    answer: { text: "Microwaves" },
                    explanation: "A magnetron is a vacuum tube that generates high-power microwave radiation."
                }
            ]
        },
        {
            id: "black-gold-i",
            title: "Black Gold",
            category: "geography",
            type: "free-response",
            instructions: "Identify the countries that are the world's top coffee producers. Top 20 don't cost a heart. Data taken from the 2026 USDA.",
            prompt: "",
            thresholds: [2, 5, 9],
            answers: [
                {
                    text: "Brazil",
                    aliases: ["Brasil"],
                    explanation: "35.2%",
                },
                {
                    text: "Vietnam",
                    aliases: ["Viet Nam"],
                    explanation: "17.7%",
                },
                {
                    text: "Colombia",
                    aliases: ["Columbia"],
                    explanation: "7%",
                },
                {
                    text: "Indonesia",
                    explanation: "6.9%",
                },
                {
                    text: "Ethiopia",
                    explanation: "6.5%",
                },
                {
                    text: "Uganda",
                    explanation: "4%",
                },
                {
                    text: "India",
                    explanation: "3.6%",
                },
                {
                    text: "Honduras",
                    explanation: "3.1%",
                },
                {
                    text: "Peru",
                    explanation: "2.7%",
                },
                {
                    text: "Mexico",
                    explanation: "2.3%",
                }
            ],
            safeAnswers: [
                {
                    text: "Guatemala",
                    explanation: "1.8%",
                },
                {
                    text: "Nicaragua",
                    explanation: "1.4%",
                },
                {
                    text: "China",
                    explanation: "1.1%",
                },
                {
                    text: "Malaysia",
                    explanation: "0.84%",
                },
                {
                    text: "Tanzania",
                    explanation: "0.81%",
                },
                {
                    text: "Ivory Coast",
                    aliases: ["Côte d'Ivoire", "Cote d'Ivoire"],
                    explanation: "0.73%",
                },
                {
                    text: "Costa Rica",
                    explanation: "0.65%",
                },
                {
                    text: "Thailand",
                    explanation: "0.5%",
                },
                {
                    text: "Kenya",
                    explanation: "0.48%",
                },
                {
                    text: "Papua New Guinea",
                    aliases: ["PNG"],
                    explanation: "0.45%",
                }
            ]
        },
        {
            id: "a-night-at-the-oscars",
            title: "A Night at the Oscars",
            category: "pop-culture",
            type: "categorization",
            instructions: "Identify whether each film won the Academy Award for Best Picture.",
            categories: ["Won", "Did not win"],
            thresholds: [3, 6, 10],
            questions: [
                {
                    prompt: "The Godfather Part II",
                    category: "Won",
                    explanation: "Won Best Picture at the 47th Academy Awards, honoring films released in 1974."
                },
                {
                    prompt: "Gone With the Wind",
                    category: "Won",
                    explanation: "Won Best Picture at the 12th Academy Awards, honoring films released in 1939."
                },
                {
                    prompt: "Psycho",
                    category: "Did not win",
                    explanation: "Did not win Best Picture at the 33rd Academy Awards, honoring films released in 1960. It was nominated, but lost to The Apartment."
                },
                {
                    prompt: "CODA",
                    category: "Won",
                    explanation: "Won Best Picture at the 94th Academy Awards, honoring films released in 2021."
                },
                {
                    prompt: "Sunset Boulevard",
                    category: "Did not win",
                    explanation: "Did not win Best Picture at the 23rd Academy Awards, honoring films released in 1950. It was nominated, but lost to All About Eve."
                },
                {
                    prompt: "Apocalypse Now",
                    category: "Did not win",
                    explanation: "Did not win Best Picture at the 52nd Academy Awards, honoring films released in 1979. It was nominated, but lost to Kramer vs. Kramer."
                },
                {
                    prompt: "Singin' in the Rain",
                    category: "Did not win",
                    explanation: "Did not win Best Picture at the 25th Academy Awards, honoring films released in 1952. It was not nominated; the award went to The Greatest Show on Earth."
                },
                {
                    prompt: "Everything Everywhere All at Once",
                    category: "Won",
                    explanation: "Won Best Picture at the 95th Academy Awards, honoring films released in 2022."
                },
                {
                    prompt: "The Godfather",
                    category: "Won",
                    explanation: "Won Best Picture at the 45th Academy Awards, honoring films released in 1972."
                },
                {
                    prompt: "E.T. the Extra-Terrestrial",
                    category: "Did not win",
                    explanation: "Did not win Best Picture at the 55th Academy Awards, honoring films released in 1982. It was nominated, but lost to Gandhi."
                },
                {
                    prompt: "Star Wars: Episode IV - A New Hope",
                    category: "Did not win",
                    explanation: "Did not win Best Picture at the 50th Academy Awards, honoring films released in 1977. It was nominated, but lost to Annie Hall."
                },
                {
                    prompt: "Nomadland",
                    category: "Won",
                    explanation: "Won Best Picture at the 93rd Academy Awards, honoring films released in 2020."
                }
            ]
        }
    ]
};

export default day;