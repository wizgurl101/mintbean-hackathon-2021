import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GameBoard from "./index";
import { socket, socketID } from "../utils";

function OnlineGameBoard() {
  const user = useSelector((state) => state.session.user);
  const [myRoom, setMyRoom] = useState("");
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
 /*
  * Create the deck
  * Create player one and player two hands
  * Set logic for hit and hold on both players (disabling buttons if not your turn etc)
  * Set a value for playerOne won and PlayerTwo won. First to make the boolean true sends
    info to the backend to increment their win score by 1 and also show a banner saying who won
  * A lot of sockets to pass the info back and forth for hitting and holding to all players in the same room
 */

  // Receive info for the room we are in
  socket.on("myroom", (room) => {
    setMyRoom(myRoom);
    console.log(myRoom);
  });

  // Message that announces when a player has joined a room and what room
  socket.on("message", (message) => {
    console.log(message);
  });

  // Declare player one from socket
  socket.on("playerOneJoin", (player) => {
    setPlayerOne(player);
  });

  // Declare player two from socket
  socket.on("playerTwoJoin", (player) => {
    setPlayerTwo(player);
  });

  // On load of online board join a room
  useEffect(() => {
    if (user) {
      socket.emit("join", user);
    }
  }, []);

  // set conditionals in jsx for what to show on the board. For example if playerOne
  // Then buttons to hold and draw will show up.
  // As well as keep track of turns.
  // if not players turn then buttons are disabled.

  return (
    <>
      <GameBoard />
      <div>{playerOne && <h1>First Player! Welcome {playerOne}</h1>}</div>
      <div>{playerTwo && <h1>Second Player! Welcome {playerTwo}</h1>}</div>
    </>
  );
}

export default OnlineGameBoard;
