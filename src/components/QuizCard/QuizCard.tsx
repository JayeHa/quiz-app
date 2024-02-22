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
  const randomAnswers = useRandomAnswers(correct_answer, incorrect_answers);
  const [userAnswer, setUserAnswer] = useState<string>();
  const navigate = useNavigate();

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
            {userAnswer === correct_answer && "맞았습니다"}
            {userAnswer !== correct_answer && "틀렸습니다"}
          </span>
          {!isLastQuiz && (
            <Button
              onClick={() => {
                handleNextButton(userAnswer);
                setUserAnswer(undefined);
              }}
            >
              다음 문항
            </Button>
          )}
          {isLastQuiz && (
            <Button
              onClick={() => {
                handleNextButton(userAnswer);
                setUserAnswer(undefined);
                navigate("/result");
              }}
            >
              결과 보기
            </Button>
          )}
        </div>
      )}
    </article>
  );
};
