import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button variant="filled" onClick={() => navigate("/quiz")}>
        퀴즈 풀기
      </Button>
    </div>
  );
};
