import { ButtonHTMLAttributes } from "react";

export const Button = ({
  children,
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};
