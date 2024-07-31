import restaurants from "./data";
import React from "react";
import { useState }  from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBox from "./SearchBox";
import RatingFilter from "./RatingFilter";
import './Restaurants.css'

function Restaurants(){
    const [searchKey, setSearchKey] = useState('');
    const [rating, setRating] = useState(0);

   let filteredRestaurants = restaurants.filter((restaurant) => restaurant.rating >= rating);

   if(searchKey !== ''){
    filteredRestaurants= restaurants.filter((restaurant) =>
       restaurant.name.toLowerCase().includes(searchKey.trim().toLowerCase())
    );
   }
     
    return (
        <>
        <div className="RestaurantPage">
            <div className="filter">
           <SearchBox onType={(SearchKey)=> setSearchKey(SearchKey)}/>

            <RatingFilter onChange={(ratingCount)=>{
                setRating(ratingCount)
            }}/>
            </div>
            <div className="restaurants">
                {
                    filteredRestaurants.map((res)=>{
                    return <RestaurantCard {...res}/>
                 } )}  
            </div>
        </div>
        </>
    )
}
 export default Restaurants;