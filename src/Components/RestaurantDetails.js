import { useEffect,useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../Utils/useRestaurant";

const RestaurantDetailsComponent=()=>{
    const {id}=useParams();
    const restaurant=useRestaurant(id);
    return !restaurant ? <Shimmer/> : (
        <div className="restaurant">
            <div className="restaurantDetails">
                <h1>{restaurant?.name}</h1>
                <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId}/>
                <h4>{restaurant?.locality+","+restaurant?.area}</h4>
                <h4>{restaurant?.avgRating}</h4>
                <h4>{restaurant?.cuisines?.join(",")}</h4>
                <h4>{restaurant?.costForTwoMsg}</h4>
            </div>
            <div className="restaurantMenu">
                {Object.values(restaurant.menu.items).map((item)=>{
                    return <li key={restaurant.id}>{item.name}</li>
                })}
            </div>
        </div>
    )
}
export default RestaurantDetailsComponent;