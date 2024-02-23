import { Button } from "@components/Button";
import { Heading } from "@components/Heading";
import { QuizSummary } from "@components/QuizSummary/QuizSummary";
import { useQuizStore } from "@store/quizStore";
import { useNavigate } from "react-router-dom";

export const ResultPage = () => {
  const { userAnswerList, quizList, startDate, endDate } = useQuizStore();
  const navigate = useNavigate();

  return (
    <>
      <Heading level={2}>퀴즈 결과</Heading>

      <QuizSummary
        correctAnswerList={quizList.map(({ correct_answer }) => correct_answer)}
        userAnswerList={userAnswerList}
        startDate={startDate}
        endDate={endDate}
      />

      <footer className="mt-2 flex gap-2 md:mt-10">
        <Button
          className="w-1/2"
          variant="default"
          onClick={() => navigate("/")}
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
      </footer>
    </>
  );
};
