
import { useDispatch, useSelector } from "react-redux";
import store from "../Utils/store";
import { IMG_CDN_URL } from "../config";
import { clearItems } from "../Utils/cartSlice";
const Cart=()=>{
     const cartItems=useSelector((store)=>store.cart.items);

     const dispatch=useDispatch();

     const handleClear=(item)=>{
        console.log(item.id)
        dispatch(clearItems(item));
     }

     return(
        <>
        {cartItems.map((item)=>{
            return (
             
            <div key="item.id" className="flex mx-auto px-32 py-6 w-auto justify-between border-b-2 shadow-md">
            <div className="mx-auto">
        <h1 className="text-xl">{item.name}</h1>
        <h1 className="mt-2">{"₹"+(item.price)/100}</h1>
        <h1 className="text-xs">{item.description.split(".")[0]}</h1>
            </div>
            <div className="flex-row">
            <img className="h-28 w-28" src={`${IMG_CDN_URL+item.cloudinaryImageId}`} alt="menu-image"></img>
            <button className="bg-red-500 text-white px-4 my-6 " onClick={()=>handleClear(item)}>Clear Item</button>
           </div>

        </div>
            )
        })}
        </>
     )
}

export default Cart;