import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Blog } from "../Pages/Blog";
import { About } from "../Pages/About";
import { NavBar } from "../components/NavBar";
import { ErrorPage } from "../Pages/ErrorPage";
import { PageNotFound } from "@/Pages/PageNotFound";
import { CareersPage } from "@/Pages/CareersPage";

export const rootLayout = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      { path: "/careers", element: <CareersPage /> },

      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
