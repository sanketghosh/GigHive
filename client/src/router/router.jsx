import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import {
  AddNewGig,
  ErrorPage,
  Gig,
  Gigs,
  Home,
  Message,
  Messages,
  MyGigs,
  Orders,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/gigs",
        element: <Gigs />,
      },

      {
        path: "/gig/:id",
        element: <Gig />,
      },

      {
        path: "/orders",
        element: <Orders />,
      },

      {
        path: "/mygigs",
        element: <MyGigs />,
      },

      {
        path: "/addnewgig",
        element: <AddNewGig />,
      },

      {
        path: "/messages",
        element: <Messages />,
      },

      {
        path: "/messages/:id",
        element: <Message />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
