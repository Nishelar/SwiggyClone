import { useState } from "react"


const Title=()=>{
    return (
    <a href="/" ><img src="https://assets.materialup.com/uploads/61d86780-be13-47fa-81a6-226aac22db27/preview.jpg"
    alt="Food Villa" className="logo"/> </a>)
}

const HeaderComponent=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    return (
        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
            {(!isLoggedIn) ? (<button onClick={()=>setIsLoggedIn(true)}>LogIn</button>) : (<button onClick={()=>setIsLoggedIn(false)}>LogOut</button>)}
        </div>
    )
}

export default HeaderComponent;