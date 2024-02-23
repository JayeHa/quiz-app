type Props = {
  isCorrect: boolean;
  correctText: string;
  incorrectText: string;
};

export const ResultText = ({
  isCorrect,
  correctText,
  incorrectText,
}: Props) => {
  return (
    <span
      className={`text-2xl font-bold ${isCorrect ? "text-green" : "text-red"}`}
    >
      {isCorrect ? correctText : incorrectText}
    </span>
  );
};
