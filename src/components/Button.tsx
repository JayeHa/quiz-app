import { ButtonHTMLAttributes } from "react";

export type ButtonVariant = "default" | "filled" | "outlined";

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  default: "border-neutral-500 bg-white text-primary hover:bg-neutral-100",
  filled: "border-transparent bg-red text-white hover:bg-red-dark",
  outlined: "border-red bg-white text-red hover:bg-red-weak",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export const Button = ({
  children,
  type = "button",
  variant = "default",
  className,
  ...props
}: Props) => {
  return (
    <button
      className={`rounded-lg border px-6 py-2 text-lg font-semibold shadow transition-colors ${BUTTON_VARIANTS[variant]} ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};
