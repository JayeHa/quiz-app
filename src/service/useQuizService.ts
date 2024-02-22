import { useSuspenseQuery } from "@tanstack/react-query";
import { Quiz, QuizPayload, QuizResponse } from "../model/quiz";
import { queryOptions } from "./queries";

export const useQuizListQuery = (payload: QuizPayload = { amount: 5 }) => {
  return useSuspenseQuery<QuizResponse, Error, Quiz[]>(
    queryOptions.quizList(payload)
  );
};
