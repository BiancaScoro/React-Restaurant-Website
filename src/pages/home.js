import React from "react";
import { Link } from "react-router-dom";
import BannerImage from '../assets/pasta.jpg';
import "../styles/Home.css"

function Home() {
    return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}> 
        <div className="headerContainer">
            <h1>Super Restaurant</h1>
            <p>Italian Foods from the Heart</p>
            <Link to="/menu">
            <button>View Menu</button>
            </Link>
        </div>
    </div>
  );
}

export default Home;
