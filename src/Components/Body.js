import { RestaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";


const Body=()=>{
    function filterData(searchTxt,restaurants){
       return  restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase()));
    }
    const [allrestaurants,setAllrestaurants]=useState([]);
    const [filteredRestaurants,setfilteredRestaurants]=useState([]);
    const [searchTxt,setSearchTxt]=useState("")

    async function getRestauarants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183307&lng=72.9780897&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        setAllrestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    useEffect(()=>{
       getRestauarants()
    },[])

    if(!allrestaurants) return null;

    return allrestaurants?.length===0 ? (<Shimmer/>) : (
    <>    
    <div className="search-container">
        <input 
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchTxt}
        onChange={(event)=>{
            setSearchTxt(event.target.value);
        }}
        />
        <button className="search-btn" onClick={()=>{
            const data=filterData(searchTxt,allrestaurants);
            setfilteredRestaurants(data);
        }}>Search - {searchTxt}</button>  
    </div>    
    <div className="Restaurant-list">
        {
            filteredRestaurants.map(restaurant=>{
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
            })
        }
    </div>
    </>
    )
}
export default Body;