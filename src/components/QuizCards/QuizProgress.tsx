import { useQuizStore } from "@store/quizStore";

export const QuizProgress = () => {
  const { userAnswerList, quizList } = useQuizStore();

  const correctAnswerList = quizList.map((quiz) => quiz.correct_answer);
  const total = correctAnswerList.length;
  const current = userAnswerList.length;

  const getProgressColor = (
    userAnswer: string,
    correctAnswer: string,
    isCurrent: boolean,
  ) => {
    if (isCurrent) return "bg-neutral-500";
    if (!userAnswer) return "bg-neutral-200";
    return userAnswer === correctAnswer ? "bg-green" : "bg-red";
  };

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
              className={`h-1 ${getProgressColor(userAnswer, correctAnswer, i === current)}`}
              style={{
                width: `${(1 / total) * 100}%`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};
