import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import RecipeDetails from "./Recipe";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <RecipeDetails />
    <Hero />
    <Main />
    <Footer />
  </>
);
