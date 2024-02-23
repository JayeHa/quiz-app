import { Quiz, QuizPayload, QuizResponse } from "@models/quiz";
import { UseSuspenseQueryOptions } from "@tanstack/react-query";
import { QuizService } from "./quizService";

const quizKeys = {
  all: ["quiz"] as const,
  lists: (payload: QuizPayload) => [...quizKeys.all, "list", payload] as const,
};

export const queryOptions = {
  quizList: (
    payload: QuizPayload,
  ): UseSuspenseQueryOptions<QuizResponse, Error, Quiz[]> => {
    return {
      queryKey: quizKeys.lists(payload),
      queryFn: () => QuizService.quizList(payload),
      select: (data) => data.results,
      staleTime: Infinity,
    };
  },
};
