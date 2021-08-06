import React, { useEffect, useState } from "react";
import GameBoard from "./index";
import {socket, socketId} from '../utils'

function OnlineGameBoard() {
  // setup socket client
  // const socket = io(SERVER);

  // const getPlayerValue = (value) => {
  //   setPlayerValue(value);
  // };

  useEffect(() => {
    // socket.on("message", (message) => {});

    // console.log(value, "value");
    // socket.emit("playerValue", playerValue);

    // console.log("player value: " + playerValue);
  }, []);

  return (
    <>
      <GameBoard />
    </>
  );
}

export default OnlineGameBoard;
