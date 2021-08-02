import React from "react";
import Card from "../Card";
import { Box, Button, Stack } from "@chakra-ui/react";
import "./gameboard.css";
import GameNavBar from "../Navbars/GameNavBar";

function LeaderBoard() {
  return (
    <div className="box">
      <GameNavBar />
    </div>
  );
}

export default LeaderBoard;
