import { Heading } from "@components/Heading";
import { Text } from "@components/Text";

type Props = {
  index: number;
  question: string;
  category: string;
  difficulty: string;
  prefix?: string;
};

export const QuestionBox = ({
  index,
  question,
  category,
  difficulty,
  prefix,
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
