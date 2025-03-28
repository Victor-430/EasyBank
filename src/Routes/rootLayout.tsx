import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import { PageNotFound } from "../Pages/PageNotFound";
import { About } from "../Pages/About";
import { NavBar } from "../components/NavBar";
// import { Loading } from "../utils/loaading";

export const rootLayout = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <PageNotFound />,
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
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);
