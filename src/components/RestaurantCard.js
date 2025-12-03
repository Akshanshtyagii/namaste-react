// import { CDN_URL } from "../utils/constants";

import { CDN_URL } from "../utils/constants.js";

const default1=CDN_URL ;

const RestaurantCard = (props) => {

  const {name ,cuisines,avgRating,slaString,costForTwo,image}=props.resData;

   console.log(default1+image);
  return (
    <div className="res-card">

      <img className="res-logo" 
      alt="res-logo"
       src={default1+image} />
      
     <h3>{name}</h3>
     <h4>{cuisines.join(", ")}</h4>
     <h4>{avgRating}</h4>
     <h4>{slaString}</h4>
     <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;