import { Navigate, useRoutes } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import GuestGuard from "../guards/GuestGuard";
import AuthLayout from "../layouts/authLayout/AuthLayout";
import HomeLayout from "../layouts/homeLayout/HomeLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

export default function  Router  () {

    return useRoutes([
        {
            path:'/auth',
            element: <GuestGuard><AuthLayout/></GuestGuard>,
            children:[
                { element: <Navigate to="/auth/login" replace />, index: true },
                {
                    path:'/auth/login',
                    element:<Login/>
                }
            ]

        },
        {
            path:'/',
            element:<AuthGuard><HomeLayout/></AuthGuard> ,
            children:[
                { element: <Navigate to="/home" replace />, index: true },
                {path:'/home',element:<Home/>},
            ]
        },
        { path: '*', element: <Navigate to="/home" replace /> },
    ])

}