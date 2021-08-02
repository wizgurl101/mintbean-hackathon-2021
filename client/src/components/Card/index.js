import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  GridItem,
  Button,
  HStack,
  Container,
  Text,
} from "@chakra-ui/react";
import "./Card.css";
import { updateUserGameStat } from "../../store/session";

function Card() {
  const [deck, setDeck] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerValue, setDealerValue] = useState(0);
  const [playerValue, setPlayerValue] = useState(0);
  const [disable, setDisable] = useState(false);
  const [hide, setHide] = useState(false);
  const [playingGame, setPlayingGame] = useState(false);
  const [hideButton, setHideButton] = useState(true);
  const [youWin, setYouWin] = useState(false);
  const [youLose, setYouLose] = useState(false);
  const [Tie, setTie] = useState(false);
  // const [winScore, setWinScore] = useState(21);

  // get user from the state to update their game stat when they win
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

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
  }, [playingGame]);

  const dealCards = () => {
    setYouWin(false);
    setYouLose(false);
    setTie(false);
    setPlayingGame(true);
    setHideButton(false);
    setHide(true);
    setDisable(true);
    // console.log(deck);
    setDealerHand([]);
    setPlayerHand([]);
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
    // startSolo();
    setHideButton(true);
    setDisable(false);
    setPlayingGame(false);
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

  useEffect(() => {
    if (playerValue === 21 && dealerValue === 21) {
      console.log("It's a tie!");
      setTie(true);
      gameOver();
    }
  }, [playerValue, dealerValue]);

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
  }, [dealerHand.length, playingGame]);

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

    if (playerVal > 21) {
      console.log("You lose!");
      setYouLose(true);
      gameOver();
    }

    if (playerVal === 21) {
      console.log("You win!");
      setYouWin(true);
      gameOver();
    }
  }, [playerHand.length, playingGame]);

  // On a player hold we check conditionals to determine winner
  const hold = () => {
    let playerCopy = playerValue;
    let dealerCopy = dealerValue;
    let dealerHandCopy = dealerHand;
    let deckCopy = deck;

    while (playerCopy >= dealerCopy && dealerCopy < 21) {
      let card = deckCopy[0];
      let temp = deckCopy.slice(1);
      let temp2 = dealerHandCopy;
      temp2.push(card);
      dealerHandCopy = temp2;

      let num = dealerHandCopy[dealerHandCopy.length - 1].split(".")[0];
      if (num === "J" || num === "Q" || num === "K") {
        dealerCopy += 10;
      } else if (num === "A") {
        dealerCopy += 11;
      } else {
        dealerCopy += Number(num);
      }

      setDealerHand(temp2);
      setDeck(temp);
      console.log(dealerCopy, "dealer");
      console.log(playerCopy, "player");
    }

    if (dealerCopy < playerCopy || dealerCopy > 21) {
      console.log("You win!");
      setYouWin(true)
      dispatch(updateUserGameStat(user));
      gameOver();
    } else {
      console.log("You lose!");
      setYouLose(true)
      gameOver();
    }
  };

  return (
    <Container mt={16} centerContent>
      <HStack mb={8}>
        <Button size="lg" mr={16} disabled={disable} onClick={dealCards}>
          Start Game
        </Button>
        <Button disabled={hideButton} size="md" onClick={hitMe}>
          Hit!
        </Button>
        <Button disabled={hideButton} size="md" ml={16} onClick={hold}>
          Hold
        </Button>
      </HStack>

      {playerValue > 0 && (
        <Text fontSize="xl" textColor="white">
          Player: {playerValue}, Dealer: {dealerValue}
        </Text>
      )}
      <Grid
        hidden={hide}
        bg="#EDF2F7"
        color="teal"
        w="100px"
        h="150px"
        border="2px"
        borderRadius="10"
        fontSize="2xl"
        templateRows="repeat(3, 1fr)"
      >
        <GridItem />
        <GridItem align="center">Deck</GridItem>
        <GridItem />
      </Grid>
      <h1 className="player_description">Dealer Cards</h1>
      <div className="card_display">
        {dealerHand.length > 0 &&
          dealerHand.map((card) => (
            <Grid
              bg="#EDF2F7"
              color="teal"
              w="100px"
              h="150px"
              border="1px"
              borderRadius="10"
              fontSize="2xl"
              templateRows="repeat(3, 1fr)"
            >
              <GridItem align="left" ml={2}>
                {card.split(".")[0]}
              </GridItem>
              <GridItem align="center">{card.split(".")[1]}</GridItem>
              <GridItem align="left" mr={2} mt={4} transform="rotateY(180deg)">
                {card.split(".")[0]}
              </GridItem>
            </Grid>
          ))}
      </div>
      <h1 className="player_description">Player Hand</h1>
      <div className="card_display">
        {playerHand.length > 0 &&
          playerHand.map((card) => (
            <Grid
              bg="#EDF2F7"
              color="teal"
              w="100px"
              h="150px"
              border="1px"
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
      <div className="status_text">
        {youWin && <h1 disabled={youWin}>You Win!</h1>}
        {youLose && <h1 disabled={youLose}>You Lose!</h1>}
        {Tie && <h1 disabled={Tie}>Tie!</h1>}
      </div>
    </Container>
  );
}

export default Card;
