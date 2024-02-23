import { HTMLAttributes, ReactElement } from "react";

type Props = {
  className?: HTMLAttributes<HTMLDivElement>["className"];
  children?: ReactElement | ReactElement[];
  rows?: number;
  columns?: number;
  gap?: number;
  itemHeight?: number;
};

export const Skeleton = ({
  columns = 1,
  rows = 1,
  gap = 10,
  itemHeight = 100,
  children,
  ...props
}: Props) => {
  return (
    <div
      className="grid w-full animate-pulse"
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
