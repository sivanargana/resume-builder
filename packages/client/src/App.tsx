import { lazy } from "react";
import { redirect, RouterProvider, createBrowserRouter } from "react-router";
import { AuthGuard } from "./features/auth";

const router = createBrowserRouter([
  {
    path: "/",
    Component: lazy(() => import("./features/layouts/PublicLayout")),
    children: [
      {
        element: <div>home</div>,
        index: true,
      },
      {
        path: "auth",
        Component: lazy(() => import("./features/layouts/AuthLayout")),
        children: [
          {
            path: "",
            loader: () => redirect("login"),
          },
          {
            path: "login",
            Component: lazy(() =>
              import("./features/auth").then((module) => ({
                default: module.LoginPage,
              })),
            ),
          },
          {
            path: "register",
            Component: lazy(() =>
              import("./features/auth").then((module) => ({
                default: module.RegisterPage,
              })),
            ),
          },
        ],
      },
      {
        path: "account",
        Component: lazy(() => import("./features/layouts/AccountLayout")),
        loader: () => AuthGuard("USER"),
        children: [
          {
            element: <div>dashboard</div>,
            index: true,
          },
          {
            path: "profile",
            Component: lazy(() =>
              import("./features/profile").then((module) => ({
                default: module.ProfilePage,
              })),
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    Component: lazy(() => import("./features/layouts/AdminLayout")),
    loader: () => AuthGuard("ADMIN"),
    children: [
      {
        element: <div>dashboard</div>,
        index: true,
      },
      {
        path: "users",
        element: <div>users</div>,
      },
    ],
  },
  {
    path: "unauthorized",
    element: <>Unauthorized!</>,
  },
  {
    path: "*",
    element: <>404!</>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
