import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";


// // /**
//  * Header
//  *  - Logo
//  *  - Nav Items
//  * Body
//  *  - Search
//  *  - RestaurantContainer
//  *      - RestaurantCard
//  *        - Img
//  *        - Name of Restaurant, Star Rating, cuisine, delivery time
//  * Footer
//  *  - Copyright
//  *  - Links
//  *  - Address
//  *  - Contact
//  */


//props are like arguments to a function -> react wraps all these props in a single object and send it to the component
const Header = () => {
return(
  <div className="header">

    <div className="logo-container">
      <img className="logo" src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg" />
    </div>

    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li> 
      </ul>
    </div>

  </div>
);
};

const resobj = [
  {
    id: "856182",
    name: "Perilicious- Smash Burgers and Grill",
    image: "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/23/959bd58a-f152-470e-a076-309724d8c7fd_856182.jpg",
    locality: "Malviya Nagar",
    areaName: "Malviya Nagar",
    costForTwo: "₹500 for two",
    cuisines: ["American", "Burger", "Grill", "Fast Food", "Healthy Food", "Desserts", "Beverages"],
    avgRating: 4.3,
    totalRatings: "337",
    promoted: true,
    deliveryTime: 50,
    lastMileTravel: 7.6,
    slaString: "45-50 mins",
    isOpen: true,
    nextCloseTime: "2025-11-30 03:00:00",
    discount: { header: "₹125 OFF", subHeader: "ABOVE ₹549", tag: "FLAT DEAL" },
    link: "swiggy://menu?restaurant_id=856182&source=collection&query=Burger"
  },
  {
    id: "1009550",
    name: "Burgerama",
    image: "FOOD_CATALOG/IMAGES/CMS/2025/5/28/3ddb6852-2d5b-4535-8436-1f0550e937fb_dd4295ba-fef5-438d-8ed2-619a497d830a.jpg",
    locality: "Mehrauli",
    areaName: "Malviya Nagar",
    costForTwo: "₹700 for two",
    cuisines: ["Burgers", "American"],
    avgRating: 4.5,
    totalRatings: "199",
    promoted: true,
    deliveryTime: 42,
    lastMileTravel: 6.1,
    slaString: "40-45 mins",
    isOpen: true,
    nextCloseTime: "2025-11-29 23:59:00",
    discount: { header: "50% OFF", subHeader: "UPTO ₹100" },
    link: "swiggy://menu?restaurant_id=1009550&source=collection&query=Burger"
  },
  {
    id: "383738",
    name: "BOSS Burger",
    image: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/16/93d03422-e569-46e0-9fba-65dec9af96dd_383738.jpg",
    locality: "Malviya Nagar",
    areaName: "Saket",
    costForTwo: "₹500 for two",
    cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
    avgRating: 4.3,
    totalRatings: "453",
    promoted: true,
    deliveryTime: 56,
    lastMileTravel: 7.3,
    slaString: "55-65 mins",
    isOpen: true,
    nextCloseTime: "2025-11-29 23:45:00",
    discount: { header: "ITEMS", subHeader: "AT ₹165" },
    link: "swiggy://menu?restaurant_id=383738&source=collection&query=Burger"
  },
  {
    id: "8840",
    name: "Smoke House Deli",
    image: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/21/9b87c0f2-d219-48eb-9728-7ec0b9e42c75_8840 (1).jpg",
    locality: "Saket",
    areaName: "Saket",
    costForTwo: "₹600 for two",
    cuisines: ["Pizzas", "Pastas", "Italian", "Salads", "Burger", "Desserts"],
    avgRating: 4.2,
    totalRatings: "1.6K+",
    promoted: true,
    deliveryTime: 60,
    lastMileTravel: 7.2,
    slaString: "55-65 mins",
    isOpen: true,
    nextCloseTime: "2025-11-29 23:45:00",
    discount: { header: "ITEMS", subHeader: "AT ₹199" },
    link: "swiggy://menu?restaurant_id=8840&source=collection&query=Burger"
  },
  {
    id: "121916",
    name: "Burgrill - OG's of Grilled Burger",
    image: "FOOD_CATALOG/IMAGES/CMS/2024/8/16/45be0dec-6f81-4f4c-a342-dfdac233362c_e3a474eb-9204-4806-b2bf-9b9528c1b381.png_compressed",
    locality: "Hauz Khas",
    areaName: "Hauz Khas",
    costForTwo: "₹250 for two",
    cuisines: ["Burgers", "Healthy Food", "American", "Salads", "Beverages", "Desserts", "Snacks"],
    avgRating: 4.5,
    totalRatings: "14K+",
    promoted: true,
    deliveryTime: 40,
    lastMileTravel: 7,
    slaString: "35-40 mins",
    isOpen: true,
    nextCloseTime: "2025-11-30 05:00:00",
    discount: { header: "ITEMS", subHeader: "AT ₹59" },
    link: "swiggy://menu?restaurant_id=121916&source=collection&query=Burger"
  },
  {
    id: "768470",
    name: "Wendy's Burgers",
    image: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/ae7829ec-819b-4956-b2f1-8d5cd7941243_768470.JPG",
    locality: "Guru Gobind Singh Marg",
    areaName: "Malviya Nagar",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
    avgRating: 4.2,
    totalRatings: "2.9K+",
    promoted: true,
    deliveryTime: 46,
    lastMileTravel: 6.8,
    slaString: "45-50 mins",
    isOpen: true,
    nextCloseTime: "2025-11-29 23:59:00",
    discount: { header: "ITEMS", subHeader: "AT ₹59" },
    link: "swiggy://menu?restaurant_id=768470&source=collection&query=Burger"
  }
];

const default1="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

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

const Body = () => {
return (
  <div className="body">
    <div className="Search">Search</div>
    <div className="res-container">

      {resobj.map((restaurant) => (
        <RestaurantCard key={restaurant.id} resData={restaurant} />
      ))}
     

    </div>
  </div>  
);
};

const Footer=() => {
return (
  <div className="footer">
    <div>
      <h2>This is the Footer</h2>
    </div>

  </div>
);
};
const AppLayout = () => {
return (
 <div className="app">
  <Header />
  <Body />
  <Footer />
 </div>    
);
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);