import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex h-20 items-center justify-center shadow">
      <Link to="/">
        <h1 className="text-red hover:text-red-dark text-4xl font-bold tracking-tighter transition-colors">
          QuizApp
        </h1>
      </Link>
    </header>
  );
};
