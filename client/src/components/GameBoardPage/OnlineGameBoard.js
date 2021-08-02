import React, { useEffect, useState } from "react";
import GameBoard from "./index";

// socket.io-client
import { io } from "socket.io-client";
const SERVER = "http://localhost:8000";

function OnlineGameBoard() {
  // setup socket client
  const socket = io(SERVER);

  const [playerValue, setPlayerValue] = useState(0);
  const [value, setValue] = useState(0)

  const getPlayerValue = (value) => {
    setPlayerValue(value);
  };

  useEffect(() => {
    socket.on("message", (message) => {
    });
    
    console.log(value, 'value')
    // socket.emit("playerValue", playerValue);

    // console.log("player value: " + playerValue);
  }, []);

  return (
    <>
      <GameBoard sendPlayerValue={getPlayerValue} />
    </>
  );
}

export default OnlineGameBoard;
