import { lazy } from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router";
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
            element: <div>login</div>,
            index: true,
          },
          {
            path: "register",
            element: <div>register</div>,
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
