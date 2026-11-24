
import type { DailySet } from "@/data/days/days";

import theScream from "../../public/images/2026-11-22/the-scream.jpg";
import theStarryNight from "../../public/images/2026-11-22/the-starry-night.jpg";
import thePersistenceOfMemory from "../../public/images/2026-11-22/the-persistence-of-memory.jpg";
import girlWithPearlEarring from "../../public/images/2026-11-22/girl-with-a-pearl-earring.jpg";
import comedian from "../../public/images/2026-11-22/comedian.jpg";
import fountain from "../../public/images/2026-11-22/fountain.jpg";
import guernica from "../../public/images/2026-11-22/guernica.jpg";
import campbellsSoupCans from "../../public/images/2026-11-22/campbells-soup-cans.jpg";
import theGreatWave from "../../public/images/2026-11-22/the-great-wave-off-kanagawa.jpg";
import theTreacheryOfImages from "../../public/images/2026-11-22/the-treachery-of-images.jpg";

const day: DailySet = {
  date: "2026-11-22",
  orbs: [
    {
      id: "military-lingo",
      title: "Military Lingo",
      category: "language",
      type: "matching",
      instructions: "Match each expression to its original military meaning.",
      promptLabel: "Expression",
      answerLabel: "Meaning",
      thresholds: [2, 5, 9],
      questions: [
        {
          prompt: "Going ballistic",
          answer: {
            text: "When a guided missile loses tracking."
          }
        },
        {
          prompt: "Balls to the wall",
          answer: {
            text: "Pushing an aircraft throttle to the max."
          }
        },
        {
          prompt: "Loose cannon",
          answer: {
            text: "An unsecured cannon on a ship."
          }
        },
        {
          prompt: "Over the top",
          answer: {
            text: "Infantry climbing out of trenches."
          }
        },
        {
          prompt: "Flash in the pan",
          answer: {
            text: "When a flintlock ignites the primer but fails to ignite the main charge."
          }
        },
        {
          prompt: "Go off half-cocked",
          answer: {
            text: "When a firearm discharges despite being in safety."
          }
        },
        {
          prompt: "Stick to your guns",
          answer: {
            text: "Artillery crews being ordered to hold their positions."
          }
        },
        {
          prompt: "Gung ho",
          answer: {
            text: "A Chinese-derived expression adopted by U.S. Marines meaning \"work together.\""
          }
        },
        {
          prompt: "Draw a bead on",
          answer: {
            text: "Aligning a firearm's sights on a target."
          }
        },
        {
          prompt: "Run amok",
          answer: {
            text: "A frenzied, often suicidal attack associated with Malay warriors."
          }
        }
      ]
    },
    {
      id: "i-like-your-funny-words-magic-man-iii",
      title: "I Like Your Funny Words Magic Man",
      category: "science",
      type: "matching",
      instructions: "Match each fake scientific discipline to what it would study if it were real.",
      promptLabel: "Discipline",
      answerLabel: "Field",
      thresholds: [2, 5, 9],
      questions: [
        {
          prompt: "Spectronoetics",
          answer: {
            text: "The acquisition of knowledge via apparitions or echoes."
          }
        },
        {
          prompt: "Chiroacoustics",
          answer: {
            text: "The production and perception of sound through hand movements."
          }
        },
        {
          prompt: "Noctilogy",
          answer: {
            text: "The biological and environmental phenomena associated with nighttime."
          }
        },
        {
          prompt: "Hylometrics",
          answer: {
            text: "The quantitative measurement of material composition and structure."
          }
        },
        {
          prompt: "Aporiology",
          answer: {
            text: "The classification and study of seemingly unsolvable problems."
          }
        },
        {
          prompt: "Kinetognosy",
          answer: {
            text: "The acquisition of knowledge through body movement."
          }
        },
        {
          prompt: "Somnophysics",
          answer: {
            text: "The physics of sleep."
          }
        },
        {
          prompt: "Optognostics",
          answer: {
            text: "Visual recognition and identification."
          }
        },
        {
          prompt: "Chromatognosis",
          answer: {
            text: "The recognition and classification of colors through perception."
          }
        },
        {
          prompt: "Eidonomy",
          answer: {
            text: "The classification of mental images and representations."
          }
        }
      ]
    },
    {
      id: "russian-cities",
      title: "Russian or Not Russian?",
      category: "geography",
      type: "categorization",
      instructions: "Classify each city according to whether it is located in Russia.",
      thresholds: [3, 6, 10],
      categories: [
        "Russian",
        "Not Russian"
      ],
      questions: [
        {
          prompt: "Moscow",
          category: "Russian",
          explanation: "Moscow is the capital and largest city of Russia."
        },
        {
          prompt: "Minsk",
          category: "Not Russian",
          explanation: "Minsk is the capital of Belarus."
        },
        {
          prompt: "Kazan",
          category: "Russian",
          explanation: "Kazan is the capital of the Republic of Tatarstan, within Russia."
        },
        {
          prompt: "Kyiv",
          category: "Not Russian",
          explanation: "Kyiv is the capital of Ukraine."
        },
        {
          prompt: "Novosibirsk",
          category: "Russian",
          explanation: "Novosibirsk is a major Siberian city in Russia."
        },
        {
          prompt: "Almaty",
          category: "Not Russian",
          explanation: "Almaty is Kazakhstan's largest city and former capital."
        },
        {
          prompt: "Vladivostok",
          category: "Russian",
          explanation: "Vladivostok is a Russian port city on the Pacific coast."
        },
        {
          prompt: "Tbilisi",
          category: "Not Russian",
          explanation: "Tbilisi is the capital of Georgia."
        },
        {
          prompt: "St. Petersburg",
          category: "Russian",
          explanation: "St. Petersburg is Russia's second-largest city and a former imperial capital."
        },
        {
          prompt: "Yerevan",
          category: "Not Russian",
          explanation: "Yerevan is the capital of Armenia."
        },
        {
          prompt: "Kaliningrad",
          category: "Russian",
          explanation: "Kaliningrad is a Russian exclave between Poland and Lithuania."
        },
        {
          prompt: "Helsinki",
          category: "Not Russian",
          explanation: "Helsinki is the capital of Finland."
        }
      ]
    },
    {
      id: "famous-artworks",
      title: "Art History",
      category: "pop-culture",
      type: "matching",
      instructions: "Match each artwork to its title.",
      promptLabel: "Title",
      answerLabel: "Artwork",
      thresholds: [2, 5, 9],
      questions: [
        {
          prompt: "The Scream",
          answerImage: {
            src: theScream,
            alt: "The Scream"
          }
        },
        {
          prompt: "The Starry Night",
          answerImage: {
            src: theStarryNight,
            alt: "The Starry Night"
          }
        },
        {
          prompt: "The Persistence of Memory",
          answerImage: {
            src: thePersistenceOfMemory,
            alt: "The Persistence of Memory"
          }
        },
        {
          prompt: "Girl with a Pearl Earring",
          answerImage: {
            src: girlWithPearlEarring,
            alt: "Girl with a Pearl Earring"
          }
        },
        {
          prompt: "Comedian",
          answerImage: {
            src: comedian,
            alt: "Comedian"
          }
        },
        {
          prompt: "Fountain",
          answerImage: {
            src: fountain,
            alt: "Fountain"
          }
        },
        {
          prompt: "Guernica",
          answerImage: {
            src: guernica,
            alt: "Guernica"
          }
        },
        {
          prompt: "Campbell's Soup Cans",
          answerImage: {
            src: campbellsSoupCans,
            alt: "Campbell's Soup Cans"
          }
        },
        {
          prompt: "The Great Wave off Kanagawa",
          answerImage: {
            src: theGreatWave,
            alt: "The Great Wave off Kanagawa"
          }
        },
        {
          prompt: "The Treachery of Images",
          answerImage: {
            src: theTreacheryOfImages,
            alt: "The Treachery of Images"
          }
        }
      ]
    }
  ]
};

export default day;
