import { Quiz } from "../../model/quiz";
import { shuffleArray } from "../../utils/shuffleArray";

interface Props {
  quiz: Quiz;
}

export const QuizCard = ({ quiz }: Props) => {
  const { question, correct_answer, incorrect_answers } = quiz;

  const randomAnswers = shuffleArray([...incorrect_answers, correct_answer]);

  return (
    <article>
      <h2>{question}</h2>
      <div>
        {randomAnswers.map((answer) => (
          <button type="button" key={answer}>
            {answer}
          </button>
        ))}
      </div>
    </article>
  );
};
