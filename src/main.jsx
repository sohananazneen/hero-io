import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout/Layout.jsx";
import axios from "axios";
import AppsPage from "./Components/AppsPage/AppsPage.jsx";
import AppsDetails from "./Components/AppsDetails/AppsDetails.jsx";
import NotFound from "./Components/ErrorPages/NotFound.jsx";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        },
        element: <App />,
      },
      {
        path: "/apps",
        loader: async () => {
          const res = await axios.get("/data.json");
          return res.data;
        },
        element: <AppsPage />,
      },
      {
        path: "/appsdetails/:id",
        loader: async ({ params }) => {
          const res = await axios.get("/data.json");
          const singleAppData = res.data.find(
            (singleApp) => singleApp.id === Number(params.id),
          );
          return singleAppData;
          // console.log(singleAppData);
        },
        element: <AppsDetails />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
     <ToastContainer />
  </StrictMode>,
);
