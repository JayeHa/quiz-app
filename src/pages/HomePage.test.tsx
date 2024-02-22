import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router-dom";
import { withRouter } from "../tests/utils";
import { HomePage } from "./HomePage";

describe("Home", () => {
  it("'퀴즈 풀기' 버튼이 렌더링된다.", () => {
    render(withRouter(<Route path="/" element={<HomePage />} />));
    const startButton = screen.getByRole("button", { name: /퀴즈 풀기/ });

    expect(startButton).toBeInTheDocument();
  });

  it("사용자는 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기 페이지로 이동된다.", () => {
    const QUIZ_PAGE_TEXT = "퀴즈 풀기 페이지";
    render(
      withRouter(
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<div>{QUIZ_PAGE_TEXT}</div>} />
        </>
      )
    );

    const startButton = screen.getByRole("button", { name: /퀴즈 풀기/ });
    userEvent.click(startButton);

    expect(screen.getByText(QUIZ_PAGE_TEXT)).toBeInTheDocument();
  });
});
