import { DailySet } from "@/data/days/days";

const day: DailySet = {
    date: "2026-11-03",
    orbs: [
        {
            id: "english-or-english",
            title: "English or English",
            category: "language",
            type: "matching",
            instructions: "Identify whether each word is more prominent in American or British English.",
            promptLabel: "Word",
            answerLabel: "Dialect",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Candy",
                    answer: { text: "American" },
                    explanation: "Or 'sweets'."
                },
                {
                    prompt: "Fall",
                    answer: { text: "American" },
                    explanation: "Or 'autumn'."
                },
                {
                    prompt: "Realtor",
                    answer: { text: "American" },
                    explanation: "Or 'estate agent'."
                },
                {
                    prompt: "Torch",
                    answer: { text: "British" },
                    explanation: "Or 'flashlight'."
                },
                {
                    prompt: "Fortnight",
                    answer: { text: "British" },
                    explanation: "Or 'two weeks'."
                },
                {
                    prompt: "Takeaway",
                    answer: { text: "British" },
                    explanation: "Or 'takeout'."
                },
                {
                    prompt: "Faucet",
                    answer: { text: "American" },
                    explanation: "Or 'tap'."
                },
                {
                    prompt: "Aubergine",
                    answer: { text: "British" },
                    explanation: "Or 'eggplant'."
                },
                {
                    prompt: "Sidewalk",
                    answer: { text: "American" },
                    explanation: "Or 'pavement'."
                },
                {
                    prompt: "Drugstore",
                    answer: { text: "American" },
                    explanation: "Or 'chemist's' or 'pharmacy'."
                },
                {
                    prompt: "Zebra crossing",
                    answer: { text: "British" },
                    explanation: "Or 'crosswalk'."
                },
                {
                    prompt: "Queue",
                    answer: { text: "British" },
                    explanation: "Or 'line'."
                }
            ]
        },
        {
            id: "i-like-your-funny-words-magic-man-i",
            title: "I Like Your Funny Words, Magic Man",
            category: "science",
            type: "matching",
            instructions: "Match each scientific term with its field of study.",
            promptLabel: "Term",
            answerLabel: "Field of Study",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Isobar",
                    answer: { text: "Meteorology" },
                    explanation: "An isobar is a line connecting points of equal atmospheric pressure on a weather map."
                },
                {
                    prompt: "Chirality",
                    answer: { text: "Chemistry" },
                    explanation: "Chirality describes a molecule or object that cannot be superimposed on its mirror image, much like left and right hands."
                },
                {
                    prompt: "Metallicity",
                    answer: { text: "Astronomy" },
                    explanation: "Metallicity measures the abundance of elements heavier than hydrogen and helium in a star or other astronomical object."
                },
                {
                    prompt: "Priming",
                    answer: { text: "Psychology" },
                    explanation: "Priming occurs when exposure to one stimulus influences a person's response to a later stimulus."
                },
                {
                    prompt: "Elasticity",
                    answer: { text: "Economics" },
                    explanation: "Elasticity measures how responsive one economic variable is to changes in another. For example, price elasticity of demand measures how much the quantity demanded changes when a product's price changes."
                },
                {
                    prompt: "Hyponym",
                    answer: { text: "Linguistics" },
                    explanation: "A hyponym is a word whose meaning falls within a broader category."
                },
                {
                    prompt: "Variolation",
                    answer: { text: "Medicine" },
                    explanation: "Variolation was an early method of inducing immunity to smallpox by deliberately exposing someone to material from smallpox lesions."
                },
                {
                    prompt: "Mohs",
                    answer: { text: "Mineralogy" },
                    explanation: "The Mohs scale ranks minerals by their resistance to scratching."
                },
                {
                    prompt: "Idempotence",
                    answer: { text: "Computer Science" },
                    explanation: "An operation is idempotent when applying it repeatedly has the same effect as applying it once."
                },
                {
                    prompt: "Mitosis",
                    answer: { text: "Biology" },
                    explanation: "Mitosis is the process by which a cell divides its duplicated chromosomes, producing two genetically identical daughter cells."
                }
            ]
        },
        {
            id: "successor-states",
            title: "Successor States",
            category: "geography",
            type: "matching",
            instructions: "Match each historical country or region to its most direct modern successor or present-day counterpart.",
            promptLabel: "Historical Country/Region",
            answerLabel: "Modern Country",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Champa",
                    answer: { text: "Vietnam" },
                    explanation: "The historic Cham kingdoms occupied parts of what is now central and southern Vietnam before being gradually absorbed by Vietnamese expansion."
                },
                {
                    prompt: "Prussia",
                    answer: { text: "Germany" },
                    explanation: "Prussia became the leading power in German unification and formed the core of the German Empire. Its former territory is now divided among several countries."
                },
                {
                    prompt: "Bohemia",
                    answer: { text: "Czechia", aliases: ["Czech Republic"] },
                    explanation: "Bohemia was a historic kingdom whose territory forms much of the western part of modern Czechia."
                },
                {
                    prompt: "Ceylon",
                    answer: { text: "Sri Lanka" },
                    explanation: "The island nation formerly known as Ceylon adopted the name Sri Lanka in 1972."
                },
                {
                    prompt: "Formosa",
                    answer: { text: "Taiwan" },
                    explanation: "Formosa was a historical European name for the island now commonly known as Taiwan."
                },
                {
                    prompt: "Siam",
                    answer: { text: "Thailand" },
                    explanation: "Siam officially adopted the name Thailand in 1939, briefly reverting to Siam after World War II before the name change became permanent."
                },
                {
                    prompt: "Ottoman Empire",
                    answer: { text: "Turkey", aliases: ["Türkiye"] },
                    explanation: "The Ottoman Empire was abolished in 1922, and the Republic of Turkey was established the following year as its principal successor state."
                },
                {
                    prompt: "Persia",
                    answer: { text: "Iran" },
                    explanation: "Iran was historically known as Persia in much of the Western world. The government formally requested international use of the name Iran in 1935."
                },
                {
                    prompt: "Dutch East Indies",
                    answer: { text: "Indonesia" },
                    explanation: "The Dutch colonial territories in the East Indies became the independent Republic of Indonesia after the Indonesian National Revolution."
                },
                {
                    prompt: "Burma",
                    answer: { text: "Myanmar" },
                    explanation: "The country formerly known internationally as Burma adopted the name Myanmar in 1989."
                }
            ]
        },
        {
            id: "battle-of-the-bands",
            title: "Battle of the Bands",
            category: "pop-culture",
            type: "categorization",
            instructions: "Identify whether each musical group is real or fictional.",
            categories: ["Real", "Fictional"],
            thresholds: [3, 6, 10],
            questions: [
                {
                    prompt: "Smokey Bennett and the Hoops",
                    category: "Fictional",
                    explanation: "A fictional performing name used for the song 'The Flames of Love' in Payday 2."
                },
                {
                    prompt: "The B-52s",
                    category: "Real"
                },
                {
                    prompt: "The Shaggs",
                    category: "Real"
                },
                {
                    prompt: "Purple Magic",
                    category: "Fictional",
                    explanation: "A fictional band from Ace Combat 8."
                },
                {
                    prompt: "Cloud Nothings",
                    category: "Real"
                },
                {
                    prompt: "Neutral Milk Hotel",
                    category: "Real"
                },
                {
                    prompt: "Choujuu Gigaku",
                    category: "Fictional",
                    explanation: "A punk rock band from Touhou."
                },
                {
                    prompt: "K/DA",
                    category: "Fictional",
                    explanation: "A virtual K-pop group created by Riot Games featuring League of Legends characters."
                },
                {
                    prompt: "King Gizzard and the Lizard Wizard",
                    category: "Real"
                },
                {
                    prompt: "American Football",
                    category: "Real"
                },
                {
                    prompt: "Scylla and the Sirens",
                    category: "Fictional",
                    explanation: "A fictional musical group from Hades II."
                },
                {
                    prompt: "The Make Believes",
                    category: "Fictional",
                    explanation: "An in-universe band from We Happy Few."
                }
            ]
        }
    ]
};

export default day;