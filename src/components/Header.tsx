import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex h-20 items-center justify-center shadow">
      <Link to="/">
        <h1 className="text-4xl font-bold tracking-tighter text-red-800">
          QuizApp
        </h1>
      </Link>
    </header>
  );
};
