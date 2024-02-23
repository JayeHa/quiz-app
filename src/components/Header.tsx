import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="flex h-full items-center justify-center bg-white shadow">
      <Link to="/">
        <h1 className="text-4xl font-bold tracking-tighter text-red transition-colors hover:text-red-dark">
          QuizApp
        </h1>
      </Link>
    </header>
  );
};
