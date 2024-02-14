import React from "react";
import Lottie from "lottie-react";
import animationData from "./Animation/AboutPageAnimation.json";
import "./style.css";

function About() {
  return (
    <>
      <div className="about_div">
        <div className="animation_div">
          <Lottie animationData={animationData} />
        </div>
        <div className="about_text_div">
          <h2>About Us</h2>
          <p>
            Welcome to our culinary haven, where every dish is a narrative woven
            with passion and creativity. At our kitchen, we're dedicated to
            crafting not just meals, but experiences that tantalize the senses
            and spark joy in every bite. Our journey began with a shared love
            for food and a desire to explore its infinite possibilities. From
            humble beginnings to culinary adventures, we've curated a collection
            of recipes that reflect our commitment to innovation and excellence.
            Join us as we share the stories behind each creation, inviting you
            to embark on a flavorful voyage that celebrates the artistry of
            cooking. Whether you're a seasoned chef or an aspiring home cook,
            there's something here for everyone to savor and enjoy. Indulge your
            curiosity, awaken your taste buds, and let our recipes inspire your
            culinary exploration.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
