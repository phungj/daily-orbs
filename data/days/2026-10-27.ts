
import type { DailySet } from "@/data/days/days";

import corn from "../../public/images/2026-10-27/corn.jpg";
import wheat from "../../public/images/2026-10-27/wheat.jpg";
import rice from "../../public/images/2026-10-27/rice.jpg";
import cotton from "../../public/images/2026-10-27/cotton.jpg";
import sugarcane from "../../public/images/2026-10-27/sugarcane.jpg";
import bamboo from "../../public/images/2026-10-27/bamboo.jpg";
import peanut from "../../public/images/2026-10-27/peanut.jpg";
import hops from "../../public/images/2026-10-27/hops.jpg";
import tea from "../../public/images/2026-10-27/tea.jpg";
import coffee from "../../public/images/2026-10-27/coffee.jpg";

const day: DailySet = {
    date: "2026-10-27",
    orbs: [
        {
            id: "lost-in-translation",
            title: "Lost in Translation",
            category: "language",
            type: "matching",
            instructions: "Match each Latin word or phrase to its corresponding English translation.",
            promptLabel: "Latin",
            answerLabel: "English Translation",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "docendo discimus",
                    answer: { text: "By teaching, we learn" }
                },
                {
                    prompt: "cumulus",
                    answer: { text: "Heap / pile" }
                },
                {
                    prompt: "amor patriae",
                    answer: { text: "Love of one's country" }
                },
                {
                    prompt: "hortus regis alti",
                    answer: { text: "Garden of the high king" }
                },
                {
                    prompt: "fuscus",
                    answer: { text: "Dark / black" }
                },
                {
                    prompt: "fiat lux",
                    answer: { text: "Let there be light" }
                },
                {
                    prompt: "ventus",
                    answer: { text: "Wind" }
                },
                {
                    prompt: "balaena",
                    answer: { text: "Whale" }
                },
                {
                    prompt: "gemma",
                    answer: { text: "Bud / Jewel" }
                },
                {
                    prompt: "lux lunae",
                    answer: { text: "Moonlight" }
                }
            ]
        },
        {
            id: "farming-really",
            title: "Farming, Really",
            category: "science",
            type: "matching",
            instructions: "Match each crop with its image.",
            promptLabel: "Crop",
            answerLabel: "Image",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Corn",
                    answerImage: { src: corn, alt: "" }
                },
                {
                    prompt: "Wheat",
                    answerImage: { src: wheat, alt: "" }
                },
                {
                    prompt: "Rice",
                    answerImage: { src: rice, alt: "" }
                },
                {
                    prompt: "Cotton",
                    answerImage: { src: cotton, alt: "" }
                },
                {
                    prompt: "Sugarcane",
                    answerImage: { src: sugarcane, alt: "" }
                },
                {
                    prompt: "Bamboo",
                    answerImage: { src: bamboo, alt: "" }
                },
                {
                    prompt: "Peanut",
                    answerImage: { src: peanut, alt: "" }
                },
                {
                    prompt: "Hops",
                    answerImage: { src: hops, alt: "" }
                },
                {
                    prompt: "Tea",
                    answerImage: { src: tea, alt: "" }
                },
                {
                    prompt: "Coffee",
                    answerImage: { src: coffee, alt: "" }
                }
            ]
        },
        {
            id: "fact-or-fiction",
            title: "Fact or Fiction",
            category: "geography",
            type: "categorization",
            instructions: "Identify whether each nation is real or fictional.",
            thresholds: [3, 6, 10],
            categories: [
                "Real",
                "Fictional"
            ],
            questions: [
                {
                    prompt: "Suriname",
                    category: "Real"
                },
                {
                    prompt: "Estovakia",
                    category: "Fictional"
                },
                {
                    prompt: "Brunei",
                    category: "Real"
                },
                {
                    prompt: "Ustio",
                    category: "Fictional"
                },
                {
                    prompt: "Eswatini",
                    category: "Real"
                },
                {
                    prompt: "Delarus",
                    category: "Fictional"
                },
                {
                    prompt: "Guyana",
                    category: "Real"
                },
                {
                    prompt: "Lesotho",
                    category: "Real"
                },
                {
                    prompt: "Sotoa",
                    category: "Fictional"
                },
                {
                    prompt: "Leasath",
                    category: "Fictional"
                },
                {
                    prompt: "San Salvacion",
                    category: "Fictional"
                },
                {
                    prompt: "Djibouti",
                    category: "Real"
                }
            ]
        },
        {
            id: "myth-or-fiction",
            title: "Myth or Fiction",
            category: "pop-culture",
            type: "categorization",
            instructions: "Identify whether each term comes from Greek mythology, Norse mythology, mythology or folklore from elsewhere, or is not mythological.",
            thresholds: [4, 9, 14],
            categories: [
                "Greek Mythology",
                "Norse Mythology",
                "Other Mythology / Folklore",
                "Not Mythological"
            ],
            questions: [
                {
                    prompt: "Munin",
                    category: "Norse Mythology",
                    explanation: "Munin is one of Odin's two ravens, alongside Hugin. His name is commonly translated as 'memory'."
                },
                {
                    prompt: "Hugin",
                    category: "Norse Mythology",
                    explanation: "Hugin is one of Odin's two ravens. His name is commonly translated as 'thought'."
                },
                {
                    prompt: "Tonitrus",
                    category: "Not Mythological",
                    explanation: "Tonitrus is Latin for thunder."
                },
                {
                    prompt: "Imago",
                    category: "Not Mythological",
                    explanation: "Imago is a Latin word meaning image or likeness, and is also a biological term for the adult stage of an insect."
                },
                {
                    prompt: "Podarge",
                    category: "Greek Mythology",
                    explanation: "Podarge is one of the Harpies."
                },
                {
                    prompt: "Celaeno",
                    category: "Greek Mythology",
                    explanation: "Many figures are named Celaeno, including one of the Harpies."
                },
                {
                    prompt: "Gleipnir",
                    category: "Norse Mythology",
                    explanation: "Gleipnir is the magical binding crafted by dwarves to restrain the wolf Fenrir."
                },
                {
                    prompt: "Fenrir",
                    category: "Norse Mythology",
                    explanation: "Fenrir is a monstrous wolf in Norse mythology, destined to kill Odin during Ragnarök."
                },
                {
                    prompt: "Siccitas",
                    category: "Not Mythological",
                    explanation: "Siccitas is a Latin word meaning dryness or drought."
                },
                {
                    prompt: "Nuckelavee",
                    category: "Other Mythology / Folklore",
                    explanation: "The Nuckelavee is a monstrous horse-like creature from the folklore of the Orkney Islands."
                },
                {
                    prompt: "Balios",
                    category: "Greek Mythology",
                    explanation: "Balios is one of the immortal horses of Achilles."
                },
                {
                    prompt: "Grindylow",
                    category: "Other Mythology / Folklore",
                    explanation: "A Grindylow is a water-dwelling creature from English folklore, particularly associated with marshes and waterways."
                },
                {
                    prompt: "Afanc",
                    category: "Other Mythology / Folklore",
                    explanation: "The Afanc is a monstrous lake creature from Welsh folklore."
                },
                {
                    prompt: "Xanthos",
                    category: "Greek Mythology",
                    explanation: "Xanthos is one of the immortal horse of Achilles."
                },
                {
                    prompt: "Catoblepas",
                    category: "Other Mythology / Folklore",
                    explanation: "The Catoblepas is a legendary creature described in classical accounts as inhabiting Ethiopia. It is often depicted as a heavy, bull-like beast with a dangerous gaze."
                },
                {
                    prompt: "Fatsia",
                    category: "Not Mythological",
                    explanation: "Fatsia is a genus of flowering plants."
                }
            ]
        }
    ]
};

export default day;
