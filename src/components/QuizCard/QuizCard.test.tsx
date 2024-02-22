import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fakeQuizzes } from "../../tests/fakeQuizzes";
import { QuizCard } from "./QuizCard";

const FAKE_QUIZ = fakeQuizzes[0];
const FAKE_ANSWERS = [FAKE_QUIZ.correct_answer, ...FAKE_QUIZ.incorrect_answers];

describe("QuizCard", () => {
  const handleNextButtonMock = jest.fn();

  beforeEach(() => {
    handleNextButtonMock.mockClear();
  });

  it("사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.", () => {
    render(
      <QuizCard quiz={FAKE_QUIZ} handleNextButton={handleNextButtonMock} />
    );

    FAKE_ANSWERS.forEach((answer) => {
      expect(screen.getByRole("button", { name: answer })).toBeInTheDocument();
    });
  });

  describe("사용자는 답안을 선택하면 다음 문항을 볼 수 있다.", () => {
    it("답안 선택 후 '다음 문항' 버튼을 볼 수 있다.", () => {
      render(
        <QuizCard quiz={FAKE_QUIZ} handleNextButton={handleNextButtonMock} />
      );

      const answerButton = screen.getByRole("button", {
        name: FAKE_QUIZ.correct_answer,
      });
      userEvent.click(answerButton);

      expect(
        screen.getByRole("button", { name: /다음 문항/ })
      ).toBeInTheDocument();
    });

    it("답안이 맞았는지 바로 알 수 있다.", () => {
      render(
        <QuizCard quiz={FAKE_QUIZ} handleNextButton={handleNextButtonMock} />
      );
      userEvent.click(
        screen.getByRole("button", {
          name: FAKE_QUIZ.correct_answer,
        })
      );

      expect(screen.getByText(/맞았습니다/)).toBeInTheDocument();
    });
    it("답안이 틀렸는지 바로 알 수 있다.", () => {
      render(
        <QuizCard quiz={FAKE_QUIZ} handleNextButton={handleNextButtonMock} />
      );
      userEvent.click(
        screen.getByRole("button", {
          name: FAKE_QUIZ.incorrect_answers[0],
        })
      );

      expect(screen.getByText(/틀렸습니다/)).toBeInTheDocument();
    });

    it("답안을 선택하면 답안 버튼이 비활성화된다", async () => {
      render(
        <QuizCard quiz={FAKE_QUIZ} handleNextButton={handleNextButtonMock} />
      );
      const answerButton = screen.getByRole("button", {
        name: FAKE_QUIZ.correct_answer,
      });
      userEvent.click(answerButton);

      expect(answerButton).toBeDisabled();
    });

    it("'다음 문항' 버튼을 클릭하면 userAnswer 상태가 초기화되고 답안 버튼이 활성화된다", async () => {
      render(
        <QuizCard quiz={FAKE_QUIZ} handleNextButton={handleNextButtonMock} />
      );

      const answerButton = screen.getByRole("button", {
        name: FAKE_QUIZ.correct_answer,
      });
      userEvent.click(answerButton);
      const nextButton = screen.getByRole("button", { name: "다음 문항" });
      userEvent.click(nextButton);

      // handleNextButtonMock 함수가 호출되었는지 확인
      expect(handleNextButtonMock).toHaveBeenCalledWith(
        FAKE_QUIZ.correct_answer
      );
      // userAnswer 상태가 초기화되었는지 확인하기 위해 다시 정답 버튼을 클릭 가능한지 확인
      expect(answerButton).not.toBeDisabled();
    });

    it("quiz의 값이 없을 때도 오류 없이 렌더링한다", () => {
      const { container } = render(
        <QuizCard quiz={null} handleNextButton={handleNextButtonMock} />
      );

      expect(container).toBeDefined();
    });
  });
});
