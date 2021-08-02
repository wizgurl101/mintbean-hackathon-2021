import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Navbar from "../Navbars/Navbar";

function Home() {
  return (
    <div className="main">
      <Navbar />
      <Link to="/about">
        <button className="developers">Development Team</button>
      </Link>
    </div>
  );
}

export default Home;
