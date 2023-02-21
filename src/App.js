import React, { Suspense,lazy } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import ContactComponent from "./Components/Contact";
import RestaurantDetailsComponent from "./Components/RestaurantDetails";

//JSX=>React.createElement=>Object=>HTML DOM
const Instamart=lazy(()=>import("./Components/Instamart"))





const AppLayout=()=>{
    return(
    <React.Fragment>
    <HeaderComponent/>
    <Outlet/>
    {/*<Footer/>*/}
    </React.Fragment>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>, 
        children:[{
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<ContactComponent/>
        },
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/restaurants/:id",
            element:<RestaurantDetailsComponent/>
        },
        {
            path:"/instamart",
            element:<Suspense><Instamart/></Suspense>
        }
    ]
    }
])



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);