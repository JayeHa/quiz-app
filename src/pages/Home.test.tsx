import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

describe("Home", () => {
  it("should render '퀴즈 풀기' button", () => {
    render(<Home />);
    const startButton = screen.getByRole("button", { name: /퀴즈 풀기/ });

    expect(startButton).toBeInTheDocument();
  });
});
