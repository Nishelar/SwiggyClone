import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
//JSX=>React.createElement=>Object=>HTML DOM






const AppLayout=()=>{
    return(
    <React.Fragment>
    <HeaderComponent/>
    <Body/>
    {/*<Footer/>*/}
    </React.Fragment>
    )
}




const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);