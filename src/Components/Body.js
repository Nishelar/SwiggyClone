import { RestaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";


const Body=()=>{
    function filterData(searchTxt,restaurants){
       return  restaurants.filter((restaurant)=>restaurant?.data?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase()));
    }
    const [restaurants,setrestaurants]=useState(RestaurantList);
    const [searchTxt,setSearchTxt]=useState("")

    async function getRestauarants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183307&lng=72.9780897&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json();
        setrestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    useEffect(()=>{
       getRestauarants()
    },[])


    return(
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
            const data=filterData(searchTxt,restaurants);
            setrestaurants(data);
        }}>Search - {searchTxt}</button>  
    </div>    
    <div className="Restaurant-list">
        {
            restaurants.map(restaurant=>{
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
            })
        }
    </div>
    </>
    )
}
export default Body;