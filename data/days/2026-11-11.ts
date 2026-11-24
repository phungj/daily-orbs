import { DailySet } from "@/data/days/days";

const day: DailySet = {
    date: "2026-11-11",
    orbs: [
        {
            id: "everyones-a-diacritic",
            title: "Everyone's a Diacritic",
            category: "language",
            type: "matching",
            instructions: "Match each diacritic to its name.",
            promptLabel: "Diacritic",
            answerLabel: "Name",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "à",
                    answer: { text: "Grave Accent" },
                },
                {
                    prompt: "á",
                    answer: { text: "Acute Accent" },
                },
                {
                    prompt: "â",
                    answer: { text: "Circumflex" },
                },
                {
                    prompt: "ä",
                    answer: { text: "Diaeresis" },
                },
                {
                    prompt: "ç",
                    answer: { text: "Cedilla" },
                },
                {
                    prompt: "ñ",
                    answer: { text: "Tilde" },
                },
                {
                    prompt: "å",
                    answer: { text: "Ring Above" },
                },
                {
                    prompt: "ø",
                    answer: { text: "Stroke" },
                },
                {
                    prompt: "ő",
                    answer: { text: "Double Acute" },
                },
                {
                    prompt: "ơ",
                    answer: { text: "Horn" },
                },
            ],
        },
        {
            id: "hot-ones",
            title: "Hot Ones",
            category: "science",
            type: "matching",
            instructions: "Match each pepper family with its corresponding range of SHU ratings.",
            promptLabel: "Pepper",
            answerLabel: "SHU",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Serrano",
                    answer: { text: "8,000 - 20,000" },
                },
                {
                    prompt: "Jalapeño",
                    answer: { text: "2,500 - 8,000" },
                },
                {
                    prompt: "Habanero",
                    answer: { text: "100,000 - 350,000" },
                },
                {
                    prompt: "Ghost Pepper",
                    answer: { text: "850,000 - 1,040,000" },
                },
                {
                    prompt: "Poblano",
                    answer: { text: "1,000 - 1,500" },
                },
                {
                    prompt: "Bell Pepper",
                    answer: { text: "0" },
                },
                {
                    prompt: "Fresno Chili",
                    answer: { text: "2,500 - 10,000" },
                },
                {
                    prompt: "Thai Chili",
                    answer: { text: "50,000 - 100,000" },
                },
                {
                    prompt: "Tabasco",
                    answer: { text: "30,000 - 50,000" },
                },
                {
                    prompt: "Scotch Bonnet",
                    answer: { text: "80,000 - 400,000" },
                },
            ],
        },
        {
            id: "where-we-fought",
            title: "Where We Fought",
            category: "geography",
            type: "matching",
            instructions: "Match each battle to the modern country in which it took place.",
            promptLabel: "Battle",
            answerLabel: "Country",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Teutoburg Forest",
                    answer: { text: "Germany" },
                },
                {
                    prompt: "Gettysburg",
                    answer: { text: "United States" },
                },
                {
                    prompt: "Gallipoli",
                    answer: { text: "Turkey" },
                },
                {
                    prompt: "Waterloo",
                    answer: { text: "Belgium" },
                },
                {
                    prompt: "Agincourt",
                    answer: { text: "France" },
                },
                {
                    prompt: "Khe Sanh",
                    answer: { text: "Vietnam" },
                },
                {
                    prompt: "Mogadishu",
                    answer: { text: "Somalia" },
                },
                {
                    prompt: "Stalingrad",
                    answer: { text: "Russia" },
                },
                {
                    prompt: "Białystok–Minsk",
                    answer: { text: "Belarus" },
                },
                {
                    prompt: "El Alamein",
                    answer: { text: "Egypt" },
                },
            ],
        },
        {
            id: "war-songs",
            title: "War Songs",
            category: "pop-culture",
            type: "categorization",
            instructions: "Identify whether each war-related song originated in WWI, WWII, or Vietnam.",
            categories: ["WWI", "WWII", "Vietnam"],
            thresholds: [3, 6, 10],
            questions: [
                {
                    prompt: "Pack Up Your Troubles in Your Old Kit-Bag",
                    category: "WWI",
                },
                {
                    prompt: "Säkijärven Polkka",
                    category: "WWII",
                },
                {
                    prompt: "Ballad of the Green Berets",
                    category: "Vietnam",
                },
                {
                    prompt: "Over There",
                    category: "WWI",
                },
                {
                    prompt: "We Gotta Get Out of This Place",
                    category: "Vietnam",
                },
                {
                    prompt: "Fortunate Son",
                    category: "Vietnam",
                },
                {
                    prompt: "Katyusha",
                    category: "WWII",
                },
                {
                    prompt: "It's a Long Way to Tipperary",
                    category: "WWI",
                },
                {
                    prompt: "The Unknown Soldier",
                    category: "Vietnam",
                },
                {
                    prompt: "Mademoiselle from Armentières",
                    category: "WWI",
                },
                {
                    prompt: "Erika",
                    category: "WWII",
                },
                {
                    prompt: "Lili Marleen",
                    category: "WWII",
                },
            ],
        },
    ],
};

export default day;
