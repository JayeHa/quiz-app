import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const CHART_DATA = {
  LABEL: ["정답", "오답"],
  BACKGROUND: ["#0f766e", "#b91c1c"],
};

type Props = {
  numberOfCorrect: number;
  numberOfIncorrect: number;
};

export const QuizResultChart = ({
  numberOfCorrect,
  numberOfIncorrect,
}: Props) => {
  return (
    <div className="relative m-auto h-[400px] w-[90vw] max-w-96">
      <Doughnut
        data={{
          labels: CHART_DATA.LABEL,
          datasets: [
            {
              label: "개수",
              data: [numberOfCorrect, numberOfIncorrect],
              backgroundColor: CHART_DATA.BACKGROUND,
            },
          ],
        }}
      />
    </div>
  );
};
