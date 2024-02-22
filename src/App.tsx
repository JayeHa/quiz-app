import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Loading } from "./components/Loading";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10, // 10분
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="flex flex-col items-center p-4">
          <div className="w-full max-w-[1000px]">
            <Outlet />
          </div>
        </main>
      </Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
