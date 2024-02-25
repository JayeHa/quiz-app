import { SAMPLE_SHUFFLED_QUIZ_LIST } from "@/data/quizSampleData";
import { render, screen } from "@testing-library/react";
import { QuizReviewCard } from "./QuizReviewCard";

const SAMPLE_QUIZ = SAMPLE_SHUFFLED_QUIZ_LIST[0];

const USER_ANSWER_CORRECT = SAMPLE_QUIZ.correct_answer;
const USER_ANSWER_INCORRECT = SAMPLE_QUIZ.incorrect_answers[0];

describe("QuizReviewCard 컴포넌트 테스트", () => {
  it("질문과 답변 옵션을 올바르게 렌더링합니다", () => {
    render(
      <QuizReviewCard
        quiz={SAMPLE_QUIZ}
        userAnswer={USER_ANSWER_CORRECT}
        index={0}
      />
    );

    expect(screen.getByText(SAMPLE_QUIZ.question)).toBeInTheDocument();

    SAMPLE_QUIZ.shuffledAnswers.forEach((answer) => {
      expect(screen.getByRole("button", { name: answer })).toBeInTheDocument();
    });
  });

  it("사용자가 정답을 맞췃을 시 해당 버튼이 초록색으로 표시됩니다.", () => {
    render(
      <QuizReviewCard
        quiz={SAMPLE_QUIZ}
        userAnswer={USER_ANSWER_CORRECT}
        index={0}
      />
    );

    const correctAnswerButton = screen.getByRole("button", {
      name: USER_ANSWER_CORRECT,
    });
    expect(correctAnswerButton.className).toMatch(/green/);
  });

  it("유저가 답을 틀렸을 시 틀린 답은 빨간색으로, 정답은 초록색으로 표시됩니다", () => {
    render(
      <QuizReviewCard
        quiz={SAMPLE_QUIZ}
        userAnswer={USER_ANSWER_INCORRECT}
        index={0}
      />
    );

    // 정답 버튼의 색상 검사
    const correctAnswerButton = screen.getByRole("button", {
      name: SAMPLE_QUIZ.correct_answer,
    });
    expect(correctAnswerButton.className).toMatch(/green/);

    // 오답 버튼의 색상 검사
    const userAnswerButton = screen.getByRole("button", {
      name: USER_ANSWER_INCORRECT,
    });
    expect(userAnswerButton.className).toMatch(/red/);
  });
});
