import { Heading } from "@components/Heading";
import { useQuizStore } from "@store/quizStore";

const determineProgressIndicatorColor = (
  userAnswer: string,
  correctAnswer: string,
  isCurrent: boolean
) => {
  const CURRENT_PROGRESS = "bg-neutral-500";
  const UNANSWERED = "bg-neutral-200";
  const CORRECT = "bg-green";
  const INCORRECT = "bg-red";

  if (isCurrent) return CURRENT_PROGRESS;
  if (!userAnswer) return UNANSWERED;
  return userAnswer === correctAnswer ? CORRECT : INCORRECT;
};

export const QuizProgress = () => {
  const { userAnswerList, quizList } = useQuizStore();
  const correctAnswerList = quizList.map((quiz) => quiz.correct_answer);
  const total = correctAnswerList.length;
  const current = userAnswerList.length;

  return (
    <div>
      <span className="text-lg font-bold text-neutral-400">
        <Heading level={2} size="invisible">
          총 {total}문제 중 {current + 1}번 째 문제
        </Heading>
        <span aria-hidden>
          {current + 1} Of {total}
        </span>
      </span>

      <ol className="flex gap-2">
        {correctAnswerList.map((correctAnswer, i) => {
          const userAnswer = userAnswerList[i];
          const isCurrent = i === current;

          return (
            <li
              key={correctAnswer}
              aria-current={isCurrent}
              className={`h-1 ${determineProgressIndicatorColor(userAnswer, correctAnswer, isCurrent)}`}
              style={{
                width: `${(1 / total) * 100}%`,
              }}
            />
          );
        })}
      </ol>
    </div>
  );
};
