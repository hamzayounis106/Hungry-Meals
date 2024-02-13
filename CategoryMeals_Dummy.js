import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CategoryURL } from "./Main";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css";

function CategoryMeals({ goback }) {
  const [data, setData] = useState([]);
  const URL = useContext(CategoryURL);

  useEffect(() => {
    axios.get(URL).then((response) => setData(response.data.meals));
  }, [URL]);

  const mealsList = data.map(({ strMeal, strMealThumb, idMeal }) => (
    <section key={idMeal} className="meal-item">
      <img src={strMealThumb} alt={strMeal} className="meal-image" />
      <div>
        <h2 className="meal-title">{strMeal}</h2>
        <p className="meal-id">{idMeal}</p>
      </div>
    </section>
  ));

  const handleGoBack = () => {
    // Scroll to the top of the category-list
    const categoryList = document.querySelector('.sub-container');
    if (categoryList) {
      categoryList.scrollIntoView({ behavior: 'smooth' });
    }

    // Call the provided go back function
    goback();
  };

  return (
    <div className="meals-container">
      <div className="sub-container">
        <TransitionGroup component={null}>
          {mealsList.map((meal) => (
            <CSSTransition key={meal.key} timeout={500} classNames="fade">
              {meal}
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      <button onClick={handleGoBack}>Go to Main Categories</button>
    </div>
  );
}

export default CategoryMeals;
