import React from "react";
import FoodData from './Foods.json'
import FoodCard from "./FoodCard";
import './Foods.css'
import { Link } from "react-router-dom";


function Foods(){
    
    return(
        <>
          <div className="FoodsMenu">
             {
                FoodData.map((item, index)=>(
                    <Link style={{textDecoration:"none"}}to={`/food-detail/${item.id}`}> <FoodCard foodId={item.id} url={item.url} 
                                     name={item.name}
                                     price={item.price}
                                    />
                                     </Link>
                ))
             }
          </div>
        </>
    )
}
export default Foods;