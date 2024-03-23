import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/home/Home";
import RegisterPage from "../pages/auth/RegisterPage";
import LoginPage from "../pages/auth/LoginPage";
import CreateOrder from "../pages/create&Order/CreateOrder";


const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <div>About</div>
            },
            {
                path: "/create&Order",
                element: <CreateOrder/>
            },
            {
                path: "/register",
                element: <RegisterPage/>
            },
            {
                path: "/login",
                element: <LoginPage/>
            },
        ],
    }
]);


export default Route;