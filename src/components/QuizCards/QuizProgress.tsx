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
        <span className="sr-only">진행상황:</span>
        {current + 1} Of {total}
      </span>

      <div className="flex gap-2">
        {correctAnswerList.map((correctAnswer, i) => {
          const userAnswer = userAnswerList[i];

          return (
            <div
              key={correctAnswer}
              className={`h-1 ${determineProgressIndicatorColor(userAnswer, correctAnswer, i === current)}`}
              style={{
                width: `${(1 / total) * 100}%`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
