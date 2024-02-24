import { QuizCard } from "@components/QuizCards";
import { useQuizStore } from "@store/quizStore";

export const Quiz = () => {
  const { userAnswerList, setUserAnswer, quizList } = useQuizStore();
  const currentQuiz = quizList[userAnswerList.length];

  return (
    <QuizCard
      quiz={currentQuiz}
      total={quizList.length}
      current={userAnswerList.length}
      handleNextButton={(answer) => {
        setUserAnswer(answer);
      }}
    />
  );
};
