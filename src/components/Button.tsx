import { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "filled" | "outlined";
export type ButtonColor = "red" | "green" | "gray";

const BUTTON_STYLES: Record<ButtonVariant, Record<ButtonColor, string>> = {
  outlined: {
    red: "border-red bg-white text-red enabled:hover:bg-red-weak",
    green: "border-green bg-white text-green enabled:hover:bg-green-weak",
    gray: "border-neutral-500 bg-white text-gray enabled:hover:bg-neutral-100",
  },
  filled: {
    red: "border-transparent bg-red text-white enabled:hover:bg-red-dark",
    green: "border-transparent bg-green text-white enabled:hover:bg-green-dark",
    gray: "border-transparent bg-neutral-500 text-white enabled:hover:bg-neutral-600",
  },
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  color?: ButtonColor;
};

export const Button = ({
  children,
  type = "button",
  variant = "filled",
  color = "red",
  className,
  ...props
}: Props) => {
  return (
    <button
      className={`rounded-lg border px-6 py-3 text-lg font-semibold shadow transition disabled:cursor-not-allowed disabled:opacity-70 ${BUTTON_STYLES[variant][color]} ${className} `}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
