import Skeleton from "@components/common/Skeleton";
import { SkeletonQuizProgress } from "./QuizProgess.skeleton";

export const SkeletonQuizCard = () => {
  return (
    <Skeleton.Container>
      <div className="flex flex-col gap-8 bg-white">
        <SkeletonQuizProgress />

        <div className="h-20 rounded-lg bg-skeleton" />

        <Skeleton.Grid rows={4} itemHeight={54} gap={16} />
      </div>
    </Skeleton.Container>
  );
};
