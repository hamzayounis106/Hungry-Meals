import React, { useState, useEffect } from "react";
import axios from "axios";
import './style.css';
function RecipeDetails({idMeal}) {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get(
                   `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
                );
                setRecipe(response.data.meals[0]);
            } catch (error) {
                console.error("Error fetching recipe:", error);
            }
        };

        fetchRecipe();
    }, []);

    if (!recipe) {
        return <div className="recipe-details">Loading...</div>;
    }

    return (
        <div className="recipe-details">
            <h1 className="recipe-title">{recipe.strMeal}</h1>
            <img className="recipe-image" src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h2 className="ingredients-title">Ingredients:</h2>
            <ul className="ingredients-list">
                {Object.keys(recipe).map((key) => {
                    if (key.includes("strIngredient") && recipe[key]) {
                        const ingredientNumber = key.slice(13);
                        const measureKey = `strMeasure${ingredientNumber}`;
                        return (
                            <li className="ingredient" key={ingredientNumber}>
                                {recipe[key]} - {recipe[measureKey]}
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
            <h2 className="instructions-title">Instructions:</h2>
            <p className="instructions">{recipe.strInstructions}</p>
            <h2 className="video-title">Video Tutorial:</h2>
            <a className="video-link" href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
                Watch on YouTube
            </a>
        </div>
    );
}

export default RecipeDetails;
