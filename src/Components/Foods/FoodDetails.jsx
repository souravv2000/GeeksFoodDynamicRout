import React, { useState, useEffect } from "react";
import FoodData from './Foods.json'; 
import { useParams } from "react-router";
import './FoodDetails.css'

function FoodDetails() {
    const [food, setFood] = useState(null); 
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = () => {
            const foundFood = FoodData.find(item => item.id === parseInt(id)); 
            if (foundFood) {
                setFood(foundFood);
            } else {
                setFood(null);
            }
            setLoading(false);
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="FoodAvailable">
            {food === null ? (
                <p>No data found</p>
            ) : (
                <div className="foodDetails">
                    {food.url && <img src={food.url} alt={food.name} />}
                    <h2>{food.name}</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        {food.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default FoodDetails;
