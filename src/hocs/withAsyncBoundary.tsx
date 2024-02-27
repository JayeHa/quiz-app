import { ReactElement, Suspense, type FC } from "react";
import { ErrorBoundary, ErrorBoundaryProps } from "react-error-boundary";

type WithAsyncBoundary = <P extends object>(
  Component: FC<P>,
  fallbacks: {
    pendingFallback: ReactElement;
    rejectedFallback: ErrorBoundaryProps;
  },
) => FC<P>;

export const withAsyncBoundary: WithAsyncBoundary =
  (Component, fallbacks) => (props) => (
    <Suspense fallback={fallbacks.pendingFallback}>
      <ErrorBoundary {...fallbacks.rejectedFallback}>
        <Component {...props} />
      </ErrorBoundary>
    </Suspense>
  );
