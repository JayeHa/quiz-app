import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Loading } from "./Loading";

export const Layout = () => {
  return (
    <>
      <div className="h-GNB_HEIGHT z-GNB fixed inset-0">
        <Header />
      </div>

      <div className="mt-GNB_HEIGHT">
        <Suspense fallback={<Loading />}>
          <main className="flex flex-col items-center px-5 py-10">
            <div className="max-w-MAX_CONTENT_WIDTH w-full">
              <Outlet />
            </div>
          </main>
        </Suspense>
      </div>
    </>
  );
};
