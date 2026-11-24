import type { DailySet } from "@/data/days/days";

import fnFiveSeven from "../../public/images/2026-10-14/fn-five-seven.jpg";
import m1911 from "../../public/images/2026-10-14/m1911.jpg";
import af2011a1 from "../../public/images/2026-10-14/af2011-a1.jpg";
import welrod from "../../public/images/2026-10-14/welrod.jpg";
import bergmannSimplex from "../../public/images/2026-10-14/bergmann-simplex.jpg";
import desertEagle from "../../public/images/2026-10-14/desert-eagle.jpg";
import berettaM9 from "../../public/images/2026-10-14/beretta-m9.jpg";
import nagantM1895 from "../../public/images/2026-10-14/nagant-m1895.jpg";
import nambu from "../../public/images/2026-10-14/nambu.jpg";
import smithWessonModel500 from "../../public/images/2026-10-14/smith-wesson-model-500.jpg";
import vietnamMap from "../../public/images/2026-10-14/vietnam-map.jpg";

const day: DailySet = {
    date: "2026-10-14",
    orbs: [
        {
            id: "asian-greetings",
            title: "Asian Greetings",
            category: "language",
            type: "matching",
            instructions: "Match each language to its corresponding greeting.",
            promptLabel: "Language",
            answerLabel: "Greeting",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Mandarin",
                    answer: { text: "你好", aliases: ["Nǐ hǎo", "Ni hao"] }
                },
                {
                    prompt: "Japanese",
                    answer: { text: "こんにちは", aliases: ["Konnichiwa"] }
                },
                {
                    prompt: "Korean",
                    answer: { text: "안녕하세요", aliases: ["Annyeonghaseyo"] }
                },
                {
                    prompt: "Vietnamese",
                    answer: { text: "Xin chào", aliases: ["Xin chao"] }
                },
                {
                    prompt: "Mongolian",
                    answer: { text: "Сайн байна уу", aliases: ["Sain baina uu"] }
                },
                {
                    prompt: "Thai",
                    answer: { text: "สวัสดี", aliases: ["Sawasdee", "Sawatdee"] }
                },
                {
                    prompt: "Lao",
                    answer: { text: "ສະບາຍດີ", aliases: ["Sabaidee"] }
                },
                {
                    prompt: "Tagalog",
                    answer: { text: "Kumusta", aliases: ["Kamusta"] }
                },
                {
                    prompt: "Khmer",
                    answer: { text: "ជំរាបសួរ", aliases: ["Chum reap suor"] }
                },
                {
                    prompt: "Indonesian",
                    answer: { text: "Halo", aliases: ["Hello"] }
                }
            ]
        },
        {
            id: "handle-with-care",
            title: "Handle with Care",
            category: "science",
            type: "matching",
            instructions: "Match each handgun to its image.",
            promptLabel: "Handgun",
            answerLabel: "Image",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "FN Five-seveN",
                    answerImage: {
                        src: fnFiveSeven,
                        alt: ""
                    }
                },
                {
                    prompt: "M1911",
                    answerImage: {
                        src: m1911,
                        alt: ""
                    }
                },
                {
                    prompt: "AF2011-A1",
                    answerImage: {
                        src: af2011a1,
                        alt: ""
                    }
                },
                {
                    prompt: "Welrod",
                    answerImage: {
                        src: welrod,
                        alt: ""
                    }
                },
                {
                    prompt: "Bergmann Simplex",
                    answerImage: {
                        src: bergmannSimplex,
                        alt: ""
                    }
                },
                {
                    prompt: "Desert Eagle",
                    answerImage: {
                        src: desertEagle,
                        alt: ""
                    }
                },
                {
                    prompt: "Beretta M9",
                    answerImage: {
                        src: berettaM9,
                        alt: ""
                    }
                },
                {
                    prompt: "Nagant M1895",
                    answerImage: {
                        src: nagantM1895,
                        alt: ""
                    }
                },
                {
                    prompt: "Nambu",
                    answerImage: {
                        src: nambu,
                        alt: ""
                    }
                },
                {
                    prompt: "Smith & Wesson Model 500",
                    answerImage: {
                        src: smithWessonModel500,
                        alt: ""
                    }
                }
            ]
        },
        {
            id: "vietnams-neighbors",
            title: "Vietnam's Neighbors",
            category: "geography",
            type: "free-response",
            instructions: "List the countries that share a land or maritime border with Vietnam.",
            prompt: "Name the neighboring countries.",
            thresholds: [2, 4, 6],
            referenceImages: [
                {
                    src: vietnamMap,
                    alt: "Map of Southeast Asia showing Vietnam and its neighboring countries",
                },
            ],
            answers: [
                { text: "China", aliases: ["People's Republic of China", "PRC"] },
                { text: "Laos", aliases: ["Lao PDR"] },
                { text: "Cambodia", aliases: ["Kingdom of Cambodia"] },
                { text: "Indonesia", aliases: ["Republic of Indonesia"] },
                { text: "Malaysia" },
                { text: "The Philippines", aliases: ["Philippines"] },
                { text: "Thailand", aliases: ["Kingdom of Thailand"] }
            ]
        },
        {
            id: "i-hear-the-blues-a-callin",
            title: "I Hear the Blues a Callin",
            category: "pop-culture",
            type: "categorization",
            instructions: "Classify each dish as either a type of salad or a type of omelette or egg dish.",
            thresholds: [3, 6, 10],
            categories: [
                "Salad",
                "Omelette / Egg Dish"
            ],
            questions: [
                {
                    prompt: "Cobb",
                    category: "Salad",
                    explanation: "Cobb salad is an American composed salad, traditionally made with ingredients such as chicken, bacon, egg, avocado, and blue cheese."
                },
                {
                    prompt: "Denver",
                    category: "Omelette / Egg Dish",
                    explanation: "A Denver omelette typically contains ham, bell peppers, onions, and cheese."
                },
                {
                    prompt: "Gado Gado",
                    category: "Salad",
                    explanation: "Gado gado is an Indonesian salad of vegetables and other ingredients served with peanut sauce."
                },
                {
                    prompt: "Larb",
                    category: "Salad",
                    explanation: "Larb is a Southeast Asian minced-meat salad, commonly associated with Laos."
                },
                {
                    prompt: "Tortilla Española",
                    category: "Omelette / Egg Dish",
                    explanation: "The Spanish tortilla is a thick omelette made primarily with eggs and potatoes."
                },
                {
                    prompt: "Tamagoyaki",
                    category: "Omelette / Egg Dish",
                    explanation: "Tamagoyaki is a Japanese rolled omelette made by cooking multiple thin layers of seasoned egg."
                },
                {
                    prompt: "Niçoise",
                    category: "Salad",
                    explanation: "Salade niçoise is a French salad traditionally associated with Nice, often containing tomatoes, eggs, olives, and tuna or anchovies."
                },
                {
                    prompt: "Frittata",
                    category: "Omelette / Egg Dish",
                    explanation: "A frittata is an Italian egg dish similar to an open-faced omelette, often containing vegetables, cheese, or meat."
                },
                {
                    prompt: "Waldorf",
                    category: "Salad",
                    explanation: "Waldorf salad traditionally combines apples, celery, and walnuts, often bound with mayonnaise."
                },
                {
                    prompt: "Kuku Sabzi",
                    category: "Omelette / Egg Dish",
                    explanation: "Kuku sabzi is a Persian herb-rich egg dish, somewhat similar to a frittata."
                },
                {
                    prompt: "Salmagundi",
                    category: "Salad",
                    explanation: "Salmagundi is a historical English composed salad made from a variety of ingredients, often including meat, vegetables, and seafood."
                },
                {
                    prompt: "Shakshuka",
                    category: "Omelette / Egg Dish",
                    explanation: "Shakshuka consists of eggs poached in a spiced tomato and pepper sauce."
                }
            ]
        }
    ]
};

export default day;