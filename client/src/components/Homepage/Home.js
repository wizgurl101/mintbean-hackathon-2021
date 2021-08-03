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
      <div className="footer">
        <div>
          <i className="devicon-react-original-wordmark colored"></i>
        </div>
        <div>
          <i className="devicon-redux-original colored"></i>
        </div>
        <div>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
        </div>
        <div>
          <i className="devicon-express-original-wordmark colored"></i>
        </div>
        <div>
          <i className="devicon-nodejs-plain-wordmark colored"></i>
        </div>
      </div>
    </div>
  );
}

export default Home;
