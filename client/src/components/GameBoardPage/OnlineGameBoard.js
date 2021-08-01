import React, { useEffect, useState } from "react";
import GameBoard from "./index";

// socket.io-client
import { io } from "socket.io-client";
const SERVER = "http://localhost:8000";

function OnlineGameBoard() {
  // TODO: message from socket io server, just for testing
  const [response, setResponse] = useState("");

  useEffect(() => {
    // setup socket client
    const socket = io(SERVER);

    socket.on("message", (message) => {
      setResponse(message);
    });
  }, []);

  return (
    <>
      <GameBoard />
      <p>Socket Server message: {response}</p>
    </>
  );
}

export default OnlineGameBoard;
