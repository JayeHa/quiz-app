import he from "he";

type Props = {
  className?: string;
  children: string;
};

export const Text = ({ children, className }: Props) => {
  return <span className={className}>{he.decode(children)}</span>;
};
