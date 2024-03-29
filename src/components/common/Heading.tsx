import classNames from "classnames";
import { ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingTag = `h${HeadingLevel}`;
type HeadingSize = "lg" | "md" | "invisible";

type Props = {
  level: HeadingLevel;
  size?: HeadingSize;
  className?: string;
  children: ReactNode;
};

const HEADING_STYLES: Record<HeadingSize, string> = {
  lg: "mb-6 text-4xl font-bold",
  md: "text-2xl font-bold",
  invisible: "sr-only",
};

export const Heading = ({
  level,
  children,
  size = "lg",
  className,
  ...props
}: Props) => {
  const Tag = `h${level}` as keyof Pick<JSX.IntrinsicElements, HeadingTag>;

  return (
    <Tag
      className={classNames("break-keep", HEADING_STYLES[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
