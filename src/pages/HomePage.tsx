import { Button } from "@components/Button";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate("/quiz")}>퀴즈 풀기</Button>
    </div>
  );
};
