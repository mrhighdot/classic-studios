import { createBrowserRouter } from "react-router-dom";
import { Applayout, Error } from "../components";
import {
  About,
  Contact,
  Home,
  Project,
  Projects,
  Services,
  StoreItem,
  Surge,
} from "../features";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
        element: <Project />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/store",
        element: <Surge />,
      },
      {
        path: "/store/:id",
        element: <StoreItem />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
