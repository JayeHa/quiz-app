import { HTMLAttributes, PropsWithChildren, ReactElement } from "react";

const SkeletonContainer = ({ children }: PropsWithChildren) => {
  return <div className="w-full animate-pulse">{children}</div>;
};

type SkeletonGridProps = {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  children?: ReactElement | ReactElement[];
  rows?: number;
  columns?: number;
  gap?: number;
  itemHeight?: number;
};

const SkeletonGrid = ({
  columns = 1,
  rows = 1,
  gap = 10,
  itemHeight = 100,
  children,
  ...props
}: SkeletonGridProps) => {
  return (
    <div
      className="grid w-full"
      style={{
        gap,
        gridTemplateRows: "auto",
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      }}
    >
      {children ??
        Array.from(Array(columns * rows), (_, index) => (
          <div
            key={index}
            className="rounded-lg bg-skeleton"
            style={{ height: itemHeight }}
            {...props}
          />
        ))}
    </div>
  );
};

const Skeleton = (props: SkeletonGridProps) => {
  return (
    <SkeletonContainer>
      <SkeletonGrid {...props} />
    </SkeletonContainer>
  );
};

Skeleton.Grid = SkeletonGrid;
Skeleton.Container = SkeletonContainer;

export default Skeleton;
