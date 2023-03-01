import { useState } from "react"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../Utils/store";


const Title=()=>{
    return (
    <a href="/" ><img src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"
    alt="Food Villa" className="h-24"/> </a>)
}

const HeaderComponent=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const cartItems=useSelector((store)=>store.cart.items)
    return (
        <div className="flex justify-between bg-orange-400 text-white font-sans font-semibold">
            <Title/>
            <div className="nav-items">
                <ul className="flex py-8 text-lg "> 
                    <li className="px-3 hover:text-violet-800"><Link to="/">Home</Link></li>
                    <li className="px-3  hover:text-violet-800"><Link to="/about">About</Link></li>
                    <li className="px-3  hover:text-violet-800"><Link to="/contact">Contact</Link></li>
                    <li className="px-3  hover:text-violet-800"><Link to="/instamart">Instamart</Link></li>
                    <li className="px-3  hover:text-violet-800"><Link to="/cart">Cart-{cartItems.length}</Link></li>
                </ul>
            </div>
            {(!isLoggedIn) ? (<button className="pr-8 text-white text-lg" onClick={()=>setIsLoggedIn(true)}>LogIn</button>) : (<button className="pr-8 text-lg text-white" onClick={()=>setIsLoggedIn(false)}>LogOut</button>)}
        </div>
    )
}

export default HeaderComponent;