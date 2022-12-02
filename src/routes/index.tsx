import { Navigate, useRoutes } from "react-router-dom";
import AuthLayout from "../layouts/authLayout/AuthLayout";
import HomeLayout from "../layouts/homeLayout/HomeLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

export default function  Router  () {

    return useRoutes([
        {
            path:'/auth',
            element: <AuthLayout/>,
            children:[
                {
                    path:'/auth/login',
                    element:<Login/>
                }
            ]

        },
        {
            path:'/',
            element:<HomeLayout/>,
            children:[
                { element: <Navigate to="/" replace />, index: true },
                {path:'/home',element:<Home/>},
            ]
        }
    ])

}