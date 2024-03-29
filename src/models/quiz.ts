export const DEFAULT_AMOUNT = 5;

export type QuizPayload = {
  amount: number;
};

export type Quiz = {
  type: "multiple";
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type ShuffledQuiz = Quiz & {
  shuffledAnswers: string[];
};

export type QuizResponse = {
  response_code: number;
  results: Quiz[];
};
