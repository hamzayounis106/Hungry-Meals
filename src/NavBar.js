import "./style.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
   
      <header className="headerStyle">
        <div className="logoStyle">Hungry Meal</div>
        <nav className="navStyle">
          <Link to="/">Home</Link>
          <Link to="/main" className="linkStyle">Categories</Link>

          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
  
  );
}

export default NavBar;
