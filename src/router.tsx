import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "./pages/Home.page";
import { NotFound } from "./pages/NotFound.page";
import { Quiz } from "./pages/Quiz.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "quiz", element: <Quiz /> },
    ],
  },
]);
