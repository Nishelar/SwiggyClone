import { useEffect,useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantDetailsComponent=()=>{
    const {id}=useParams();
    const[restaurant,setrestaurant]=useState(null);

    useEffect(()=>{
        getRestaurantDetails();
    },[])

    async function getRestaurantDetails(){
        const data=await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=19.2183307&lng=72.9780897&menuId="+id);
        const json=await data.json();
        setrestaurant(json?.data)
        console.log(json?.data);
    }
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