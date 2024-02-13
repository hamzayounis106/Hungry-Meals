import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import "./style.css";
import RecipeDetails from "./Recipe"; // Import RecipeDetails component

export const CategoryURL = createContext();

function Main() {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]); // Store original data separately
  const [list, setList] = useState([]);
  const [category, setCategory] = useState("");
  const [URL, setURL] = useState("");
  const [selectedRecipeId, setSelectedRecipeId] = useState(null); // Track the selected recipe id

  useEffect(() => {
    const mainCategoriesURL =
      "https://www.themealdb.com/api/json/v1/1/categories.php";
    axios.get(mainCategoriesURL).then((response) => {
      setData(response.data.categories);
      setOriginalData(response.data.categories); // Set original data
    });
  }, []);

  const visitCategory = (strCategory) => {
    setCategory(strCategory);
    document.body.scrollTop = 0;
    setURL(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
    );
    scrollToMenu();
  };

  useEffect(() => {
    if (URL) {
      axios.get(URL).then((response) => {
        setList(response.data.meals);
        setData(null);
      });
    }
  }, [URL]);

  function handleGoBack() {
    setData(originalData); // Restore original data
    setList([]); // Clear list
    scrollToMenu();
  }

  function scrollToMenu() {
    const menuSection = document.querySelector(".Menu_into");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Function to handle recipe click
  const handleRecipeClick = (idMeal) => {
    setSelectedRecipeId(idMeal); // Set the selected recipe id
    setList([]); // Clear list
    scrollToMenu();
  };

  return (
    <div className="main-container">
      <div className="Menu_into">
        <h2>Welcome to a Culinary Adventure!</h2>
        <p>Embark on a journey through a plethora of delightful recipes, each telling a unique tale of flavor and culinary innovation. From mouthwatering appetizers to irresistible desserts, discover a treasure trove of recipes that will ignite your passion for cooking and delight your taste buds with every bite.
        </p>
      </div>

      <div className="data_list_section">
        {data ? (
          data.map(
            ({
              idCategory,
              strCategory,
              strCategoryThumb,
              strCategoryDescription,
            }) => (
              <section key={idCategory} className="category-item">
                <img
                  src={strCategoryThumb}
                  alt={strCategory}
                  onClick={() => visitCategory(strCategory)}
                  className="category-image"
                />
                <div className="catergory_data">
                  <h2
                    onClick={() => visitCategory(strCategory)}
                    className="category-title"
                  >
                    {strCategory}
                  </h2>
                  <p className="category-description">
                    {strCategoryDescription}
                  </p>
                </div>
              </section>
            )
          )
        ) : (
          <div className="sub-container">
            <div className="meals_list">
              {list.map(({ strMeal, strMealThumb, idMeal }) => (
                <section
                  key={idMeal}
                  className="meal-item"
                  onClick={() => handleRecipeClick(idMeal)} // Pass the idMeal to the click handler
                >
                  <img
                    src={strMealThumb}
                    alt={strMeal}
                    className="meal-image"
                  />
                  <div>
                    <h2 className="meal-title">{strMeal}</h2>
                    <p className="meal-id">{idMeal}</p>
                  </div>
                </section>
              ))}
            </div>
            <div>
              {selectedRecipeId && <RecipeDetails idMeal={selectedRecipeId} />}
              <button onClick={handleGoBack}>Go to Main Categories</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
