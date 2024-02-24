import { ShuffledQuiz } from "@models/quiz";

export const EMPTY_SHUFFLED_QUIZ: ShuffledQuiz = {
  type: "multiple",
  difficulty: "easy",
  category: "",
  question: "",
  correct_answer: "",
  incorrect_answers: [],
  shuffledAnswers: [],
};

export const SAMPLE_SHUFFLED_QUIZ_LIST: ShuffledQuiz[] = [
  {
    type: "multiple",
    difficulty: "easy",
    category: "문화",
    question: "세계에서 가장 많이 사용되는 언어는 무엇인가?",
    correct_answer: "영어",
    incorrect_answers: ["중국어", "스페인어", "아랍어"],
    shuffledAnswers: ["중국어", "스페인어", "아랍어", "영어"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "천문학",
    question: "태양계에서 가장 큰 행성은?",
    correct_answer: "목성",
    incorrect_answers: ["토성", "천왕성", "지구"],
    shuffledAnswers: ["천왕성", "목성", "토성", "지구"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "엔터테인먼트",
    question: "'심슨 가족'에서 심슨 가족의 개 이름은?",
    correct_answer: "산타의 작은 도우미",
    incorrect_answers: ["맥스", "루디", "버디"],
    shuffledAnswers: ["맥스", "버디", "루디", "산타의 작은 도우미"],
  },
  {
    type: "multiple",
    difficulty: "medium",
    category: "기술",
    question: "애플의 공동 창업자는 스티브 잡스와 누구인가?",
    correct_answer: "스티브 워즈니악",
    incorrect_answers: ["론 웨인", "마이클 델", "빌 게이츠"],
    shuffledAnswers: ["론 웨인", "빌 게이츠", "마이클 델", "스티브 워즈니악"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "패션",
    question: "티셔츠에서 'T'는 무엇을 의미하는가?",
    correct_answer: "모양",
    incorrect_answers: ["질감", "트렌드", "타입"],
    shuffledAnswers: ["모양", "트렌드", "질감", "타입"],
  },
];
