import classNames from "classnames";
import { ReactElement } from "react";
import "./BottomBar.css";

type Props = {
  className?: string;
  children: ReactElement;
  isSlideUp?: boolean;
};

export const BottomBar = ({ children, className, isSlideUp }: Props) => {
  return (
    <footer
      className={classNames("bottom-bar", className, {
        "animate-slide-up md:animate-none": isSlideUp,
      })}
    >
      {children}
    </footer>
  );
};
