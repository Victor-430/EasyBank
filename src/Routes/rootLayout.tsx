import { createBrowserRouter } from "react-router-dom";

import { NavBar } from "../components/NavBar";
import { ErrorPage } from "../Pages/ErrorPage";

import { lazy } from "react";

const Home = lazy(() => import("../Pages/Home"));
const CareersPage = lazy(() => import("../Pages/CareersPage"));
const About = lazy(() => import("../Pages/About"));
const Blog = lazy(() => import("../Pages/Blog"));
const PageNotFound = lazy(() => import("../Pages/PageNotFound"));

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
