import { RouterProvider } from "react-router-dom";
import { router } from "./router";

const RouterWrapper = ({ children }) => {
  return <RouterProvider router={router}>{children}</RouterProvider>;
};

export default RouterWrapper;
