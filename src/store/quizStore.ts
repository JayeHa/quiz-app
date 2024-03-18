import { ShuffledQuiz } from "@models/quiz";
import { kstFormat } from "@utils/date";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const QUIZ_STORAGE_NAME = "quiz-storage";

export interface QuizState {
  quizList: ShuffledQuiz[];
  userAnswerList: string[];
  startDate: string | null;
  endDate: string | null;
  initQuizList: (quizList: ShuffledQuiz[], startDate?: Date) => void;
  addUserAnswer: (answer: string) => void;
  setEndDate: (endDate?: Date) => void;
}

export const useQuizStore = create(
  persist<QuizState>(
    (set) => ({
      quizList: [],
      userAnswerList: [],
      startDate: null,
      endDate: null,
      initQuizList: (quizList, startDate = new Date()) =>
        set({
          quizList,
          startDate: kstFormat(startDate),
          endDate: null,
          userAnswerList: [],
        }),
      addUserAnswer: (answer) => {
        set((state) => ({
          userAnswerList: [...state.userAnswerList, answer],
        }));
      },
      setEndDate: (endDate = new Date()) =>
        set({ endDate: kstFormat(endDate) }),
    }),
    {
      name: QUIZ_STORAGE_NAME,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
