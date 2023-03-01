import { useEffect,useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../Utils/useRestaurant";
import MenuCard from "./MenuCard";

const RestaurantDetailsComponent=()=>{
    const {id}=useParams();
    const restaurant=useRestaurant(id);
    console.log(restaurant);
    return !restaurant ? <Shimmer/> : (
        <div>
        <div className="bg-black flex">
             <div>
                <img className="h-60 w-68 ml-48 mr-20 py-7"src={`${IMG_CDN_URL+restaurant?.cloudinaryImageId}`}/>
             </div>
             <div className="text-white text h-60 w-68  py-12 ">
                <h1 className="font-light text-3xl">{restaurant?.name}</h1>
                <p className="font-light pt-3">{restaurant.cuisines.join(",")}</p>
                <p className="font-light pt-3">{restaurant.area+","+restaurant.locality}</p>
                <ul className="flex py-4">
                    <li>{restaurant.avgRating}⭐</li>
                    <li className="px-3">{restaurant.sla.deliveryTime+ "minutes"}</li>
                    <li className="px-3">{"₹"+(restaurant.costForTwo/100)}</li>
                </ul>
             </div>
        </div>
            {Object.values(restaurant.menu.items).map((item)=>{
                return (
                    <MenuCard key={item.id} item={item}/>
                )
             })}
        </div>
    )
}
export default RestaurantDetailsComponent;