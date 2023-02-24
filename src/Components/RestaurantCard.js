import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../config"
const RestaurantCard=({name,cuisines,avgRating,cloudinaryImageId})=>{
    
    return(
        <div className="h-80 w-72 px-4 py-4 hover:border-2 border-black bg-white shadow-slate-400 shadow-lg mx-4 my-2">
            <img src={`${IMG_CDN_URL+cloudinaryImageId}`}/>
            <h2 className="text-lg font-sans font-semibold pt-2">{name}</h2>
            <h3 className="font-sans font-normal text-sm">{cuisines.join(", ")}</h3>
            <h3 className="mt-4">{(avgRating>=4) ? <span className="bg-green-400 font-semibold text-white p-1 ">{avgRating} ✰</span> : <span className="bg-yellow-300 font-semibold  text-white p-1">{avgRating} ✰</span>} </h3>
        </div>
    )
}
export default RestaurantCard;