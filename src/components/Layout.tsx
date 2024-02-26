import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Loading } from "./Loading";

export const Layout = () => {
  return (
    <>
      <div className="fixed inset-0 z-GNB h-GNB_HEIGHT">
        <Header />
      </div>

      <div className="mb-BOTTOM_BAR_HEIGHT mt-GNB_HEIGHT md:mb-0">
        <Suspense fallback={<Loading />}>
          <main className="flex flex-col items-center px-MAIN_PADDING_X py-10">
            <div className="w-full max-w-MAX_MAIN_WIDTH">
              <Outlet />
            </div>
          </main>
        </Suspense>
      </div>
    </>
  );
};
