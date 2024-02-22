import { QuizReviewCard } from "../components/QuizReviewCard/QuizReviewCard";
import { useQuizStore } from "../store/quizStore";

export const ReviewPage = () => {
  const { quizList, userAnswerList } = useQuizStore();

  return (
    <div>
      {quizList.map((quiz, i) => (
        <QuizReviewCard
          key={quiz.question}
          quiz={quiz}
          userAnswer={userAnswerList[i]}
        />
      ))}
    </div>
  );
};
