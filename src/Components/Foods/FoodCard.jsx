import React from "react";
import './FoodCard.css'
 function FoodCard({url, name, price}){
    return (
        <div className="Foodcard">
            <img src={url}/>
            <h3>{name}</h3>
            <h4>{price}</h4>
        </div>
    )
 }
 export default FoodCard;