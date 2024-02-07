import "./style.css";
function NavBar() {
  return (
    <>
      <header className="headerStyle">
        <div className="logoStyle">Hungry Meal</div>
        <nav className="navStyle">
          <a href="src\Hero.js">Home</a>
          <a href="src\Main.js">Categories</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
