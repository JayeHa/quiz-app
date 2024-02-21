import { QuizCard } from "../components/QuizCard/QuizCard";
import { useFetchQuizzes } from "../hooks/quizzes";

export const Quiz = () => {
  const { data: quizzes } = useFetchQuizzes();

  return (
    <div>
      <QuizCard quiz={quizzes[0]} />
    </div>
  );
};
