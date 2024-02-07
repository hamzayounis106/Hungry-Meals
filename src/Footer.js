import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Follow us on:</h3>
          <div className="social-icons">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
          </div>
        </div>
        <div className="footer-column">
          <p>
            At our establishment, we're committed to crafting more than just
            meals; we're dedicated to creating memories. With each bite, immerse
            yourself in a world of culinary excellence and hospitality. Thank
            you for choosing us to be a part of your dining journey.
          </p>
          <p>&copy; 2024 Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
