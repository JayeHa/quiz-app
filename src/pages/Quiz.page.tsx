import { useFetchQuizzes } from "../hooks/quizzes";

export const Quiz = () => {
  const { data: quizzes } = useFetchQuizzes();

  return <div>{quizzes[0].question}</div>;
};
