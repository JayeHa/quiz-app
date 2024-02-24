import { ReactElement } from "react";
import "./BottomBar.css";

type Props = {
  className?: string;
  children: ReactElement;
  isSlideUp?: boolean | "";
};

export const BottomBar = ({
  children,
  className = "",
  isSlideUp = "",
}: Props) => {
  return (
    <footer
      className={`bottom-bar ${className} ${isSlideUp && "animate-slide-up md:animate-none"}`}
    >
      {children}
    </footer>
  );
};
