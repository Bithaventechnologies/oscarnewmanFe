import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";

import Layout from "../layout/Homelayout";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);
