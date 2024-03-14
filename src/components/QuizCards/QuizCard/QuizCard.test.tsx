import { SAMPLE_SHUFFLED_QUIZ_LIST } from "@/data/quizSampleData";
import { ShuffledQuiz } from "@models/quiz";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { withRouter } from "@tests/utils";
import { Route } from "react-router-dom";
import { QuizCard } from "./QuizCard";

const SAMPLE_QUIZ = SAMPLE_SHUFFLED_QUIZ_LIST[0];
const handleNextButtonMock = jest.fn();
const handleResultButtonMock = jest.fn();

const renderQuizCard = (
  quiz: ShuffledQuiz | null = SAMPLE_QUIZ,
  isLastQuiz = false
) => {
  return render(
    withRouter(
      <Route
        path="/"
        element={
          <QuizCard
            quiz={quiz}
            total={3}
            current={isLastQuiz ? 2 : 0}
            handleNextButton={handleNextButtonMock}
            handleResultButton={handleResultButtonMock}
          />
        }
      />
    )
  );
};

describe("QuizCard", () => {
  beforeEach(() => {
    handleNextButtonMock.mockClear();
  });

  it("제공된 퀴즈 데이터로 정확하게 렌더링된다.", () => {
    renderQuizCard();
    expect(screen.getByText(SAMPLE_QUIZ.question)).toBeInTheDocument();
    SAMPLE_QUIZ.shuffledAnswers.forEach((answer) => {
      expect(screen.getByRole("button", { name: answer })).toBeInTheDocument();
    });
  });

  it("quiz 값이 null일 때 오류 없이 렌더링된다", () => {
    const { container } = renderQuizCard(null);
    expect(container).toBeDefined();
  });

  describe("사용자가 답안을 선택했을 때", () => {
    it("'다음 문항' 버튼이 표시된다", () => {
      renderQuizCard();
      const answerButton = screen.getByRole("button", {
        name: SAMPLE_QUIZ.correct_answer,
      });
      userEvent.click(answerButton);

      expect(
        screen.getByRole("button", { name: /다음 문항/ })
      ).toBeInTheDocument();
    });

    it("정답 선택 시 '맞았습니다' 메시지가 표시된다", () => {
      renderQuizCard();
      userEvent.click(
        screen.getByRole("button", {
          name: SAMPLE_QUIZ.correct_answer,
        })
      );

      expect(screen.getByText(/맞았습니다/)).toBeInTheDocument();
    });
    it("오답 선택 시 '틀렸습니다' 메시지가 표시된다", () => {
      renderQuizCard();
      userEvent.click(
        screen.getByRole("button", {
          name: SAMPLE_QUIZ.incorrect_answers[0],
        })
      );

      expect(screen.getByText(/틀렸습니다/)).toBeInTheDocument();
    });

    it("답안을 선택하면 모든 선택지가 비활성화된다", () => {
      renderQuizCard();
      const answerButton = screen.getByRole("button", {
        name: SAMPLE_QUIZ.correct_answer,
      });
      userEvent.click(answerButton);

      SAMPLE_QUIZ.shuffledAnswers.forEach((answer) => {
        expect(screen.getByRole("button", { name: answer })).toBeDisabled();
      });
    });

    it("'다음 문항' 버튼으로 다음 문제로 넘어갈 수 있다", () => {
      renderQuizCard();
      const answerButton = screen.getByRole("button", {
        name: SAMPLE_QUIZ.correct_answer,
      });
      userEvent.click(answerButton);

      const nextButton = screen.getByRole("button", { name: "다음 문항" });
      userEvent.click(nextButton);

      expect(handleNextButtonMock).toHaveBeenCalledWith(
        SAMPLE_QUIZ.correct_answer
      );
      expect(answerButton).not.toBeDisabled();
    });

    it("마지막 퀴즈에서는 '결과 보기' 버튼이 표시된다", () => {
      renderQuizCard(SAMPLE_QUIZ, true);

      const answerButton = screen.getByRole("button", {
        name: SAMPLE_QUIZ.correct_answer,
      });
      userEvent.click(answerButton);

      expect(
        screen.queryByRole("button", { name: "다음 문항" })
      ).not.toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "결과 보기" })
      ).toBeInTheDocument();
    });

    it("'결과 보기' 버튼 클릭 시 결과 페이지로 이동한다", () => {
      const total = 3;
      const RESULT_PAGE_TEXT = "결과 페이지";
      render(
        withRouter(
          <>
            <Route path="/result" element={<div>{RESULT_PAGE_TEXT}</div>} />,
            <Route
              path="/"
              element={
                <QuizCard
                  quiz={SAMPLE_QUIZ}
                  total={total}
                  current={total - 1}
                  handleNextButton={handleNextButtonMock}
                  handleResultButton={handleResultButtonMock}
                />
              }
            />
            ,
          </>
        )
      );

      const answerButton = screen.getByRole("button", {
        name: SAMPLE_QUIZ.correct_answer,
      });
      userEvent.click(answerButton);

      const resultButton = screen.getByRole("button", {
        name: "결과 보기",
      });
      userEvent.click(resultButton);

      expect(screen.getByText(RESULT_PAGE_TEXT)).toBeInTheDocument();
    });
  });
});
