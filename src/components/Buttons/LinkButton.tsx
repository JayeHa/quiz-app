import { Button, ButtonProps } from "@components/Buttons";
import { useNavigate } from "react-router-dom";

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
