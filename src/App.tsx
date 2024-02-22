import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1분
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="p-4">
          <Outlet />
        </main>
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
