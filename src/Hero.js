import React from "react";
import "./style.css";

const Hero = ({ heading, paragraph, bgImageURL }) => {
  return (
    <div className="heroStyle" style={{ backgroundImage: `url(${bgImageURL})` }}>
      <div className="hero_stufff">
        <h1 className="headingStyle">{heading}</h1>
        <p className="paragraphStyle">{paragraph}</p>
      </div>
    </div>
  );
};

export default Hero;
