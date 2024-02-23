import { Button } from "@components/Buttons";
import { Loading } from "@components/Loading";
import { Text } from "@components/Text";
import { ShuffledQuiz } from "@model/quiz";
import { useQuizStore } from "@store/quizStore";
import { EMPTY_SHUFFLED_QUIZ } from "@tests/fakeQuizzes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuestionBox } from "../QuestionBox";
import { QuizProgress } from "../QuizProgress";
import { ResultText } from "./ResultText";

interface Props {
  quiz: ShuffledQuiz | null;
  handleNextButton: (userAnswer: string) => void;
  total: number;
  current: number;
}

export const QuizCard = ({ quiz, handleNextButton, total, current }: Props) => {
  const isLastQuiz = current >= total - 1;
  const { question, correct_answer, shuffledAnswers, category, difficulty } =
    quiz ?? EMPTY_SHUFFLED_QUIZ;

  const navigate = useNavigate();
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const { setEndDate } = useQuizStore();

  if (!quiz) return <Loading />;

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
              color={isUserAnswer ? "red" : "gray"}
              variant={isUserAnswer ? "filled" : "outlined"}
              onClick={() => setUserAnswer(answer)}
              disabled={!!userAnswer}
            >
              <Text>{answer}</Text>
            </Button>
          );
        })}
      </div>

      {userAnswer && (
        <footer className="bottom-bar animate-slide-up md:animate-none">
          <div className="flex items-center justify-between">
            <ResultText
              isCorrect={userAnswer === correct_answer}
              correctText="맞았습니다 🟢"
              incorrectText="틀렸습니다 ❌"
            />

            <Button
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
        </footer>
      )}
    </article>
  );
};
