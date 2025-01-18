import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
      },
      {
        path:'order/:category',
        element:<Order></Order>
    },
    {
      path:'order',
      element:<Order></Order>
  },
    {
      path:'login',
      element:<Login></Login>
  },
  {
    path:'signup',
    element:<SignUp></SignUp>
},
{
  path:'secret',
  element:<PrivateRoutes><Secret></Secret></PrivateRoutes>
}

      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'cart',
        element:<Cart></Cart>
        }
      ]

      
    }
  ]);
  