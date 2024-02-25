import { LinkButton } from "./Buttons";
import { Heading } from "./Heading";

type Props = { title?: string; className?: string };

export const EmptyView = ({
  className,
  title = "페이지가 존재하지 않습니다.",
}: Props) => {
  return (
    <div
      className={
        "flex items-center justify-center p-MAIN_PADDING_X" + className
      }
    >
      <div className="flex w-full max-w-MAX_MAIN_WIDTH flex-col gap-8 text-center">
        <div>
          <div className="text-[12em]">😦</div>
          <Heading level={2}>{title}</Heading>
          <p className="break-keep text-2xl">
            아래 "홈으로 가기" 버튼을 눌러서 홈으로 이동해주세요.
          </p>
        </div>

        <div className="mb-24">
          <LinkButton to="/">홈으로 가기</LinkButton>
        </div>
      </div>
    </div>
  );
};
