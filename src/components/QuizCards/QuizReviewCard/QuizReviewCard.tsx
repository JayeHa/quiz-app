import { EMPTY_SHUFFLED_QUIZ } from "@/data/quizSampleData";

import { Button, ButtonColor } from "@components/common/Buttons";
import { Text } from "@components/common/Text";
import { ShuffledQuiz } from "@models/quiz";
import { QuestionBox } from "../QuestionBox";

function determineAnswerButtonColor(
  answer: string,
  correctAnswer: string,
  userAnswer: string
): ButtonColor {
  const CORRECT = "green";
  const INCORRECT = "red";
  const NORMAL = "gray";

  if (answer === correctAnswer) return CORRECT;
  if (answer === userAnswer && userAnswer !== correctAnswer) return INCORRECT;
  return NORMAL;
}

interface Props {
  quiz: ShuffledQuiz;
  userAnswer: string;
  index: number;
}

export const QuizReviewCard = ({ quiz, userAnswer, index }: Props) => {
  const { question, correct_answer, shuffledAnswers, category, difficulty } =
    quiz ?? EMPTY_SHUFFLED_QUIZ;

  return (
    <article className="flex flex-col gap-6">
      <QuestionBox
        index={index}
        question={question}
        category={category}
        difficulty={difficulty}
        prefix={userAnswer === correct_answer ? "✅" : "❌"}
      />

      <div className="flex flex-col gap-1 md:flex-row">
        {shuffledAnswers.map((answer) => (
          <Button
            key={answer}
            disabled
            color={determineAnswerButtonColor(
              answer,
              correct_answer,
              userAnswer
            )}
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

      <div className="flex flex-col gap-1 text-2xl text-gray">
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
