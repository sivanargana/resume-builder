import { lazy } from "react";
import { redirect, RouterProvider, createBrowserRouter } from "react-router";

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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
