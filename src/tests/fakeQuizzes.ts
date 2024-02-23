import { ShuffledQuiz } from "@model/quiz";

export const EMPTY_SHUFFLED_QUIZ: ShuffledQuiz = {
  type: "multiple",
  difficulty: "easy",
  category: "",
  question: "",
  correct_answer: "",
  incorrect_answers: [],
  shuffledAnswers: [],
};

export const FAKE_SHUFFLED_QUIZ_LIST: ShuffledQuiz[] = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Japanese Anime &amp; Manga",
    question:
      "In &quot;Puella Magi Madoka Magica&quot;, what is the first name of Madoka&#039;s younger brother?",
    correct_answer: "Tatsuya",
    incorrect_answers: ["Montoya", "Tomohisa", "Minato"],
    shuffledAnswers: ["Montoya", "Tomohisa", "Minato", "Tatsuya"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "Which actor and martial artist starred as Colonel Guile in the 1994 action film adaptation of Street Fighter?",
    correct_answer: "Jean-Claude Van Damme",
    incorrect_answers: ["Chuck Norris", "Steven Seagal", "Scott Adkins"],
    shuffledAnswers: [
      "Jean-Claude Van Damme",
      "Chuck Norris",
      "Steven Seagal",
      "Scott Adkins",
    ],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question:
      "In the movie &quot;Spaceballs&quot;, what are the Spaceballs attempting to steal from Planet Druidia?",
    correct_answer: "Air",
    incorrect_answers: ["The Schwartz", "Princess Lonestar", "Meatballs"],
    shuffledAnswers: ["The Schwartz", "Princess Lonestar", "Air", "Meatballs"],
  },
];
