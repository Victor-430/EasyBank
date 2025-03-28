import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { rootLayout } from "./Routes/rootLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={rootLayout} />
  </StrictMode>
);
