import classNames from "classnames";
import he from "he";

type Props = {
  className?: string;
  children: string;
};

export const Text = ({ children, className }: Props) => {
  return <span className={classNames(className)}>{he.decode(children)}</span>;
};
