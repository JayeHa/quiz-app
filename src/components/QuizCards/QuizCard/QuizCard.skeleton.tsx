import Skeleton from "@components/Skeleton";

export const SkeletonQuizProgress = () => {
  return (
    <Skeleton.Container>
      <div className="flex h-8 flex-col gap-1 bg-white">
        <div className="w-14 flex-1 rounded-lg bg-skeleton" />
        <div className="h-1 bg-skeleton" />
      </div>
    </Skeleton.Container>
  );
};

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
