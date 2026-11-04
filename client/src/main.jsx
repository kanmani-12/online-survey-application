import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import GetAllData from "./GetAllData.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/getAllData",
    element: <GetAllData />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
