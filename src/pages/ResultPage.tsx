import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { QuizSummary } from "../components/QuizSummary/QuizSummary";
import { useQuizStore } from "../store/quizStore";

export const ResultPage = () => {
  const { userAnswerList, quizList, startDate, endDate } = useQuizStore();
  const navigate = useNavigate();

  return (
    <>
      <QuizSummary
        correctAnswerList={quizList.map(({ correct_answer }) => correct_answer)}
        userAnswerList={userAnswerList}
        startDate={startDate}
        endDate={endDate}
      />

      <div className="mt-2 flex gap-2 md:mt-10">
        <Button
          className="w-1/2"
          variant="default"
          onClick={() => navigate("/review")}
        >
          홈으로
        </Button>
        <Button
          className="w-full"
          variant="outlined"
          onClick={() => navigate("/review")}
        >
          오답노트 보러가기
        </Button>
      </div>
    </>
  );
};
