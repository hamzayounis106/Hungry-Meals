import { useEffect, useState, createContext } from "react";
import axios from "axios";
import CategoryMeals from "./CategoryMeals";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css";
export const CategoryURL = createContext();

function Main() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const mainCategoriesURL =
      "https://www.themealdb.com/api/json/v1/1/categories.php";
    axios
      .get(mainCategoriesURL)
      .then((response) => setData(response.data.categories));
  }, []);

  const Menu_into = document.querySelector('.Menu_into');
  const visitCategory = (strCategory) => {
    const categoryList = document.querySelector('.main-container');
    Menu_into.style.display = 'none';
    if (categoryList) {
      categoryList.scrollIntoView({ behavior: 'smooth' });
    }
    setCategory(strCategory);
    document.body.scrollTop = 0;
  };

  return (
    <div className="main-container">
      <div className="Menu_into">
        <h2>Indulge in Culinary Delights</h2>
        <p>
          Explore a symphony of flavors at our restaurant, where every dish
          tells a story of passion and creativity. From savory appetizers to
          decadent desserts, savor unforgettable dining experiences that will
          tantalize your taste buds.
        </p>
      </div>

      <TransitionGroup>
        {category ? (
          <CSSTransition key={category} timeout={500} classNames="fade">
            <CategoryURL.Provider
              value={`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`}
            >
              <CategoryMeals
                goback={() => {
                  document.body.scrollTop = 0;
                  Menu_into.style.display = 'flex';
                  setCategory(null);
                }}
              />
            </CategoryURL.Provider>
          </CSSTransition>
        ) : (
          <CSSTransition key="main" timeout={500} classNames="fade">
            <div className="category-list">
              {data.map(
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
              )}
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
}

export default Main;
