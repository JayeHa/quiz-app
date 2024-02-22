import { useState } from "react";
import { Quiz } from "../../model/quiz";
import { shuffleArray } from "../../utils/shuffleArray";

interface Props {
  quiz: Quiz;
}

export const QuizCard = ({ quiz }: Props) => {
  const { question, correct_answer, incorrect_answers } = quiz;
  const [isAnswered, setIsAnswered] = useState(false);
  const [randomAnswers] = useState(() =>
    shuffleArray([...incorrect_answers, correct_answer])
  );

  return (
    <article>
      <h2>{question}</h2>

      <div>
        {randomAnswers.map((answer) => (
          <button
            type="button"
            key={answer}
            onClick={() => setIsAnswered(true)}
          >
            {answer}
          </button>
        ))}
      </div>
      {isAnswered && <button type="button">다음 문항</button>}
    </article>
  );
};
