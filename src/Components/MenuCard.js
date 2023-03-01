import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { addItems } from "../Utils/cartSlice";

const MenuCard=({item})=>{
   const dispatch=useDispatch();
   handleClick=(item)=>{
    dispatch(addItems(item));
   }    
  return(
    <div className="flex mx-auto px-32 py-6 w-auto justify-between border-b-2 shadow-md" >
        <div>
        <h1 className="text-xl">{item.name}</h1>
        <h1 className="mt-2">{"₹"+(item.price)/100}</h1>
        <h1 className="text-xs">{item.description}</h1>
        <button className="bg-green-500 text-white px-4 py-2 my-6" onClick={()=>handleClick(item)}>Add</button>
        </div>
        <div>
            <img className="h-28 w-28" src={`${IMG_CDN_URL+item.cloudinaryImageId}`} alt="menu-image"></img>
        </div>
    </div>
  )
}

export default MenuCard;