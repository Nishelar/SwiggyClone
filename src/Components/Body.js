import { RestaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

const Body=()=>{
    const searchTxt="KFC";
    return(
    <>    
    <div className="search-container">
        <input 
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchTxt}
        /> 
    </div>    
    <div className="Restaurant-list">
        {
            RestaurantList.map(restaurant=>{
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
            })
        }
    </div>
    </>
    )
}
export default Body;