import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { rootLayout } from "./Routes/rootLayout.tsx";

const PageLoader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<PageLoader />}>
      <RouterProvider router={rootLayout} />
    </Suspense>
  </StrictMode>
);
