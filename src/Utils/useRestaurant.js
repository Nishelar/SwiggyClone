import { useState,useEffect } from "react";
import { RES_CDN_URL } from "../config";
export default useRestaurant=(resId)=>{
    const[restaurant,setrestaurant]=useState(null);

    useEffect(()=>{
        getRestaurantDetails();
    },[])

    async function getRestaurantDetails(){
        const data=await fetch(RES_CDN_URL+resId);
        const json=await data.json();
        setrestaurant(json?.data)
    }

    return restaurant;
}