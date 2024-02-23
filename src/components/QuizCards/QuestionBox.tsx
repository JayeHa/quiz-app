import { Heading } from "@components/Heading";
import { Text } from "@components/Text";
import { Quiz } from "@model/quiz";

type Props = {
  index: number;
  prefix?: string;
} & Pick<Quiz, "question" | "category" | "difficulty">;

export const QuestionBox = ({
  index,
  prefix,
  question,
  category,
  difficulty,
}: Props) => {
  return (
    <div>
      <Text className="text-lg font-semibold text-neutral-500">{category}</Text>
      <Heading level={3} size="md">
        <span>{prefix} </span> <span>{index + 1}. </span>
        <Text>{question}</Text>{" "}
        <Text className="text-xl font-semibold text-green">{`[${difficulty}]`}</Text>
      </Heading>
    </div>
  );
};
