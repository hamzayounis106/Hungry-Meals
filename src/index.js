import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero
                heading="Welcome Foodies"
                paragraph="Discover delicious and healthy recipes"
                bgImageURL="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <Main />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/main" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  </Router>
);
