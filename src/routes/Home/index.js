// import { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Home() {
// const {navigate} = useNavigate('')
// const [isMove,setMove] = useState(false)

// // console.log(useNavigate)
// const routeChange  = ()=> {
//   setMove(true)
// }

// if (isMove) {
//   return navigate('/products')
// }
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
      {/* <div>
        <img src='myposter.png' alt="poster" className="wall-poster" loading="lazy"/>
      </div> */}
    </div>
  );
}

export default Home;
