export type QuizType = "multiple" | "boolean";

export type QuizPayload = {
  amount: number;
  type: QuizType;
};

export type Quiz = {
  type: QuizType;
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type QuizResponse = {
  response_code: number;
  results: Quiz[];
};
