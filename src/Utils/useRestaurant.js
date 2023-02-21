import { useState,useEffect } from "react";
export default useRestaurant=(resId)=>{
    const[restaurant,setrestaurant]=useState(null);

    useEffect(()=>{
        getRestaurantDetails();
    },[])

    async function getRestaurantDetails(){
        const data=await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=19.2183307&lng=72.9780897&menuId="+resId);
        const json=await data.json();
        setrestaurant(json?.data)
    }

    return restaurant;
}