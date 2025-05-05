import "./index.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <div className="home-banner">
        <h1>Welcome to Pickle Jar</h1>
        <p>Fresh, Homemade Pickles Delivered to Your Door</p>
        <Link className="home-button-container" to='/products'>
          <button type="" className="home-btn">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
