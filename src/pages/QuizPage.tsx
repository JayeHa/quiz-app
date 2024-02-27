import { withAsyncBoundary } from "@/hocs/withAsyncBoundary";
import { Quiz } from "@components/Quiz/Quiz";
import { SkeletonQuizCard } from "@components/QuizCards/QuizCard/QuizCard.skeleton";
import { QuizFallbackWithSample } from "@components/QuizFallbackWithSample/QuizFallbackWithSample";
import { useQuizListQuery } from "@service/useQuizService";

export const QuizPage = withAsyncBoundary(
  () => {
    useQuizListQuery();
    return <Quiz />;
  },
  {
    pendingFallback: <SkeletonQuizCard />,
    rejectedFallback: {
      fallbackRender: ({ error, resetErrorBoundary }) => (
        <QuizFallbackWithSample
          error={error}
          resetErrorBoundary={resetErrorBoundary}
          Component={<Quiz />}
        />
      ),
    },
  },
);
