import Skeleton from "@components/Skeleton";
import { Suspense, type FC, type ReactNode } from "react";

type WithSuspense = <P extends object>(
  Component: FC<P>,
  Fallback?: FC<P> | ReactNode
) => FC<P>;

/**
 * Suspense작업을 hoc형태로 도와줍니다.
 * 주어진 컴포넌트를 Suspense와 함께 렌더링하며, 필요에 따라 fallback 컴포넌트를 제공할 수 있습니다.
 *
 * @example
 * const SuspenseComponent = withSuspense(MyComponent, MyFallbackComponent);
 * // 또는
 * const SuspenseComponent = withSuspense(MyComponent); // 기본 Skeleton 사용
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
