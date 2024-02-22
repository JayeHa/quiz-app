import { useState } from "react";
import { QuizCard } from "../components/QuizCard/QuizCard";
import { useFetchQuizzes } from "../hooks/quizzes";

export const QuizPage = () => {
  const { data: quizzes } = useFetchQuizzes();
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const currentQuiz = quizzes[userAnswers.length];

  return (
    <div>
      <QuizCard
        quiz={currentQuiz}
        isLastQuiz={userAnswers.length >= quizzes.length - 1}
        handleNextButton={(answer) => {
          setUserAnswers((prev) => [...prev, answer]);
        }}
      />
    </div>
  );
};
