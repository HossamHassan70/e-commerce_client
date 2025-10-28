// Router.jsx

import { createBrowserRouter } from "react-router-dom";
import App from "./App"; 
import Home from "./Pages/Home";
import ProductDetails from "./Pages/Product/Details";
import Favourites from "./Pages/Favourites";

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
      {
        path:"favorites",
        element:<Favourites/>
      },
    ],
  },
]);

export default router;