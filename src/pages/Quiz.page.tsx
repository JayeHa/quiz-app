import { useState } from "react";
import { QuizCard } from "../components/QuizCard/QuizCard";
import { useFetchQuizzes } from "../hooks/quizzes";

export const Quiz = () => {
  const { data: quizzes } = useFetchQuizzes();
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const currentQuiz = quizzes[userAnswers.length];

  return (
    <div>
      <QuizCard
        quiz={currentQuiz}
        handleNextButton={(answer) => {
          setUserAnswers((prev) => [...prev, answer]);
        }}
      />
    </div>
  );
};
