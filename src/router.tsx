import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./pages/HomePage";
import { NotFound } from "./pages/NotFound.page";
import { QuizPage } from "./pages/QuizPage";
import { ResultPage } from "./pages/ResultPage";
import { ReviewNotePage } from "./pages/ReviewNotePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "quiz", element: <QuizPage /> },
      { path: "result", element: <ResultPage /> },
      { path: "review", element: <ReviewNotePage /> },
    ],
  },
]);
