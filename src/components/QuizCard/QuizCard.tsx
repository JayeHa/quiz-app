import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShuffledQuiz } from "../../model/quiz";
import { useQuizStore } from "../../store/quizStore";
import { EMPTY_SHUFFLED_QUIZ } from "../../tests/fakeQuizzes";
import { Button } from "../Button";
import { Loading } from "../Loading";

interface Props {
  quiz: ShuffledQuiz | null;
  handleNextButton: (userAnswer: string) => void;
  isLastQuiz?: boolean;
}

export const QuizCard = ({ quiz, handleNextButton, isLastQuiz }: Props) => {
  const { question, correct_answer, shuffledAnswers } =
    quiz ?? EMPTY_SHUFFLED_QUIZ;

  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const { setEndDate } = useQuizStore();

  if (!quiz) return <Loading />;

  return (
    <article>
      <h2>{question}</h2>

      <div>
        {shuffledAnswers.map((answer) => (
          <Button
            key={answer}
            onClick={() => setUserAnswer(answer)}
            disabled={!!userAnswer}
          >
            {answer}
          </Button>
        ))}
      </div>

      {userAnswer && (
        <div>
          <span>
            {userAnswer === correct_answer ? "맞았습니다" : "틀렸습니다"}
          </span>
          <Button
            onClick={() => {
              handleNextButton(userAnswer);
              setUserAnswer(null);
              if (isLastQuiz) {
                navigate("/result");
                setEndDate();
              }
            }}
          >
            {isLastQuiz ? "결과 보기" : "다음 문항"}
          </Button>
        </div>
      )}
    </article>
  );
};
