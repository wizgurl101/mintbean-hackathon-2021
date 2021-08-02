import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WebIcon from "@material-ui/icons/Web";

import "./About.css";
import GameNavBar from "../Navbars/GameNavBar";

function About() {
  return (
    <div>
      <GameNavBar />
      <div className="about_container">
        <div className="about_box">
          <span></span>
          <div className="about_content">
            <div>
              <h1>Jairo Calderon</h1>
            </div>
            <div className="about_icons">
              <a href="https://github.com/JairoCal">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/jairo-calderon-44512ba5/">
                <LinkedInIcon />
              </a>
              <a href="https://jairocal.github.io/Portfolio/">
                <WebIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="about_box">
          <span></span>
          <div className="about_content">
            <div>
              <h1>Jairo Calderon</h1>
            </div>
            <div className="about_icons">
              <a href="https://github.com/JairoCal">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/jairo-calderon-44512ba5/">
                <LinkedInIcon />
              </a>
              <a href="https://jairocal.github.io/Portfolio/">
                <WebIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="about_box">
          <span></span>
          <div className="about_content">
            <div>
              <h1>Nhu Phan</h1>
            </div>
            <div className="about_icons">
              <a href="https://github.com/wizgurl101">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/nhu-phan-canada/">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
