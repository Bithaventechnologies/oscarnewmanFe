import { createBrowserRouter } from "react-router-dom";
import Home from "../components/home/Home";

import Layout from "../layout/Homelayout";
import ContactUs from "../components/home/contactus";
import Login from "../admin/auth/login";
import Register from "../admin/auth/register";
import DashboardLayout from "../layout/dashboardlay";
import Postblog from "../admin/dashboard/PostBlog";
import PostList from "../admin/dashboard/Postlist";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "reg",
    element: <Register />,
  },
  {
    path: "dash",
    element: <DashboardLayout />,
    children: [
      {
        path: "postblog",
        element: <Postblog />,
      },
      {
        path: "allpost",
        element: <PostList />,
      },
    ],
  },
]);
