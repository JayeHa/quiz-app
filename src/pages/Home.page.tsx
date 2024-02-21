import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate("/quiz")}>
        퀴즈 풀기
      </button>
    </div>
  );
};
