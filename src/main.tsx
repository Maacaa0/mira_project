import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Gallery from "./components/Gallery/Gallery.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Home from "./pages/Home/Home.tsx";
import Portfolio from "./pages/Portfolio/Portfolio.tsx";
import Pricelist from "./pages/Pricelist/Pricelist.tsx";

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
