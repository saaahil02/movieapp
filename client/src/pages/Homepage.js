import React from "react";
import { useNavigate } from "react-router-dom";
//import "./IntroPage.css"; // Import CSS file
//import bannerImage from "../assets/movie-banner.jpg"; // Make sure to have an image in assets folder
import '../styles/intropage.css';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Welcome to MovieApp</h1>
        <p className="tagline">Your ultimate destination for movie lovers!</p>
      </div>

      {/* Description */}
      <p className="description">
        Discover, explore, and manage your favorite movies with ease. Whether you're an admin or a user, MovieApp provides the best experience for managing your favorite films.
      </p>

      {/* Buttons */}
      <div className="button-container">
        <button className="button" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="button" onClick={() => navigate("/register")}>
          Register
        </button>
      </div>

      {/* Image Banner */}
      {/* <img src={bannerImage} alt="Movies Banner" className="image-banner" /> */}
    </div>
  );
};

export default Homepage;
