// Router.jsx

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/Product/Details";
import Favourites from "./Pages/Favourites";
import Search from "./Pages/Search";
import CartPage from "./Pages/Cart/Cart";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import CategoriesSection from "./Pages/Categories";
import NotFound from "./components/NotFound";
import CategoryPage from "./Pages/Categories/CategoryPage";
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
        path: "favorites",
        element: <Favourites />
      },
      {
        path: "cart",
        element: <CartPage />
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: "about-us",
        element: <AboutUs />
      },
      {
        path: "contact-us",
        element: <ContactUs />
      },
            {
        path: "category",
        element: <CategoryPage/>
            },
                  {
        path:"*",
        element:<NotFound />
      }

    ],
  },
]);

export default router;