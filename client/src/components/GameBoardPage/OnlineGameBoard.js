import React, { useEffect, useState } from "react";
import GameBoard from "./index";

// socket.io-client
import { io } from "socket.io-client";
const SERVER = "http://localhost:8000";

function OnlineGameBoard() {
  const [playerValue, setPlayerValue] = useState(0);

  const getPlayerValue = (value) => {
    setPlayerValue(value);
    console.log("Online Board value is " + value);
  };

  useEffect(() => {
    // setup socket client
    const socket = io(SERVER);

    socket.on("message", (message) => {
      console.log(message);
    });

    console.log(playerValue);
  }, []);

  return (
    <>
      <GameBoard sendPlayerValue={getPlayerValue} />
    </>
  );
}

export default OnlineGameBoard;
