import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GameBoard from "./index";
import { socket, socketID } from "../utils";

function OnlineGameBoard() {
  const user = useSelector((state) => state.session.user);
  const [myRoom, setMyRoom] = useState("");

  socket.on("myroom", (room) => {
    setMyRoom(myRoom);
    console.log(myRoom);
  });

  socket.on("message", (message) => {
    console.log(message);
  });

  // On load of online board join a room
  useEffect(() => {
    if (user) {
      socket.emit("join", user);
    }
  }, []);

  return (
    <>
      <GameBoard />
    </>
  );
}

export default OnlineGameBoard;
