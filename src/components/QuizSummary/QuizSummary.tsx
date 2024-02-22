import { calculateCorrectAnswers, calculateTimeDistance } from "./utils";

type Props = {
  correctAnswerList: string[];
  userAnswerList: string[];
  startDate: string | null;
  endDate: string | null;
};

export const QuizSummary = ({
  correctAnswerList,
  userAnswerList,
  startDate,
  endDate,
}: Props) => {
  const dateDistanceText =
    startDate && endDate ? calculateTimeDistance(startDate, endDate) : "-";

  const numberOfCorrectAnswers = calculateCorrectAnswers(
    correctAnswerList,
    userAnswerList
  );
  const numberOfIncorrectAnswers =
    correctAnswerList.length - numberOfCorrectAnswers;

  return (
    <article>
      <span>소요된 시간: {dateDistanceText}</span>
      <span>정답 개수: {numberOfCorrectAnswers}</span>
      <span>오답 수: {numberOfIncorrectAnswers}</span>
    </article>
  );
};
