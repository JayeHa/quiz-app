import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router-dom";
import { fakeQuizzes } from "../../../tests/fakeQuizzes";
import { withRouter } from "../../../tests/utils";
import { QuizCard } from "./QuizCard";

const FAKE_QUIZ = fakeQuizzes[0];
const handleNextButtonMock = jest.fn();

const renderQuizCard = (quiz = FAKE_QUIZ, isLastQuiz = false) => {
  return render(
    withRouter(
      <Route
        path="/"
        element={
          <QuizCard
            quiz={quiz}
            handleNextButton={handleNextButtonMock}
            isLastQuiz={isLastQuiz}
          />
        }
      />,
    ),
  );
};

describe("QuizCard", () => {
  beforeEach(() => {
    handleNextButtonMock.mockClear();
  });

  it("사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.", () => {
    renderQuizCard();
    FAKE_QUIZ.shuffledAnswers.forEach((answer) => {
      expect(screen.getByRole("button", { name: answer })).toBeInTheDocument();
    });
  });

  it("quiz의 값이 없을 때도 오류 없이 렌더링한다", () => {
    const { container } = renderQuizCard();
    expect(container).toBeDefined();
  });

  describe("사용자는 답안을 선택하면 다음 문항을 볼 수 있다.", () => {
    it("답안 선택 후 '다음 문항' 버튼을 볼 수 있다.", () => {
      renderQuizCard();
      const answerButton = screen.getByRole("button", {
        name: FAKE_QUIZ.correct_answer,
      });
      userEvent.click(answerButton);

      expect(
        screen.getByRole("button", { name: /다음 문항/ }),
      ).toBeInTheDocument();
    });

    it("답안이 맞았는지 바로 알 수 있다.", () => {
      renderQuizCard();
      userEvent.click(
        screen.getByRole("button", {
          name: FAKE_QUIZ.correct_answer,
        }),
      );

      expect(screen.getByText(/맞았습니다/)).toBeInTheDocument();
    });
    it("답안이 틀렸는지 바로 알 수 있다.", () => {
      renderQuizCard();
      userEvent.click(
        screen.getByRole("button", {
          name: FAKE_QUIZ.incorrect_answers[0],
        }),
      );

      expect(screen.getByText(/틀렸습니다/)).toBeInTheDocument();
    });

    it("답안을 선택하면 답안 버튼이 비활성화된다", async () => {
      renderQuizCard();
      const answerButton = screen.getByRole("button", {
        name: FAKE_QUIZ.correct_answer,
      });
      userEvent.click(answerButton);

      expect(answerButton).toBeDisabled();
    });

    it("다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.", async () => {
      renderQuizCard();

      const answerButton = screen.getByRole("button", {
        name: FAKE_QUIZ.correct_answer,
      });
      userEvent.click(answerButton);
      const nextButton = screen.getByRole("button", { name: "다음 문항" });
      userEvent.click(nextButton);

      expect(handleNextButtonMock).toHaveBeenCalledWith(
        FAKE_QUIZ.correct_answer,
      );
      expect(answerButton).not.toBeDisabled();
    });

    it("isLastQuiz가 true일 때 결과 보기 버튼이 렌더된다.", () => {
      renderQuizCard(FAKE_QUIZ, true);

      const answerButton = screen.getByRole("button", {
        name: FAKE_QUIZ.correct_answer,
      });
      userEvent.click(answerButton);

      expect(
        screen.queryByRole("button", { name: "다음 문항" }),
      ).not.toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: "결과 보기" }),
      ).toBeInTheDocument();
    });
  });
});
