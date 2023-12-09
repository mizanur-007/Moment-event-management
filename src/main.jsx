import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Pages/Layout/Layout.jsx';
import Home from './Pages/Home/Home.jsx';
import Services from './Pages/Services/Services';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login';
import { ThemeProvider } from "@material-tailwind/react";
import Register from './Pages/Register/Register';
import About from './Pages/About/About';
import PrivateRoute from './Pages/Private/PrivateRoute';
import Contact from './Pages/Contact/Contact';
import ErrorPage from './Pages/Error/ErrorPage';
import Rental from './Pages/Rental/Rental';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        loader: ()=>fetch("/plans.json"),
        element: <Home></Home>
      },
      {
        path: "/services",
        loader: ()=>fetch("/plans.json"),
        element: <Services></Services>
      },
      {
        path: "/details/:id",
        loader: ()=>fetch("/plans.json"),
        element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
      {
        path: "/register",
        element:<Register></Register>
      },
      {
        path: "/about",
        element:<PrivateRoute><About></About></PrivateRoute>
      },
      {
        path: "/contact",
        element:<PrivateRoute><Contact></Contact></PrivateRoute>
      },
      {
        path: "/rental",
        element:<PrivateRoute><Rental></Rental></PrivateRoute>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <AuthProvider><RouterProvider router={router}></RouterProvider></AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
