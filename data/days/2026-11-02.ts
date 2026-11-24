
import type { DailySet } from "@/data/days/days";

import tanegashima from "../../public/images/2026-11-02/tanegashima.jpg";
import hwacha from "../../public/images/2026-11-02/hwacha.jpg";
import scorpio from "../../public/images/2026-11-02/scorpio.jpg";
import puckleGun from "../../public/images/2026-11-02/puckle-gun.jpg";
import organGun from "../../public/images/2026-11-02/organ-gun.jpg";
import trebuchet from "../../public/images/2026-11-02/trebuchet.jpg";
import catapult from "../../public/images/2026-11-02/catapult.jpg";
import fireLance from "../../public/images/2026-11-02/fire-lance.jpg";
import chuKoNu from "../../public/images/2026-11-02/chu-ko-nu.jpg";
import gulyayGorod from "../../public/images/2026-11-02/gulyay-gorod.jpg";

const day: DailySet = {
    date: "2026-11-02",
    orbs: [
        {
            id: "regional-dialects",
            title: "Regional Dialects",
            category: "language",
            type: "matching",
            instructions: "Match each slang word or phrase to its corresponding state of origin.",
            promptLabel: "Slang",
            answerLabel: "State",
            thresholds: [2, 5, 9],
            questions:  [
                {
                    prompt: "Bubbler",
                    answer: { text: "Wisconsin" },
                    explanation: "A drinking or water fountain."
                },
                {
                    prompt: "Rig",
                    answer: { text: "Idaho" },
                    explanation: "A large personal vehicle, especially a truck or SUV."
                },
                {
                    prompt: "Duck, Duck, Gray Duck",
                    answer: { text: "Minnesota" },
                    explanation: "Minnesota's version of the children's game usually called Duck, Duck, Goose."
                },
                {
                    prompt: "Hella",
                    answer: { text: "California" },
                    explanation: "An informal intensifier meaning 'very' or 'a lot.'"
                },
                {
                    prompt: "Goat Roper",
                    answer: { text: "Texas" },
                    explanation: "A teasing or derogatory term for someone who pretends to be a cowboy."
                },
                {
                    prompt: "Rotary",
                    answer: { text: "Massachusetts" },
                    explanation: "A traffic circle or roundabout."
                },
                {
                    prompt: "Jit",
                    answer: { text: "Florida" },
                    explanation: "A young person or kid."
                },
                {
                    prompt: "Yinz",
                    answer: { text: "Pennsylvania" },
                    explanation: "A plural form of 'you,' equivalent to 'you all' or 'you guys.'"
                },
                {
                    prompt: "High-Low",
                    answer: { text: "Michigan" },
                    explanation: "A forklift or powered industrial truck used to lift and move materials."
                },
                {
                    prompt: "Gym Shoes",
                    answer: { text: "Illinois" },
                    explanation: "Athletic shoes, more commonly called sneakers."
                }
            ]
        },
        {
            id: "the-way-we-were",
            title: "The Way We Were",
            category: "science",
            type: "matching",
            instructions: "Match each piece of historical military equipment with its image.",
            promptLabel: "Equipment",
            answerLabel: "Image",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Tanegashima",
                    answerImage: { src: tanegashima, alt: "" }
                },
                {
                    prompt: "Hwacha",
                    answerImage: { src: hwacha, alt: "" }
                },
                {
                    prompt: "Scorpio",
                    answerImage: { src: scorpio, alt: "" }
                },
                {
                    prompt: "Puckle Gun",
                    answerImage: { src: puckleGun, alt: "" }
                },
                {
                    prompt: "Organ Gun",
                    answerImage: { src: organGun, alt: "" }
                },
                {
                    prompt: "Trebuchet",
                    answerImage: { src: trebuchet, alt: "" }
                },
                {
                    prompt: "Catapult",
                    answerImage: { src: catapult, alt: "" }
                },
                {
                    prompt: "Fire Lance",
                    answerImage: { src: fireLance, alt: "" }
                },
                {
                    prompt: "Chu Ko Nu",
                    answerImage: { src: chuKoNu, alt: "" }
                },
                {
                    prompt: "Gulyay Gorod",
                    answerImage: { src: gulyayGorod, alt: "" }
                }
            ]
        },
        {
            id: "sink-or-swim",
            title: "Sink or Swim",
            category: "geography",
            type: "free-response",
            instructions: "List the countries whose navies operated submarines during World War II.",
            prompt: "",
            thresholds: [3, 7, 12],
            answers: [
                { text: "United States", aliases: ["USA", "US", "America", "United States of America"] },
                { text: "Soviet Union", aliases: ["USSR", "Union of Soviet Socialist Republics"] },
                { text: "Britain", aliases: ["United Kingdom", "UK", "Great Britain"] },
                { text: "France" },
                { text: "Germany" },
                { text: "Italy" },
                { text: "Japan" },
                { text: "Spain" },
                { text: "Turkey" },
                { text: "Brazil" },
                { text: "Chile" },
                { text: "Estonia" },
                { text: "Finland" }
            ]
        },
        {
            id: "a-match-made-in-film",
            title: "A Match Made in Film",
            category: "pop-culture",
            type: "matching",
            instructions: "Match each film to its director.",
            promptLabel: "Film",
            answerLabel: "Director",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Dunkirk",
                    answer: { text: "Christopher Nolan" }
                },
                {
                    prompt: "Everything Everywhere All at Once",
                    answer: { text: "Daniel Kwan & Daniel Scheinert" }
                },
                {
                    prompt: "Obsession",
                    answer: { text: "Curry Barker" }
                },
                {
                    prompt: "CODA",
                    answer: { text: "Sian Heder" }
                },
                {
                    prompt: "The Shining",
                    answer: { text: "Stanley Kubrick" }
                },
                {
                    prompt: "Psycho",
                    answer: { text: "Alfred Hitchcock" }
                },
                {
                    prompt: "Jurassic Park",
                    answer: { text: "Steven Spielberg" }
                },
                {
                    prompt: "Seven Samurai",
                    answer: { text: "Akira Kurosawa" }
                },
                {
                    prompt: "The Good, the Bad and the Ugly",
                    answer: { text: "Sergio Leone" }
                },
                {
                    prompt: "Ip Man",
                    answer: { text: "Wilson Yip" }
                }
            ]
        }
    ]
};

export default day;
