import { LinkButton } from "@components/Buttons";
import { EmptyView } from "@components/EmptyView";
import { Heading } from "@components/Heading";
import { QuizSummary } from "@components/QuizSummary/QuizSummary";
import { useQuizStore } from "@store/quizStore";

export const ResultPage = () => {
  const { userAnswerList, quizList, startDate, endDate } = useQuizStore();

  if (userAnswerList.length === 0) {
    return <EmptyView title="퀴즈 결과가 존재하지 않습니다." />;
  }

  return (
    <>
      <Heading level={2}>퀴즈 결과</Heading>

      <QuizSummary
        correctAnswerList={quizList.map(({ correct_answer }) => correct_answer)}
        userAnswerList={userAnswerList}
        startDate={startDate}
        endDate={endDate}
      />

      <footer className="bottom-bar mt-2 md:mt-12">
        <div className="flex gap-2">
          <LinkButton to="/" className="w-1/2" color="gray" variant="outlined">
            홈으로
          </LinkButton>
          <LinkButton to="/review" className="w-full" variant="outlined">
            오답노트 보러가기
          </LinkButton>
        </div>
      </footer>
    </>
  );
};
