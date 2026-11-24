import { DailySet } from "@/data/days/days";

import stoneFarting from "../../public/images/2026-11-25/stone-farting.jpg";
import peterScrooge from "../../public/images/2026-11-25/peter-scrooge.jpg";
import peterPlasticWrap from "../../public/images/2026-11-25/peter-plastic-wrap.jpg";
import stewieHitsHead from "../../public/images/2026-11-25/stewie-hits-head.jpg";
import coffeeCups from "../../public/images/2026-11-25/coffee-cups.jpg";
import peterSits from "../../public/images/2026-11-25/peter-sits.jpg";

const day: DailySet = {
    date: "2026-11-25",
    orbs: [
        {
            id: "lost-in-translation-ii",
            title: "Lost in Translation",
            category: "language",
            type: "matching",
            instructions: "Match each German word or expression to its English meaning.",
            promptLabel: "German",
            answerLabel: "English",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Landsknecht",
                    answer: { text: "Mercenary foot soldier" },
                    explanation: "A German mercenary infantryman, particularly one serving in the late 15th and 16th centuries."
                },
                {
                    prompt: "Zweihänder",
                    answer: { text: "Two-handed sword" },
                    explanation: "A large two-handed sword historically used by German and Swiss infantry."
                },
                {
                    prompt: "Reich",
                    answer: { text: "Empire or realm" },
                    explanation: "A German word for realm, domain, or empire, famously used in the names of several German states."
                },
                {
                    prompt: "Fallschirmjäger",
                    answer: { text: "Paratrooper" },
                    explanation: "Literally 'parachute hunter'; the German term for airborne infantry."
                },
                {
                    prompt: "Gewehr",
                    answer: { text: "Rifle" },
                    explanation: "The general German word for a rifle or firearm."
                },
                {
                    prompt: "Kindergarten",
                    answer: { text: "Children's garden" },
                    explanation: "Literally 'children's garden'; the term for a preschool or early childhood education program."
                },
                {
                    prompt: "Schadenfreude",
                    answer: { text: "Pleasure at another's misfortune" },
                    explanation: "A compound of Schaden (damage or harm) and Freude (joy)."
                },
                {
                    prompt: "Zeitgeist",
                    answer: { text: "Spirit of the age" },
                    explanation: "The prevailing ideas, attitudes, and cultural atmosphere of a particular historical period."
                },
                {
                    prompt: "Wanderlust",
                    answer: { text: "Strong desire to travel" },
                    explanation: "A compound of wandern (to hike or wander) and Lust (desire or pleasure)."
                },
                {
                    prompt: "Doppelgänger",
                    answer: { text: "Look-alike or double" },
                    explanation: "Literally 'double-goer'; a person who closely resembles another person."
                }
            ]
        },
        {
            id: "medical-terminology",
            title: "Med Terms",
            category: "science",
            type: "matching",
            instructions: "Match each medical term to its meaning.",
            promptLabel: "Medical term",
            answerLabel: "Meaning",
            thresholds: [2, 5, 9],
            questions: [
                {
                    prompt: "Vascular Anastomosis",
                    answer: { text: "Surgical connection between blood vessels" },
                    explanation: "Anastomosis refers to a connection between two tubular structures. In vascular surgery, it means joining blood vessels together."
                },
                {
                    prompt: "Hematemesis",
                    answer: { text: "Vomiting blood" },
                    explanation: "Hemat- means blood and -emesis means vomiting. Usually involves bleeding from the upper gastrointestinal tract."
                },
                {
                    prompt: "Diplopia",
                    answer: { text: "Double vision" },
                    explanation: "Dipl- means double and -opia refers to vision or a visual condition."
                },
                {
                    prompt: "Atherosclerosis",
                    answer: { text: "Buildup of fatty plaques in arteries" },
                    explanation: "Ather/o means fatty deposit or plaque, while -sclerosis means hardening."
                },
                {
                    prompt: "Cardiomegaly",
                    answer: { text: "Enlargement of the heart" },
                    explanation: "Cardi/o means heart and -megaly means enlargement."
                },
                {
                    prompt: "Nephrolithiasis",
                    answer: { text: "Presence of kidney stones" },
                    explanation: "Nephr/o means kidney, lith means stone, and -iasis indicates a pathological condition."
                },
                {
                    prompt: "Osteomyelitis",
                    answer: { text: "Infection or inflammation of bone and bone marrow" },
                    explanation: "Oste/o means bone, myel/o means marrow, and -itis means inflammation."
                },
                {
                    prompt: "Rhinorrhea",
                    answer: { text: "Runny nose or nasal discharge" },
                    explanation: "Rhin/o means nose and -rrhea means flow or discharge."
                },
                {
                    prompt: "Gastrectomy",
                    answer: { text: "Surgical removal of all or part of the stomach" },
                    explanation: "Gastr/o means stomach and -ectomy means surgical removal."
                },
                {
                    prompt: "Bronchoscopy",
                    answer: { text: "Visual examination of the bronchial airways" },
                    explanation: "Bronch/o refers to the bronchial airways and -scopy means visual examination."
                }
            ]
        },
        {
            id: "theater-of-operations",
            title: "Theater of Operations",
            category: "geography",
            type: "matching",
            instructions: "Match each military operation to the country or region where it took place.",
            promptLabel: "Military operation",
            answerLabel: "Location",
            thresholds: [3, 6, 10],
            questions: [
                {
                    prompt: "Operation Torch",
                    answer: { text: "Morocco and Algeria" },
                    explanation: "The Allied landings in French North Africa in November 1942."
                },
                {
                    prompt: "Operation Overlord",
                    answer: { text: "Normandy, France" },
                    explanation: "The Allied invasion of northwestern Europe, beginning with the Normandy landings on June 6, 1944."
                },
                {
                    prompt: "Operation Husky",
                    answer: { text: "Sicily, Italy" },
                    explanation: "The Allied invasion of Sicily in July 1943."
                },
                {
                    prompt: "Operation Urgent Fury",
                    answer: { text: "Grenada" },
                    explanation: "The 1983 US-led invasion of Grenada."
                },
                {
                    prompt: "Operation Eagle Claw",
                    answer: { text: "Iran" },
                    explanation: "The failed 1980 US military attempt to rescue American hostages held in Tehran."
                },
                {
                    prompt: "Operation El Dorado Canyon",
                    answer: { text: "Libya" },
                    explanation: "The 1986 US airstrikes against targets in Libya."
                },
                {
                    prompt: "Operation Praying Mantis",
                    answer: { text: "Persian Gulf / Iran" },
                    explanation: "A 1988 US naval operation against Iranian forces in the Persian Gulf."
                },
                {
                    prompt: "Operation Desert Shield",
                    answer: { text: "Saudi Arabia" },
                    explanation: "The 1990 deployment of coalition forces to defend Saudi Arabia following Iraq's invasion of Kuwait."
                },
                {
                    prompt: "Operation Desert Storm",
                    answer: { text: "Iraq and Kuwait" },
                    explanation: "The 1991 coalition air and ground campaign to expel Iraqi forces from Kuwait."
                },
                {
                    prompt: "Operation Iraqi Freedom",
                    answer: { text: "Iraq" },
                    explanation: "The 2003 US-led invasion of Iraq and subsequent military campaign."
                }
            ]
        },
        {
            id: "this-is-just-like-the-time-i",
            title: "This is Just Like the Time I...",
            category: "pop-culture",
            type: "categorization",
            instructions: "Identify whether each cutaway gag actually appeared in Family Guy.",
            categories: ["Real", "Fake"],
            thresholds: [2, 5, 8],
            questions: [
                {
                    prompt: "King Arthur pulls the sword from the stone and the stone lets out a very long fart.",
                    category: "Real",
                    explanation: "The stone farts for 15 seconds.",
                    explanationImage: { src: stoneFarting, alt: "" },
                },
                {
                    prompt: "Stewie creates a Saw trap for Lois and rides in on a tricycle dressed as Billy the Puppet. He begins to explain the rules of the \"game\" but remembers halfway through that Lois doesn't understand him.",
                    category: "Fake",
                },
                {
                    prompt: "Peter attempts to dive into a big pile of coins like Scrooge McDuck and is immediately severely injured.",
                    category: "Real",
                    explanation: "\"It's not a liquid. It's a great many pieces of solid matter that form a hard, floor-like surface. Ahhhhh!\"",
                    explanationImage: { src: peterScrooge, alt: "" },
                },
                {
                    prompt: "The whole cutaway is just an incredibly long and drawn-out sequence of Peter trying to thread a needle. When he finally does it, he says \"I don't know how to sew.\"",
                    category: "Fake",
                },
                {
                    prompt: "Peter spends two minutes trying to put plastic wrap on a plate of food.",
                    category: "Real",
                    explanationImage: { src: peterPlasticWrap, alt: "" },
                },
                {
                    prompt: "Stewie hits his head and tries to set up a cutaway but can't make a coherent sentence, so it just cuts to Stewie standing there not knowing what he's supposed to do.",
                    category: "Real",
                    explanationImage: { src: stewieHitsHead, alt: "" },
                },
                {
                    prompt: "The family of the coffee cup that was accidentally visible in Game of Thrones excitedly watches the episode together.",
                    category: "Real",
                    explanationImage: { src: coffeeCups, alt: "" },
                },
                {
                    prompt: "Peter and the guys rob a bank dressed as famous actresses, but Quagmire gives them away by saying he's dressed as Glenn Close because his name is Glen.",
                    category: "Fake",
                },
                {
                    prompt: "Joe has to deliver the news to Bluey's parents that Bluey was killed in a car crash.",
                    category: "Fake",
                },
                {
                    prompt: "Peter forgets how to sit.",
                    category: "Real",
                    explanationImage: { src: peterSits, alt: "" },
                },
            ],
        }
    ]
};

export default day;
