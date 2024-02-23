import { Skeleton } from "@components/Skeleton";
import { Suspense, type FC, type ReactNode } from "react";

type WithSuspense = <P extends object>(
  Component: FC<P>,
  Fallback?: FC<P> | ReactNode,
) => FC<P>;

/* 
  Suspense작업을 hoc형태로 도와줍니다.
  에러처리는 필요시 고려하여 확장합니다.

  @example
  withSuspense(suspense를 일으키는 컴포넌트, fallback으로 보여줄 컴포넌트)
*/
export const withSuspense: WithSuspense =
  (Component, Fallback = <Skeleton />) =>
  (props) => (
    <Suspense
      fallback={
        typeof Fallback === "function" ? <Fallback {...props} /> : Fallback
      }
    >
      <Component {...props} />
    </Suspense>
  );
