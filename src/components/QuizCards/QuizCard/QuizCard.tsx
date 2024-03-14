import { BottomBar } from "@components/common/BottomBar/BottomBar";
import { Button, LinkButton } from "@components/common/Buttons";
import { EmptyView } from "@components/common/EmptyView";
import { Text } from "@components/common/Text";
import { ShuffledQuiz } from "@models/quiz";
import { useState } from "react";
import { QuestionBox } from "../QuestionBox";
import { QuizProgress } from "./QuizProgress";
import { ResultText } from "./ResultText";

interface Props {
  quiz: ShuffledQuiz | null;
  handleNextButton: (userAnswer: string) => void;
  handleResultButton: (userAnswer: string) => void;
  total: number;
  current: number;
}

export const QuizCard = ({
  quiz,
  total,
  current,
  handleNextButton,
  handleResultButton,
}: Props) => {
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const isLastQuiz = current >= total - 1;

  if (!quiz) return <EmptyView title="퀴즈가 존재하지 않습니다." />;

  const { question, correct_answer, shuffledAnswers, category, difficulty } =
    quiz;

  return (
    <article className="flex flex-col gap-8">
      <QuizProgress />
      <QuestionBox
        index={current}
        question={question}
        category={category}
        difficulty={difficulty}
      />

      <div className="flex flex-col gap-4">
        {shuffledAnswers.map((answer) => {
          const isUserAnswer = answer === userAnswer;
          return (
            <Button
              key={answer}
              disabled={!!userAnswer}
              onClick={() => setUserAnswer(answer)}
              color={isUserAnswer ? "red" : "gray"}
              variant={isUserAnswer ? "filled" : "outlined"}
            >
              <Text>{answer}</Text>
            </Button>
          );
        })}
      </div>

      <div className="text-right text-neutral-200 md:mb-7">
        정답: <Text>{correct_answer}</Text>
      </div>

      {userAnswer && (
        <BottomBar isSlideUp>
          <div className="flex items-center justify-between">
            <ResultText
              isCorrect={userAnswer === correct_answer}
              correctText="맞았습니다 🟢"
              incorrectText="틀렸습니다 ❌"
            />

            {!isLastQuiz && (
              <Button
                className="w-1/2 max-w-[300px]"
                onClick={() => {
                  handleNextButton(userAnswer);
                  setUserAnswer(null);
                }}
              >
                다음 문항
              </Button>
            )}

            {isLastQuiz && (
              <LinkButton
                className="w-1/2 max-w-[300px]"
                to="result"
                onClick={() => {
                  handleResultButton(userAnswer);
                  setUserAnswer(null);
                }}
              >
                결과 보기
              </LinkButton>
            )}
          </div>
        </BottomBar>
      )}
    </article>
  );
};
