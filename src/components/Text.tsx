import he from "he";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLSpanElement> & {
  children: string;
};

export const Text = ({ children, ...props }: Props) => {
  return <span {...props}>{he.decode(children)}</span>;
};
