import { ShuffledQuiz } from "@model/quiz";
import { kstFormat } from "@utils/date";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface QuizState {
  quizList: ShuffledQuiz[];
  startDate: string | null;
  endDate: string | null;
  userAnswerList: string[];
  setQuizList: (quizList: ShuffledQuiz[], startDate?: Date) => void;
  setUserAnswer: (answer: string) => void;
  setEndDate: (endDate?: Date) => void;
}

export const useQuizStore = create(
  persist<QuizState>(
    (set, get) => ({
      quizList: [],
      startDate: null,
      endDate: null,
      userAnswerList: [],
      setQuizList: (quizList, startDate = new Date()) =>
        set({
          quizList,
          startDate: kstFormat(startDate),
          endDate: null,
          userAnswerList: [],
        }),
      setUserAnswer: (answer) =>
        set({ userAnswerList: [...get().userAnswerList, answer] }),
      setEndDate: (endDate = new Date()) =>
        set({ endDate: kstFormat(endDate) }),
    }),
    {
      name: "quiz-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
