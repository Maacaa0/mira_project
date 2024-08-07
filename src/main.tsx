import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import { Gallery } from "./components/index.ts";
import { Home, Pricelist, Portfolio, Contact, Reference } from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/cenik",
        Component: Pricelist,
      },
      {
        path: "/portfolio",
        Component: Portfolio,
      },
      {
        path: "/portfolio/:id",
        Component: Gallery,
      },
      {
        path: "/reference",
        Component: Reference,
      },
      {
        path: "/kontakt",
        Component: Contact,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
