import { useNavigate } from "react-router-dom";
import { Button, ButtonProps } from "./Button";

type Props = ButtonProps & {
  to: string;
};

export const LinkButton = ({ to, onClick, ...props }: Props) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={(e) => {
        onClick?.(e);
        navigate(to);
      }}
      {...props}
    />
  );
};
