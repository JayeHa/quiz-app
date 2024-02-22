import { useQuizStore } from "../store/quizStore";

export const ResultPage = () => {
  const { userAnswerList, quizList, startDate } = useQuizStore();

  return (
    <div>
      <div>
        {startDate}
        ---
        {userAnswerList.map((answer) => (
          <span key={answer}>{answer}, </span>
        ))}
        ---
        {quizList.map(({ correct_answer }) => (
          <span key={correct_answer}>{correct_answer}, </span>
        ))}
      </div>
    </div>
  );
};
