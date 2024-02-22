import { Quiz } from "../model/quiz";

export const EMPTY_QUIZ = {
  question: "",
  correct_answer: "",
  incorrect_answers: [],
};

export const fakeQuizzes: Quiz[] = [
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Japanese Anime &amp; Manga",
    question:
      "In &quot;Puella Magi Madoka Magica&quot;, what is the first name of Madoka&#039;s younger brother?",
    correct_answer: "Tatsuya",
    incorrect_answers: ["Montoya", "Tomohisa", "Minato"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question:
      "Which actor and martial artist starred as Colonel Guile in the 1994 action film adaptation of Street Fighter?",
    correct_answer: "Jean-Claude Van Damme",
    incorrect_answers: ["Chuck Norris", "Steven Seagal", "Scott Adkins"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Entertainment: Film",
    question:
      "In the movie &quot;Spaceballs&quot;, what are the Spaceballs attempting to steal from Planet Druidia?",
    correct_answer: "Air",
    incorrect_answers: ["The Schwartz", "Princess Lonestar", "Meatballs"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "General Knowledge",
    question:
      "Which of the following card games revolves around numbers and basic math?",
    correct_answer: "Uno",
    incorrect_answers: ["Go Fish", "Twister", "Munchkin"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Geography",
    question:
      "The Maluku islands (informally known as the Spice Islands) belong to which country?",
    correct_answer: "Indonesia",
    incorrect_answers: ["Chile", "New Zealand", "Fiji"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Video Games",
    question:
      "How many games are there in the &quot;Colony Wars&quot; series for the PlayStation?",
    correct_answer: "3",
    incorrect_answers: ["2", "4", "5"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "General Knowledge",
    question:
      "The likeness of which president is featured on the rare $2 bill of USA currency?",
    correct_answer: "Thomas Jefferson",
    incorrect_answers: [
      "Martin Van Buren",
      "Ulysses Grant",
      "John Quincy Adams",
    ],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Television",
    question: "What is Meg&#039;s full name in &quot;Family Guy&quot;?",
    correct_answer: "Megatron Griffin",
    incorrect_answers: ["Who-Cares Griffin", "Neil Griffin", "Megan Griffin"],
  },
  {
    type: "multiple",
    difficulty: "hard",
    category: "Entertainment: Board Games",
    question:
      "On a standard Monopoly board, how much do you have to pay for Tennessee Ave?",
    correct_answer: "$180",
    incorrect_answers: ["$200", "$160", "$220"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "Entertainment: Film",
    question: "Who directed the 1973 film &quot;American Graffiti&quot;?",
    correct_answer: "George Lucas",
    incorrect_answers: [
      "Ron Howard",
      "Francis Ford Coppola",
      "Steven Spielberg",
    ],
  },
];
