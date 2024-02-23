import { QuizCard } from "@components/QuizCards";
import { useQuizListQuery } from "@service/useQuizService";
import { useQuizStore } from "@store/quizStore";

export const QuizPage = () => {
  useQuizListQuery();
  const { userAnswerList, setUserAnswer, quizList } = useQuizStore();
  const currentQuiz = quizList[userAnswerList.length];

  return (
    <div>
      <QuizCard
        quiz={currentQuiz}
        total={quizList.length}
        current={userAnswerList.length}
        handleNextButton={(answer) => {
          setUserAnswer(answer);
        }}
      />
    </div>
  );
};
