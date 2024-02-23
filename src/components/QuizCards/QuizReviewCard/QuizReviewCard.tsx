import { Button, ButtonColor } from "@components/Button";
import { Heading } from "@components/Heading";
import { Text } from "@components/Text";
import { ShuffledQuiz } from "@model/quiz";
import { EMPTY_SHUFFLED_QUIZ } from "@tests/fakeQuizzes";

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
  ): ButtonColor => {
    if (answer === correctAnswer) return "green";
    if (answer === userAnswer) return "red";
    return "gray";
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
            color={getButtonColor(answer, correct_answer, userAnswer)}
            variant={
              answer === correct_answer || answer === userAnswer
                ? "filled"
                : "outlined"
            }
            style={{ opacity: "100%" }}
          >
            <Text>{answer}</Text>
          </Button>
        ))}
      </div>

      <div className="text-gray flex flex-col gap-1 text-2xl ">
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
