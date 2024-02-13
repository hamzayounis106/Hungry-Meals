import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
// import RecipeDetails from "./Recipe";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Header  />
    {/* <RecipeDetails /> */}
    <Hero heading="Welcome Foodies" paragraph="Discover delicious and healthy recipes" bgImageURL="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    <Main />
    <Footer />
  </>
);
