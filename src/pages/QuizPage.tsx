import { useState } from "react";
import { QuizCard } from "../components/QuizCard/QuizCard";
import { useQuizListQuery } from "../service/useQuizService";

export const QuizPage = () => {
  const { data: quizList } = useQuizListQuery();
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const currentQuiz = quizList[userAnswers.length];

  return (
    <div>
      <QuizCard
        quiz={currentQuiz}
        isLastQuiz={userAnswers.length >= quizList.length - 1}
        handleNextButton={(answer) => {
          setUserAnswers((prev) => [...prev, answer]);
        }}
      />
    </div>
  );
};
