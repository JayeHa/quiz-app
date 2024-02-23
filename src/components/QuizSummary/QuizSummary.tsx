import { Heading } from "../Heading";
import { QuizResultChart } from "../QuizResultChart/QuizResultChart";
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
    userAnswerList,
  );
  const numberOfIncorrectAnswers =
    correctAnswerList.length - numberOfCorrectAnswers;

  return (
    <article className="flex flex-col justify-around gap-7 md:flex-row">
      <Heading level={3} size="invisible">
        요약 정보
      </Heading>
      <div className="flex w-full flex-col gap-2 md:w-1/2">
        <p className="mb-4 break-keep text-2xl">
          당신은 <strong>{dateDistanceText}의 시간동안</strong> 퀴즈에 참여하여{" "}
          {correctAnswerList.length}문제를 풀었습니다. 그 과정에서{" "}
          <strong className="text-green">
            {numberOfCorrectAnswers}개의 문제의 정답
          </strong>
          을 찾았으며,
          <strong className="text-red">
            {numberOfIncorrectAnswers}개의 문제에서는 오답
          </strong>
          을 선택했습니다.
        </p>

        <dl className="border border-black p-4 text-2xl ">
          <div className="mb-1 flex gap-1">
            <dt>소요된 시간:</dt>
            <dd data-testid="dateDistanceText">{dateDistanceText}</dd>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-1">
              <dt>정답 개수:</dt>
              <dd data-testid="correctAnswers">{numberOfCorrectAnswers}개</dd>
            </div>
            <div className="flex gap-1">
              <dt>오답 수:</dt>
              <dd data-testid="incorrectAnswers">
                {numberOfIncorrectAnswers}개
              </dd>
            </div>
          </div>
        </dl>
      </div>

      <QuizResultChart
        numberOfCorrectAnswers={numberOfCorrectAnswers}
        numberOfIncorrectAnswers={numberOfIncorrectAnswers}
      />
    </article>
  );
};
