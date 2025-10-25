// Router.jsx

import { createBrowserRouter } from "react-router-dom";
import App from "./App"; 
import Home from "./Pages/Home";
import ProductDetails from "./Pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, 
        element: <Home />, 
      },
      {
        path: "product/:id", 
        element: <ProductDetails />,
      },
    ],
  },
]);

export default router;