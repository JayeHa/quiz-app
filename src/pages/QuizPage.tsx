import { withSuspense } from "@/hocs/withSuspense";
import { QuizCard } from "@components/QuizCards";
import { SkeletonQuizCard } from "@components/QuizCards/QuizCard/QuizCard.skeleton";
import { useQuizListQuery } from "@service/useQuizService";
import { useQuizStore } from "@store/quizStore";

export const QuizPage = withSuspense(() => {
  useQuizListQuery();

  const { quizList, userAnswerList, addUserAnswer, setEndDate } =
    useQuizStore();
  const currentQuiz = quizList[userAnswerList.length];

  return (
    <QuizCard
      quiz={currentQuiz}
      total={quizList.length}
      current={userAnswerList.length}
      handleNextButton={(answer) => {
        addUserAnswer(answer);
      }}
      handleResultButton={(answer) => {
        addUserAnswer(answer);
        setEndDate();
      }}
    />
  );
}, SkeletonQuizCard);
