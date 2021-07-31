import React, { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";

function Card() {
  const [deck, setDeck] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerValue, setDealerValue] = useState(0);
  const [playerValue, setPlayerValue] = useState(0);
  const [winScore, setWinScore] = useState(21);

  // On start of a solo game
  const startSolo = () => {
    // J,Q,K = 10 & A = 11 OR 1
    let tempDeck = [];
    let cardVal = [
      "2.",
      "3.",
      "4.",
      "5.",
      "6.",
      "7.",
      "8.",
      "9.",
      "10.",
      "J.",
      "Q.",
      "K.",
      "A.",
    ];
    let suits = ["♣", "♥", "♠", "♦"];
    for (let i = 0; i < cardVal.length; i++) {
      let cardV = cardVal[i];
      for (let j = 0; j < suits.length; j++) {
        let cardT = suits[j];
        let card = cardV + cardT;
        tempDeck.push(card);
      }
    }
    // call a helper function to shuffle our deck
    shuffleDeck(tempDeck);
  };

  // Will trigger deck to be made upon loading into the page
  useEffect(() => {
    startSolo();
  }, []);

  const dealCards = () => {
    // Assign the cards that will be handed out to the player and dealers for game to start
    let playerCard1 = deck[0];
    let dealerCard1 = deck[1];
    let playerCard2 = deck[2];
    let dealerCard2 = deck[3];
    // hand cards out to player and dealer
    setPlayerHand([playerCard1, playerCard2]);
    setDealerHand([dealerCard1, dealerCard2]);
    // Update the deck being used
    let updatedDeck = deck.slice(4);
    setDeck(updatedDeck);
    // valueCounter();
  };

  const shuffleDeck = (array) => {
    // iterate through every card from end to start
    for (let i = array.length - 1; i > 0; i--) {
      // get a random index from which we will flip with the current index
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setDeck(array);
  };

  // GameOver resets all values (function is called when round is over)
  const gameOver = () => {
    setPlayerValue(0);
    setDealerValue(0);
    setDealerHand([]);
    setPlayerHand([]);
  };

  // removes card from deck and brings it to players card
  const hitMe = () => {
    let card = deck[0];
    let temp = deck.slice(1);
    let temp2 = playerHand;
    temp2.push(card);
    setPlayerHand(temp2);
    setDeck(temp);
    console.log(playerHand);
  };

  // Will constantly keep track of dealers hand and sum up the value
  useEffect(() => {
    let dealerVal = 0;
    // Loop through the cards of the dealer and player to grab their values
    for (let i = 0; i < dealerHand.length; i++) {
      let num = dealerHand[i].split(".")[0];
      if (num === "J" || num === "Q" || num === "K") {
        dealerVal += 10;
      } else if (num === "A") {
        dealerVal += 11;
      } else {
        dealerVal += Number(num);
      }
    }
    setDealerValue(dealerVal);
  }, [dealerHand.length]);

    // Will constantly keep track players hand and sum up the value
    useEffect(() => {
      let playerVal = 0;

      for (let i = 0; i < playerHand.length; i++) {
        let num = playerHand[i].split(".")[0];
        if (num === "J" || num === "Q" || num === "K") {
          playerVal += 10;
        } else if (num === "A") {
          playerVal += 11;
        } else {
          playerVal += Number(num);
        }
      }
      setPlayerValue(playerVal);
    }, [playerHand.length]);

  // On a player hold we check conditionals to determine winner
  const hold = () => {
    
  };

  return (
    <div>
      <div>
        <button onClick={hitMe}>Hit!</button>
      </div>
      <div>
        <button onClick={hold}>Hold</button>
      </div>
      <button onClick={dealCards}>Start Game</button>
      {playerValue > 0 && (
        <p>
          Player: {playerValue}, Dealer: {dealerValue}
        </p>
      )}
      {deck.length > 0 &&
        deck.map((card) => (
          <Grid
            bg="#EDF2F7"
            w="100px"
            h="150px"
            border="2px"
            borderRadius="10"
            fontSize="2xl"
            templateRows="repeat(3, 1fr)"
          >
            <GridItem align="left" ml={2}>
              {card.split(".")[0]}
            </GridItem>
            <GridItem align="center">{card.split(".")[1]}</GridItem>
            <GridItem align="right" mr={2} mt={4} transform="rotateX(180deg)">
              {card.split(".")[0]}
            </GridItem>
          </Grid>
        ))}
      <h1>Dealer Cards</h1>
      {dealerHand.length > 0 &&
        dealerHand.map((card) => (
          <Grid
            bg="#EDF2F7"
            w="100px"
            h="150px"
            border="2px"
            borderRadius="10"
            fontSize="2xl"
            templateRows="repeat(3, 1fr)"
          >
            <GridItem align="left" ml={2}>
              {card.split(".")[0]}
            </GridItem>
            <GridItem align="center">{card.split(".")[1]}</GridItem>
            <GridItem align="right" mr={2} mt={4} transform="rotateX(180deg)">
              {card.split(".")[0]}
            </GridItem>
          </Grid>
        ))}
      <h1>Player Hand</h1>
      {playerHand.length > 0 &&
        playerHand.map((card) => (
          <Grid
            bg="#EDF2F7"
            w="100px"
            h="150px"
            border="2px"
            borderRadius="10"
            fontSize="2xl"
            templateRows="repeat(3, 1fr)"
          >
            <GridItem align="left" ml={2}>
              {card.split(".")[0]}
            </GridItem>
            <GridItem align="center">{card.split(".")[1]}</GridItem>
            <GridItem align="right" mr={2} mt={4} transform="rotateX(180deg)">
              {card.split(".")[0]}
            </GridItem>
          </Grid>
        ))}
    </div>
  );
}

export default Card;
