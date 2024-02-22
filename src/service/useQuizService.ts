import { useSuspenseQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Quiz, QuizPayload, QuizResponse } from "../model/quiz";
import { useQuizStore } from "../store/quizStore";
import { shuffleArray } from "../utils/shuffleArray";
import { queryOptions } from "./queries";

export const useQuizListQuery = (payload: QuizPayload = { amount: 3 }) => {
  const response = useSuspenseQuery<QuizResponse, Error, Quiz[]>(
    queryOptions.quizList(payload)
  );

  /**
   * TanStack Query v5에서 onSuccess, onError, onSettled를 지원하지 않습니다.
   * 따라서 useEffect를 사용하여 구현했습니다.
   *
   * 자세한 내용은 아래 문서를 참고해주세요:
   * Callbacks on useQuery (and QueryObserver) have been removed
   * @see https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-v5#callbacks-on-usequery-and-queryobserver-have-been-removed
   */
  const { setQuizList } = useQuizStore();
  useEffect(() => {
    if (!response.data) return;

    const shuffledQuizzes = response.data.map((quiz) => ({
      ...quiz,
      shuffledAnswers: shuffleArray([
        quiz.correct_answer,
        ...quiz.incorrect_answers,
      ]),
    }));

    setQuizList(shuffledQuizzes);
  }, [response.data, setQuizList]);

  return response;
};
