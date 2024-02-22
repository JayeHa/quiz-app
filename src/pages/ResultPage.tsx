import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { QuizSummary } from "../components/QuizSummary/QuizSummary";
import { useQuizStore } from "../store/quizStore";

export const ResultPage = () => {
  const { userAnswerList, quizList, startDate, endDate } = useQuizStore();
  const navigate = useNavigate();

  return (
    <div>
      <QuizSummary
        correctAnswerList={quizList.map(({ correct_answer }) => correct_answer)}
        userAnswerList={userAnswerList}
        startDate={startDate}
        endDate={endDate}
      />
      <Button onClick={() => navigate("/review")}>오답노트 보러가기</Button>
    </div>
  );
};
