import { Quiz } from "@models/quiz";
import { useQuizStore } from "@store/quizStore";
import { shuffleArray } from "@utils/shuffleArray";
import { useEffect } from "react";

/**
 * 쿼리에서 가져온 퀴즈 목록을 셔플하고 Zustand 스토어에 저장하는 커스텀 훅입니다.
 *
 * @param {Quiz[]} quizList - 쿼리를 통해 가져온 퀴즈 목록
 */
export const useShuffleAndStoreQuizList = (quizList: Quiz[]) => {
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
