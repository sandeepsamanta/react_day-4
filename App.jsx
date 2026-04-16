import React from "react";
import ReactDOM from "react-dom/client";


const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"src="https://static.vecteezy.com/system/resources/thumbnails/055/349/890/small/chef-mascot-logo-design-for-restaurant-cooking-man-tasty-express-food-illustration-vector.jpg"/>
             </div>

             <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>

                </ul>
             </div>
        </div>
    );
};



const ResturentCard=(props)=>{
    //const{resName,cuisine}=props;
    const {resData}=props;
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img 
            className="res-logo"
            alt="res-logo"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
                resData?.info?.cloudinaryImageId
                }
                />
             <h3>{resData?.info?.name}</h3>
            <h4>{resData?.info?.cuisines?.join(",")}</h4>
            <h4>{resData?.info?.avgRating} Rating </h4>
            <h4>{resData?.info?.deliveryTime} minutes</h4>
           
            

        </div>
    )
}

const recObj = [
  {
    "info": {
      "id": 772232,
      "name": "KFC",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/cf2a01ae-f92c-48b3-b12f-1a9d4aa36c83_772232.JPG",
      "locality": "Baguiati",
      "areaName": "Baguihati",
      "costForTwo": "₹400 for two",
      "cuisines": ["Burgers", "Fast Food", "Rolls & Wraps"],
      "avgRating": 4.4,
      "parentId": 547,
      "avgRatingString": 4.4,
      "totalRatingsString": "5.4K+",
      "deliveryTime": 45,
      "sla": {
        
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2026-04-16 04:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            "description": "Best in Bolt"
          },
          {
            "imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
            "description": "Best in Burger"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "discountTag": "FLAT DEAL"
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      }
    }
  },

  {
    "info": {
      "id": 299242,
      "name": "NIC Ice Creams",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/4/a2a5ec8c-ecb6-4224-b18f-6074c0d01e61_299242.JPG",
      "locality": "Leap years",
      "areaName": "Rajarhat",
      "costForTwo": "₹120 for two",
      "cuisines": ["Ice Cream", "Desserts"],
      "avgRating": 4.8,
      "veg": true,
      "parentId": 6249,
      "deliveryTime": 50,
      "avgRatingString": 4.8,
      "totalRatingsString": "10K+"
    }
  },

  {
    "info": {
      "id": 157488,
      "name": "Wow! Momo",
      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/271cdebe-a5d7-480d-aa6f-a50a8481d56b_157488.JPG",
      "locality": "Rajarhat",
      "areaName": "Rajarhat",
      "costForTwo": "₹300 for two",
      "cuisines": ["Momos", "Chinese", "fastfood", "Asian", "Beverages"],
      "avgRating": 4.5,
      "parentId": 1776,
      "avgRatingString": 4.5,
      "deliveryTime": 35,
      "totalRatingsString": "5.8K+"
    }
  },
  {
  "info": {
    "id": 445566,
    "name": "Domino's Pizza",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/11/4/2f9bf471-29e3-47bd-9660-3ea06e79c452_25140.jpg",
    "locality": "Salt Lake",
    "areaName": "Sector V",
    "costForTwo": "₹500 for two",
    "cuisines": ["Pizza", "Italian", "Fast Food"],
    "deliveryTime": 60,
    "avgRating": 4.3,
    "veg": false,
    "parentId": 2456,
    "avgRatingString": "4.3",
    "totalRatingsString": "8K+"
  }
},
{
  "info": {
    "id": 778899,
    "name": "Burger King",
    "cloudinaryImageId":"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/3079cc60-8ee1-4306-8390-fc436f9dc9d5_407661.jpg",
    "locality": "New Town",
    "areaName": "Action Area 1",
    "costForTwo": "₹350 for two",
    "cuisines": ["Burgers", "Fast Food", "Beverages"],
    "deliveryTime": 40,
    "avgRating": 4.2,
    "veg": false,
    "parentId": 166,
    "avgRatingString": "4.2",
    "totalRatingsString": "12K+"
  }
},
{
  "info": {
    "id": 112233,
    "name": "Haldiram's",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/9/f9cb9cc9-5a58-4254-b290-2cc56ee17f73_466935 (1).jpg",
    "locality": "Baguiati",
    "areaName": "VIP Road",
    "costForTwo": "₹250 for two",
    "cuisines": ["North Indian", "Snacks", "Sweets"],
    "deliveryTime": 30,
    "avgRating": 4.5,
    "veg": true,
    "parentId": 351,
    "avgRatingString": "4.5",
    "totalRatingsString": "15K+"
  }
},
{
  "info": {
    "id": 998877,
    "name": "Baskin Robbins",
    "cloudinaryImageId":"RX_THUMBNAIL/IMAGES/VENDOR/2025/11/4/2f9bf471-29e3-47bd-9660-3ea06e79c452_25140.jpg",
    "locality": "Rajarhat",
    "areaName": "City Centre 2",
    "costForTwo": "₹200 for two",
    "cuisines": ["Ice Cream", "Desserts", "Beverages"],
    "deliveryTime": 38,
    "avgRating": 4.6,
    "veg": true,
    "parentId": 5588,
    "avgRatingString": "4.6",
    "totalRatingsString": "6K+"
  }
}
]


const Body=()=>{
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                  
                  {/* <ResturentCard resData={recObj[0]}/>
                  <ResturentCard resData={recObj[1]}/>
                  <ResturentCard resData={recObj[2]}/>
                  <ResturentCard resData={recObj[3]}/>
                  <ResturentCard resData={recObj[4]}/>
                  <ResturentCard resData={recObj[5]}/>
                  <ResturentCard resData={recObj[6]}/> */}

                  {/* or */}

                 {recObj.map((resObj) => (
  <ResturentCard key={resObj.info.id} resData={resObj} />
))}
                    
            </div>
        </div>
    )
}


const AppLayout=()=>{
    return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);