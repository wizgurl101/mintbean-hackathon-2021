import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WebIcon from "@material-ui/icons/Web";
import { Text } from "@chakra-ui/react";

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
              <Text fontSize="2xl">Jairo Calderon</Text>
            </div>
            <div className="about_icons">
              <a href="https://github.com/JairoCal" target="_blank">
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/jairo-calderon-44512ba5/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a href="https://jairocal.github.io/Portfolio/" target="_blank">
                <WebIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="about_box">
          <span></span>
          <div className="about_content">
            <div>
              <Text fontSize="2xl">Maira Garcia</Text>
            </div>
            <div className="about_icons">
              <a href="https://github.com/mairagee524">
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/mairagarcia524/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://mairagee524.github.io/portfolio/"
                target="_blank"
              >
                <WebIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="about_box">
          <span></span>
          <div className="about_content">
            <div>
              <Text fontSize="2xl">Nhu Phan</Text>
            </div>
            <div className="about_icons">
              <a href="https://github.com/wizgurl101" target="_blank">
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/nhu-phan-canada/"
                target="_blank"
              >
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
