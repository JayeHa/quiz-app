import { useShuffleAndStoreQuizList } from "@/hooks/useShuffledAndStoreQuizList.hooks";
import { DEFAULT_AMOUNT, Quiz, QuizPayload, QuizResponse } from "@models/quiz";
import { useSuspenseQuery } from "@tanstack/react-query";
import { queryOptions } from "./queries";

export const useQuizListQuery = (
  payload: QuizPayload = { amount: DEFAULT_AMOUNT }
) => {
  const { data: quizList, ...response } = useSuspenseQuery<
    QuizResponse,
    Error,
    Quiz[]
  >(queryOptions.quizList(payload));

  /**
   * TanStack Query v5에서는 useQuery에서 onSuccess, onError, onSettled를 지원하지 않습니다.
   * 자세한 내용은 아래 문서를 참고해주세요:
   * Callbacks on useQuery (and QueryObserver) have been removed
   * @see https://tanstack.com/query/latest/docs/framework/react/guides/migrating-to-v5#callbacks-on-usequery-and-queryobserver-have-been-removed
   */
  useShuffleAndStoreQuizList(quizList);

  return response;
};
