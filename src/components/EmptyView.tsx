import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { Heading } from "./Heading";

type Props = { title?: string; className?: string };

export const EmptyView = ({
  className,
  title = "페이지가 존재하지 않습니다.",
}: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className={
        "p-MAIN_PADDING_X flex items-center justify-center" + className
      }
    >
      <div className="max-w-MAX_MAIN_WIDTH flex w-full flex-col gap-8 text-center">
        <div>
          <div className="text-[12em]">😦</div>
          <Heading level={2}>{title}</Heading>
          <p className="break-keep text-2xl">
            아래 "홈으로 가기" 버튼을 눌러서 홈으로 이동해주세요.
          </p>
        </div>

        <div className="mb-24">
          <Button onClick={() => navigate("/")}>홈으로 가기</Button>
        </div>
      </div>
    </div>
  );
};
