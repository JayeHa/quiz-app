import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="shadow h-20 flex items-center justify-center">
      <Link to="/">
        <h1 className="text-4xl font-bold tracking-tighter text-red-800">
          QuizApp
        </h1>
      </Link>
    </header>
  );
};
