import { LinkButton } from "@components/Buttons";
import { Heading } from "@components/Heading";
import { DEFAULT_AMOUNT } from "@models/quiz";

export const HomePage = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <div>
        <Heading level={2} className="break-keep text-center">
          퀴즈앱에 오신 것을 환영합니다!
        </Heading>

        <p className="text-center text-xl">
          아래 버튼을 눌러 퀴즈를 시작해주세요.
          <br />
          문제는 총 {DEFAULT_AMOUNT}개가 제공됩니다.
        </p>
      </div>

      <LinkButton to="/quiz" className="w-full md:w-[500px]">
        퀴즈 풀기
      </LinkButton>
    </div>
  );
};
