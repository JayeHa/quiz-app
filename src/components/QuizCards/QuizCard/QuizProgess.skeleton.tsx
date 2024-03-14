import Skeleton from "@components/common/Skeleton";

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
