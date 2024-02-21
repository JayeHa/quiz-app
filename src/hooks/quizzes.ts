import { useQuery } from "react-query";
import { getQuizzes } from "../apis/quiz";
import { QuizPayload } from "../model/quiz";

const quizKeys = {
  all: ["quizzes"] as const,
  lists: (payload: QuizPayload) => [...quizKeys.all, "list", payload] as const,
};

export const useFetchQuizzes = (
  payload: QuizPayload = { amount: 10, type: "multiple" }
) =>
  useQuery({
    queryKey: quizKeys.lists(payload),
    queryFn: () => getQuizzes(payload),
    select: (data) => data.results,
  });
