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

      <div className="mt-GNB_HEIGHT mb-BOTTOM_BAR_HEIGHT md:mb-0">
        <Suspense fallback={<Loading />}>
          <main className="px-MAIN_PADDING_X flex flex-col items-center py-10">
            <div className="max-w-MAX_MAIN_WIDTH w-full">
              <Outlet />
            </div>
          </main>
        </Suspense>
      </div>
    </>
  );
};
