import React, { useEffect, useState } from "react";
import GameBoard from "./index";
import {socket, socketID} from '../utils'

function OnlineGameBoard() {
  console.log(socketID, "my socket id")
  // setup socket client
  // const socket = io(SERVER);

  // const getPlayerValue = (value) => {
  //   setPlayerValue(value);
  // };

  useEffect(() => {
    socket.emit("join")
  }, []);

  return (
    <>
      <GameBoard />
    </>
  );
}

export default OnlineGameBoard;
