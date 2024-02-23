import { DEFAULT_AMOUNT, Quiz, QuizPayload, QuizResponse } from "@model/quiz";
import { useQuizStore } from "@store/quizStore";
import { useSuspenseQuery } from "@tanstack/react-query";
import { shuffleArray } from "@utils/shuffleArray";
import { useEffect } from "react";
import { queryOptions } from "./queries";

export const useQuizListQuery = (
  payload: QuizPayload = { amount: DEFAULT_AMOUNT },
) => {
  const { data: quizList } = useSuspenseQuery<QuizResponse, Error, Quiz[]>(
    queryOptions.quizList(payload),
  );

  /**
   * TanStack Query v5에서
   * onSuccess, onError, onSettled를 지원하지 않아 useEffect를 사용하여 구현했습니다.
   *
   * 자세한 내용은 아래 문서를 참고해주세요:
   * Callbacks on useQuery (and QueryObserver) have been removed
   * @see https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-v5#callbacks-on-usequery-and-queryobserver-have-been-removed
   */
  const { setQuizList } = useQuizStore();
  useEffect(() => {
    if (!quizList) return;

    const shuffledQuizzes = quizList.map((quiz) => ({
      ...quiz,
      shuffledAnswers: shuffleArray([
        quiz.correct_answer,
        ...quiz.incorrect_answers,
      ]),
    }));

    setQuizList(shuffledQuizzes);
  }, [quizList, setQuizList]);
};
