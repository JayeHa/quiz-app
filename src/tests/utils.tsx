import { ReactNode } from "react";
import { MemoryRouter, Routes } from "react-router-dom";

/**
 * React Router의 MemoryRouter를 사용하여 테스트 환경에서의 라우팅을 단순화하는 함수입니다.
 *
 * 주로 테스트 시나리오에서 컴포넌트가 특정 경로에 따라 올바르게 렌더링되는지 확인할 때 사용됩니다.
 *
 * @example
 * withRouter(<Route path="/test" element={<TestComponent />} />, "/test");
 */
export function withRouter(routes: ReactNode, initialEntry = "/") {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
}
