import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import CreateOrder from "../pages/create&Order/CreateOrder";
import AboutPage from "../pages/about/AboutPage";
import ProductDetailsPage from "../pages/product/ProductDetailsPage";
import CategoryPage from "../pages/category/CategoryPage";
import NotFoundPage from "../pages/NotFoundPage";
import Cartpage from "../pages/cart/Cartpage";
import CheckoutPage from "../pages/cart/CheckoutPage";
import Favourte from "../pages/favourite/Favourte";


const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/product/1",
                element: <ProductDetailsPage />
            },
            {
                path: "/category",
                element: <CategoryPage />
            },
            {
                path: "/create&Order",
                element: <CreateOrder />
            },
            {
                path: "/cart",
                element: <Cartpage/>
            },
            {
                path: "/checkout",
                element: <CheckoutPage/>
            },
            {
                path: "/favourite",
                element: <Favourte/>
            },
            {
                path: "/register",
                element: <RegisterPage />
            },
            {
                path: "/login",
                element: <LoginPage />
            },
        ],
    }
]);


export default Route;