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
    <div style={{ maxWidth: 500 }} {...props}>
      <Doughnut
        data={{
          labels: ["정답", "오답"],
          datasets: [
            {
              label: "개수",
              data: [numberOfCorrectAnswers, numberOfIncorrectAnswers],
              backgroundColor: ["#115e59", "#b91c1c"],
            },
          ],
        }}
      />
    </div>
  );
};
