import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // 1분
      cacheTime: 1000 * 60 * 5, // 5분
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
