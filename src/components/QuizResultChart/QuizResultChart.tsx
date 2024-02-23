import {
  ArcElement,
  Chart as ChartJS,
  Colors,
  Legend,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

type Props = {
  numberOfCorrectAnswers: number;
  numberOfIncorrectAnswers: number;
};

export const QuizResultChart = ({
  numberOfCorrectAnswers,
  numberOfIncorrectAnswers,
  ...props
}: Props) => {
  return (
    <div className="relative m-auto h-[400px] w-[90vw] max-w-96" {...props}>
      <Doughnut
        data={{
          labels: ["정답", "오답"],
          datasets: [
            {
              label: "개수",
              data: [numberOfCorrectAnswers, numberOfIncorrectAnswers],
              backgroundColor: ["#0f766e", "#b91c1c"],
            },
          ],
        }}
      />
    </div>
  );
};
