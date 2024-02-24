import { BottomBar } from "@components/BottomBar/BottomBar";
import { LinkButton } from "@components/Buttons";
import { EmptyView } from "@components/EmptyView";
import { Heading } from "@components/Heading";
import { QuizReviewCard } from "@components/QuizCards";
import { useQuizStore } from "@store/quizStore";

export const ReviewNotePage = () => {
  const { quizList, userAnswerList } = useQuizStore();

  if (userAnswerList.length === 0) {
    return <EmptyView title="퀴즈 결과가 존재하지 않습니다." />;
  }

  return (
    <>
      <Heading level={2}>오답노트</Heading>

      <div className="flex flex-col gap-16">
        {quizList.map((quiz, i) => (
          <QuizReviewCard
            index={i}
            key={quiz.question}
            quiz={quiz}
            userAnswer={userAnswerList[i]}
          />
        ))}
      </div>

      <BottomBar className="mt-16">
        <div className="flex gap-2">
          <LinkButton
            to="/result"
            className="w-1/2"
            color="gray"
            variant="outlined"
          >
            뒤로
          </LinkButton>
          <LinkButton to="/" className="w-full" variant="outlined">
            홈으로
          </LinkButton>
        </div>
      </BottomBar>
    </>
  );
};
