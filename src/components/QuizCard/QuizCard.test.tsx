import { render, screen } from "@testing-library/react";
import { fakeQuizzes } from "../../tests/fakeQuizzes";
import { QuizCard } from "./QuizCard";

const FAKE_QUIZ = fakeQuizzes[0];
const FAKE_ANSWERS = [FAKE_QUIZ.correct_answer, ...FAKE_QUIZ.incorrect_answers];

describe("QuizCard", () => {
  it("사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.", () => {
    render(<QuizCard quiz={FAKE_QUIZ} />);

    FAKE_ANSWERS.forEach((answer) => {
      expect(screen.getByRole("button", { name: answer })).toBeInTheDocument();
    });
  });

  // describe("사용자는 답안을 선택하면 다음 문항을 볼 수 있다.", () => {
  //   it("답안 선택 후 다음 문항 버튼을 볼 수 있다.", () => {});
  //   it("답안이 맞았는지 틀렸는지 바로 알 수 있다.", () => {});
  //   it("다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.", () => {});
  // });
});
