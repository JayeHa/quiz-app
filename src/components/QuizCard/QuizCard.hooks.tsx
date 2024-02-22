import { useEffect, useState } from "react";
import { shuffleArray } from "../../utils/shuffleArray";

export const useRandomAnswers = (
  correctAnswer: string,
  inCorrectAnswers: string[]
) => {
  const [randomAnswers, setRandomAnswers] = useState<string[]>([]);

  useEffect(() => {
    const answers = [correctAnswer, ...inCorrectAnswers];
    setRandomAnswers(shuffleArray(answers));
  }, [correctAnswer, inCorrectAnswers]);

  return randomAnswers;
};
