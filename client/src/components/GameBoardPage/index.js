import React from "react";
import Card from "../Card";
import "./gameboard.css";
import GameNavBar from "../Navbars/GameNavBar";

function Gameboard() {
  return (
    <div className="box">
      <GameNavBar />
      <Card />
    </div>
  );
}

export default Gameboard;
