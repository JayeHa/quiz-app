import { SAMPLE_SHUFFLED_QUIZ_LIST } from "@/data/quizSampleData";
import { Button } from "@components/Buttons";
import { Heading } from "@components/Heading";
import { useQuizStore } from "@store/quizStore";
import { ReactElement, useState } from "react";
import { FallbackProps } from "react-error-boundary";

type Props = {
  Component: ReactElement;
} & FallbackProps;

export const QuizFallbackWithSample = ({
  resetErrorBoundary,
  Component,
}: Props) => {
  const { setQuizList } = useQuizStore();

  const [viewSample, setViewSample] = useState(false);
  const handleSampleDataButtonClick = () => {
    setQuizList(SAMPLE_SHUFFLED_QUIZ_LIST);
    setViewSample(true);
  };

  if (viewSample) {
    return Component;
  }

  return (
    <div className="mt-14 flex flex-col items-center gap-4 text-center">
      <div className="mb-4 text-8xl">❗️</div>
      <Heading level={2}>네트워크 에러가 발생했습니다.</Heading>

      <div className="flex w-full max-w-96 flex-col gap-3">
        <Button variant="outlined" onClick={resetErrorBoundary}>
          재시도
        </Button>
        <Button onClick={handleSampleDataButtonClick}>
          샘플 데이터로 계속 진행하기
        </Button>
      </div>
    </div>
  );
};
