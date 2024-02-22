import { QuizSummary } from "../components/QuizSummary/QuizSummary";
import { useQuizStore } from "../store/quizStore";

export const ResultPage = () => {
  const { userAnswerList, quizList, startDate, endDate } = useQuizStore();

  return (
    <div>
      <QuizSummary
        correctAnswerList={quizList.map(({ correct_answer }) => correct_answer)}
        userAnswerList={userAnswerList}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};
