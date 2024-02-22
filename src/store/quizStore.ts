import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Quiz } from "../model/quiz";
import { kstFormat } from "../utils/date";

interface QuizState {
  quizList: Quiz[];
  startDate: string | null;
  userAnswerList: string[];
  setQuizList: (quizList: Quiz[], startDate?: Date) => void;
  setUserAnswer: (answer: string) => void;
}

export const useQuizStore = create(
  persist<QuizState>(
    (set, get) => ({
      quizList: [],
      startDate: null,
      userAnswerList: [],
      setQuizList: (quizList, startDate = new Date()) =>
        set({
          quizList,
          startDate: kstFormat(startDate),
          userAnswerList: [],
        }),
      setUserAnswer: (answer) =>
        set({ userAnswerList: [...get().userAnswerList, answer] }),
    }),
    {
      name: "quiz-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
