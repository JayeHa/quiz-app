import { ShuffledQuiz } from "../../model/quiz";
import { EMPTY_SHUFFLED_QUIZ } from "../../tests/fakeQuizzes";
import { Button } from "../Button";

interface Props {
  quiz: ShuffledQuiz;
  userAnswer: string;
}

export const QuizReviewCard = ({ quiz, userAnswer }: Props) => {
  const { question, correct_answer, shuffledAnswers } =
    quiz ?? EMPTY_SHUFFLED_QUIZ;

  const getButtonColor = (
    answer: string,
    correctAnswer: string,
    userAnswer: string
  ) => {
    if (answer === correctAnswer) return "blue";
    if (answer === userAnswer) return "red";
    return "";
  };

  return (
    <article>
      <h2>{question}</h2>

      <div>
        {shuffledAnswers.map((answer) => (
          <Button
            key={answer}
            disabled
            style={{
              background: getButtonColor(answer, correct_answer, userAnswer),
            }}
          >
            {answer}
          </Button>
        ))}
      </div>

      <div>
        <span>선택한 답: {userAnswer}</span>
        <span>정답: {correct_answer}</span>
      </div>
    </article>
  );
};
