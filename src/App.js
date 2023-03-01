import React, { Suspense,lazy } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import ContactComponent from "./Components/Contact";
import RestaurantDetailsComponent from "./Components/RestaurantDetails";
import { Provider } from "react-redux";
import store from "./Utils/store";
import Cart from "./Components/Cart";

//JSX=>React.createElement=>Object=>HTML DOM
//lazyLoading
const Instamart=lazy(()=>import("./Components/Instamart"))





const AppLayout=()=>{
    return(
    <Provider store={store}>
    <HeaderComponent/>
    <Outlet/>
    {/*<Footer/>*/}
    </Provider>
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
        },
        {
            path:"/cart",
            element:<Cart/>
        }
    ]
    }
])



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);