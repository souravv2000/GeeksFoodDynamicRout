import React from "react";
import { FaRegStar } from "react-icons/fa";
import './RestaurantCard.css'

function RestaurantCard({
    address,
    name,
    outcode,
    postcode,
    rating,
    type_of_food,
    URL,}){
        let stars = [];
        for(let i=0;i<rating;i++){
            stars.push(<FaRegStar />);
        }
    return (
        <>
        <div className="card">
            <div className="title">
                <h2>{name}</h2>
                <div className="star">{stars}</div>
            </div>
            <p className="address">{address}</p>
            <div className="address-code">
                <p>{outcode}</p>
                <p>{postcode}</p>
            </div>
            <div className="menuPart">
                <div className="menu">
                <p>{type_of_food}</p>
                <a href={URL}>Visit Menu</a>
                </div>
            </div>
        </div>
        </>
    )
}
export default RestaurantCard;