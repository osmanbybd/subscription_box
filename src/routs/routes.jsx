import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Catergory from "../pages/Catergory";
import BoxesCard from "../pages/boxesCard";
import AuthLogin from "../layouts/AuthLogin";
import Login from "../component/LOgin/Login";
import Register from "../component/LOgin/Register";
import Profile from "../pages/Profile";
import ForgotPassword from "../pages/ForgotPassword";
import PrivateRoute from "../component/privateRoute/PrivateRoute";
import Contact from "../pages/Contact";
import FAQSection from "../pages/FaqSection";
import Invalide from "../pages/Invalide";
import Loading from "../component/Loading";



export const router = createBrowserRouter([

    {
        path :'/',
        Component: Root,
        children:[
            {
                index: true,
                Component: Home,
            },
            {
                path: 'viewMore',
                loader :()=> fetch('subscription.json'),     
                element:<BoxesCard></BoxesCard>,
                hydrateFallbackElement:<Loading></Loading>
            },
            {

            },
            {
                path: '/category/:id',
                loader :()=> fetch('/subscription.json'),  
                element:<PrivateRoute><Catergory></Catergory></PrivateRoute>,
                hydrateFallbackElement:<Loading></Loading>

            },
            {
                path:'profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: '/forgot-password',
                Component: ForgotPassword
            },
            {
                path : 'contact',
                element: <Contact></Contact>
            },
            {
                path:'faq',
                Component: FAQSection
            }
        ]
    },
    {
        path: 'auth',
        Component: AuthLogin,
        children:[
            {
                path: "/auth/login",
                Component: Login
            },
            {
                path:'/auth/register',
                Component:Register
            },
            
         
        ]
    },
    {
        path :'/*',
        Component: Invalide
    }
])