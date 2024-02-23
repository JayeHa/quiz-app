import { ShuffledQuiz } from "../../../model/quiz";
import { EMPTY_SHUFFLED_QUIZ } from "../../../tests/fakeQuizzes";
import { Button } from "../../Button";
import { Heading } from "../../Heading";
import { Text } from "../../Text";

interface Props {
  quiz: ShuffledQuiz;
  userAnswer: string;
  index: number;
}

export const QuizReviewCard = ({ quiz, userAnswer, index }: Props) => {
  const { question, correct_answer, shuffledAnswers, category, difficulty } =
    quiz ?? EMPTY_SHUFFLED_QUIZ;

  const getButtonColor = (
    answer: string,
    correctAnswer: string,
    userAnswer: string,
  ) => {
    if (answer === correctAnswer) return "bg-green disabled:opacity-100";
    if (answer === userAnswer) return "bg-red disabled:opacity-100";
    return "";
  };

  return (
    <article className="flex flex-col gap-6">
      <div>
        <Text className="text-lg font-semibold text-neutral-500">
          {category}
        </Text>
        <Heading level={3} size="md">
          {userAnswer === correct_answer ? "✅" : "❌"} {index + 1}.{" "}
          <Text>{question}</Text>{" "}
          <Text className="text-xl font-semibold text-neutral-500">{`[${difficulty}]`}</Text>
        </Heading>
      </div>

      <div className="flex flex-col gap-1 md:flex-row">
        {shuffledAnswers.map((answer) => (
          <Button
            key={answer}
            disabled
            variant={
              answer === correct_answer || answer === userAnswer
                ? "filled"
                : "default"
            }
            className={getButtonColor(answer, correct_answer, userAnswer)}
          >
            <Text>{answer}</Text>
          </Button>
        ))}
      </div>

      <div className="text-primary flex flex-col gap-1 text-2xl ">
        <span>
          선택한 답: <Text className="font-bold">{userAnswer}</Text>
        </span>
        <span>
          정답: <Text className="font-bold">{correct_answer}</Text>
        </span>
      </div>
    </article>
  );
};
