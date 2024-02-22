import { useEffect, useState } from "react";
import { Quiz } from "../../model/quiz";
import { shuffleArray } from "../../utils/shuffleArray";

interface Props {
  quiz: Quiz;
  handleNextButton: (userAnswer: string) => void;
}

export const QuizCard = ({ quiz, handleNextButton }: Props) => {
  const { question, correct_answer, incorrect_answers } = quiz;
  const [userAnswer, setUserAnswer] = useState<string>();
  const [randomAnswers, setRandomAnswers] = useState(() =>
    shuffleArray([...incorrect_answers, correct_answer])
  );

  useEffect(() => {
    setRandomAnswers([...incorrect_answers, correct_answer]);
  }, [correct_answer, incorrect_answers]);

  return (
    <article>
      <h2>{question}</h2>

      <div>
        {randomAnswers.map((answer) => (
          <button
            type="button"
            key={answer}
            onClick={() => setUserAnswer(answer)}
            disabled={!!userAnswer}
            // TODO: 임시
            // style={{ background: answer === correct_answer ? "red" : "" }}
          >
            {answer}
          </button>
        ))}
      </div>

      {userAnswer && (
        <div>
          <span>
            {userAnswer === correct_answer && "맞았습니다"}
            {userAnswer !== correct_answer && "틀렸습니다"}
          </span>
          <button
            type="button"
            onClick={() => {
              handleNextButton(userAnswer);
              setUserAnswer(undefined);
            }}
          >
            다음 문항
          </button>
        </div>
      )}
    </article>
  );
};
