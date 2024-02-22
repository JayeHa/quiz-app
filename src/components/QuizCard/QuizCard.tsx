import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShuffledQuiz } from "../../model/quiz";
import { useQuizStore } from "../../store/quizStore";
import { EMPTY_SHUFFLED_QUIZ } from "../../tests/fakeQuizzes";
import { Button } from "../Button";
import { Loading } from "../Loading";
import { Text } from "../Text";

interface Props {
  quiz: ShuffledQuiz | null;
  handleNextButton: (userAnswer: string) => void;
  isLastQuiz?: boolean;
}

export const QuizCard = ({ quiz, handleNextButton, isLastQuiz }: Props) => {
  const { question, correct_answer, shuffledAnswers, category, difficulty } =
    quiz ?? EMPTY_SHUFFLED_QUIZ;

  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const { setEndDate } = useQuizStore();

  if (!quiz) return <Loading />;

  return (
    <article className="flex flex-col gap-8">
      <div>
        <Text className="text-lg font-semibold text-neutral-500">
          {category}
        </Text>
        <div className="flex items-center">
          <h2 className="text-2xl font-bold">
            <Text className="text-red text-xl font-semibold">{`[${difficulty}]`}</Text>{" "}
            <Text>{question}</Text>
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {shuffledAnswers.map((answer) => (
          <Button
            key={answer}
            variant={answer === userAnswer ? "filled" : "default"}
            onClick={() => setUserAnswer(answer)}
            disabled={!!userAnswer}
          >
            <Text>{answer}</Text>
          </Button>
        ))}
      </div>

      {userAnswer && (
        <div className="flex items-center justify-between">
          <span
            className={`text-2xl font-bold ${userAnswer === correct_answer ? "text-green" : "text-red"}`}
          >
            {userAnswer === correct_answer ? "맞았습니다 🟢" : "틀렸습니다 ❌"}
          </span>

          <Button
            variant="filled"
            className="w-1/2 max-w-[300px]"
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
