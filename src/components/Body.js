import resobj from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
    const [restaurants, setRestaurants]=useState(resobj);
return (
  <div className="body">
    <div className="filter">
        <button className="filter-btn" 
        onClick={()=>{
            const filteredList= resobj.filter(
                (res)=>res.avgRating>4
            );
            setRestaurants(filteredList);
            // resobj=resobj.filter((res)=>res.avgRating>4);
            // console.log(resobj);
        }}>Top Rated Restaurants</button>
    </div>
    <div className="res-container">

      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} resData={restaurant} />
      ))}

    </div>
  </div>  
);
};

export default Body;