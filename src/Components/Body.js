import { RestaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper";
import useOnline from "../Utils/useOnline";


const Body=()=>{

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

    const isOnline=useOnline();


    if(!isOnline){
        return (<h1>Something Wrong!Please Check Internet Connection🫥</h1>)
    }
    if(!allrestaurants) return null;

    return allrestaurants?.length===0 ? (<Shimmer/>) : (
    <>    
    <div className="p-4 bg-transparent text-center text-white bg-orange-100 ">
        <input 
        type="text"
        className="search-input bg-orange-100 rounded-md py-2 px-4 text-black"
        placeholder="Search"
        value={searchTxt}
        onChange={(event)=>{
            setSearchTxt(event.target.value);
        }}
        />
        <button className="px-5 mx-5 bg-green-600 rounded-md py-2" onClick={()=>{
            const data=filterData(searchTxt,allrestaurants);
            setfilteredRestaurants(data);
        }}>Search {searchTxt}</button>  
    </div>    
    <div className="flex flex-wrap px-8 mx-20 my-2">
        {
            filteredRestaurants?.length===0 ? (<h1>No restaurant found with name {searchTxt}</h1>) :
            (filteredRestaurants.map(restaurant=>{
                return (<Link to={"/restaurants/"+restaurant.data.id} key={restaurant?.data?.id}><RestaurantCard  {...restaurant.data} /></Link>)
            }))
        }
    </div>
    </>
    )
}
export default Body;