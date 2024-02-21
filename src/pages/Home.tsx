import { useEffect } from "react";
import { useFetchQuizzes } from "../hooks/quizzes";

export const Home = () => {
  const { data } = useFetchQuizzes();
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <button>퀴즈 풀기</button>
    </div>
  );
};
