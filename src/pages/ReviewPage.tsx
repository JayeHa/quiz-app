import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { QuizReviewCard } from "../components/QuizReviewCard/QuizReviewCard";
import { useQuizStore } from "../store/quizStore";

export const ReviewPage = () => {
  const { quizList, userAnswerList } = useQuizStore();
  const navigate = useNavigate();

  return (
    <>
      <Heading level={2}>오답노트</Heading>

      <div className="flex flex-col gap-16">
        {quizList.map((quiz, i) => (
          <QuizReviewCard
            index={i}
            key={quiz.question}
            quiz={quiz}
            userAnswer={userAnswerList[i]}
          />
        ))}
      </div>

      <footer className="mt-16 flex gap-2">
        <Button
          className="w-1/2"
          variant="default"
          onClick={() => navigate("/result")}
        >
          뒤로
        </Button>
        <Button
          className="w-full"
          variant="outlined"
          onClick={() => navigate("/")}
        >
          홈으로
        </Button>
      </footer>
    </>
  );
};
