import { render, screen } from "@testing-library/react";
import { QuizProgress } from "./QuizProgress";

jest.mock("@store/quizStore", () => ({
  useQuizStore: () => {
    const MOCK_SHUFFLED_QUIZ_LIST = [
      {
        correct_answer: "Answer 1",
        incorrect_answers: ["Answer 2", "Answer 3"],
      },
      {
        correct_answer: "Answer 4",
        incorrect_answers: ["Answer 5", "Answer 6"],
      },
      {
        correct_answer: "Answer 7",
        incorrect_answers: ["Answer 8", "Answer 9"],
      },
    ];

    return {
      quizList: MOCK_SHUFFLED_QUIZ_LIST,
      userAnswerList: [
        MOCK_SHUFFLED_QUIZ_LIST[0].correct_answer,
        MOCK_SHUFFLED_QUIZ_LIST[1].incorrect_answers[0],
      ],
    };
  },
}));

describe("QuizProgress 컴포넌트", () => {
  it("진행상황이 올바르게 표시되어야 한다", () => {
    render(<QuizProgress />);

    // 진행 상황 텍스트 검증
    expect(screen.getByText(/3 Of 3/)).toBeInTheDocument();

    // 각 진행 표시기의 클래스 검증
    const progressIndicators = screen.getAllByRole("listitem");
    expect(progressIndicators.length).toBe(3);
    expect(progressIndicators[0]).toHaveClass("bg-green"); // 정답
    expect(progressIndicators[1]).toHaveClass("bg-red"); // 오답
    expect(progressIndicators[2]).toHaveClass("bg-neutral-500"); // 현재 문제
  });
});
