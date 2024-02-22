import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../../model/quiz";
import { EMPTY_QUIZ } from "../../tests/fakeQuizzes";
import { Button } from "../Button";
import { Loading } from "../Loading";
import { useRandomAnswers } from "./QuizCard.hooks";

interface Props {
  quiz: Quiz | null;
  handleNextButton: (userAnswer: string) => void;
  isLastQuiz?: boolean;
}

export const QuizCard = ({ quiz, handleNextButton, isLastQuiz }: Props) => {
  const { question, correct_answer, incorrect_answers } = quiz ?? EMPTY_QUIZ;

  const navigate = useNavigate();
  const randomAnswers = useRandomAnswers(correct_answer, incorrect_answers);
  const [userAnswer, setUserAnswer] = useState<string | null>(null);

  if (!quiz) return <Loading />;

  return (
    <article>
      <h2>{question}</h2>

      <div>
        {randomAnswers.map((answer) => (
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
