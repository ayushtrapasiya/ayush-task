import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../Pages/Login/Login";
import App from "../App";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },

  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <App />
      </ProtectedRoutes>
    ),
  },
]);

function HandleRouter() {
  return <RouterProvider router={router} />;
}

export default HandleRouter;
