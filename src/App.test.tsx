import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("should render '퀴즈 풀기' button", () => {
    render(<App />);
    const startButton = screen.getByRole("button", { name: /퀴즈 풀기/ });

    expect(startButton).toBeInTheDocument();
  });
});
