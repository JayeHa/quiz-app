import { render, screen } from "@testing-library/react";
import { QuizSummary } from "./QuizSummary";

const FAKE_PROPS = {
  correctAnswerList: ["1", "2", "3"],
  userAnswerList: ["1", "1", "3"],
  startDate: "2024-02-22T13:18:59.006Z",
  endDate: "2024-02-22T13:28:59.006Z",
};

describe("QuizSummary", () => {
  describe("모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.", () => {
    it("정답 개수", () => {
      render(<QuizSummary {...FAKE_PROPS} />);
      expect(screen.getByText(/정답 개수: 2/)).toBeInTheDocument();
    });
    it("오답 수", () => {
      render(<QuizSummary {...FAKE_PROPS} />);
      expect(screen.getByText(/오답 수: 1/)).toBeInTheDocument();
    });

    it("퀴즈를 마칠 때까지 소요된 시간을 표시한다.", () => {
      render(<QuizSummary {...FAKE_PROPS} />);

      expect(screen.getByText(/10분/)).toBeInTheDocument();
    });

    it("시작 시간이 null일 때 '-'를 표시한다", () => {
      const propsWithNullStart = { ...FAKE_PROPS, startDate: null };
      render(<QuizSummary {...propsWithNullStart} />);
      expect(screen.getByText("소요된 시간: -")).toBeInTheDocument();
    });

    it("종료 시간이 null일 때 '-'를 표시한다", () => {
      const propsWithNullEnd = { ...FAKE_PROPS, endDate: null };
      render(<QuizSummary {...propsWithNullEnd} />);
      expect(screen.getByText("소요된 시간: -")).toBeInTheDocument();
    });
    it("유효한 날짜정보가 아니라면 '-'를 표시한다.", () => {
      const propsWithInvalidEnd = { ...FAKE_PROPS, endDate: "invalid" };
      render(<QuizSummary {...propsWithInvalidEnd} />);
      expect(screen.getByText("소요된 시간: -")).toBeInTheDocument();
    });
  });
});
