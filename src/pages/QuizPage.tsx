import { QuizCard } from "../components/QuizCard/QuizCard";
import { useQuizListQuery } from "../service/useQuizService";
import { useQuizStore } from "../store/quizStore";

export const QuizPage = () => {
  useQuizListQuery();
  const { userAnswerList, setUserAnswer, quizList } = useQuizStore();
  const currentQuiz = quizList[userAnswerList.length];

  return (
    <div>
      <QuizCard
        quiz={currentQuiz}
        isLastQuiz={userAnswerList.length >= quizList.length - 1}
        handleNextButton={(answer) => {
          setUserAnswer(answer);
        }}
      />
    </div>
  );
};
