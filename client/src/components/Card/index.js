import React, { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";

import {
  Grid,
  GridItem,
  Button,
  HStack,
  Container,
  Text,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { updateUserGameStat } from "../../store/session";

function Card() {
  const [deck, setDeck] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerValue, setDealerValue] = useState(0);
  const [playerValue, setPlayerValue] = useState(0);
  const [hide, setHide] = useState(false);
  const [isNameShown, setIsNameShown] = useState(false);
  const [disable, setDisable] = useState(false);
  const [playingGame, setPlayingGame] = useState(false);
  const [hideButton, setHideButton] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [youWin, setYouWin] = useState(false);
  const [youLose, setYouLose] = useState(false);
  const [Tie, setTie] = useState(false);

  const handleChange = () => {
    setIsNameShown((prevState) => !prevState);
  };

  // get user from the state to update their game stat when they win
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  // On start of a solo game
  const startSolo = () => {
    setPlayerValue(0);
    setDealerValue(0);
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
    // onOpen()
    setYouWin(false);
    setYouLose(false);
    setTie(false);
    setPlayingGame(true);
    setHideButton(false);
    setHide(true);
    setDisable(true);
    handleChange();
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
    onOpen();
    // setPlayerValue(0);
    // setDealerValue(0);
    // startSolo();
    setHideButton(true);
    setDisable(false);
    setPlayingGame(false);
  };

  const clearScore = () => {
    setPlayerValue(0);
    setDealerValue(0);
    onClose();
  };

  // removes card from deck and brings it to players card
  const hitMe = () => {
    let card = deck[0];
    let temp = deck.slice(1);
    let temp2 = playerHand;
    temp2.push(card);
    setPlayerHand(temp2);
    setDeck(temp);
  };

  useEffect(() => {
    if (playerValue === 21 && dealerValue === 21) {
      console.log("It's a tie!");
      setYouWin(false);
      setYouLose(false);
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
      setYouLose(true);
      gameOver();
    }

    if (playerVal === 21) {
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

    while (playerCopy >= dealerCopy && dealerCopy < 20) {
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

      deckCopy = temp;
      setDealerHand(temp2);
      setDeck(temp);
    }

    if (dealerCopy < playerCopy || dealerCopy > 21) {
      dispatch(updateUserGameStat(user));
      setYouWin(true);
      gameOver();
    } else {
      setYouLose(true);
      gameOver();
    }
  };

  return (
    <Container mt={16} centerContent>
      <HStack mb={8}>
        <Button
          colorScheme="teal"
          size="lg"
          disabled={disable}
          onClick={dealCards}
        >
          Start Game
        </Button>
        <Button
          colorScheme="purple"
          size="md"
          disabled={hideButton}
          size="md"
          onClick={hitMe}
        >
          Hit!
        </Button>
        <Button
          colorScheme="purple"
          size="md"
          disabled={hideButton}
          size="md"
          ml={16}
          onClick={hold}
        >
          Hold
        </Button>
      </HStack>

      {playerValue > 0 && (
        <HStack mb={10}>
          <Text fontSize="3xl" textColor="white" mr={32}>
            Player: {playerValue}
          </Text>
          <Text fontSize="3xl" textColor="white" ml={32}>
            Dealer: {dealerValue}
          </Text>
        </HStack>
      )}
      <Grid
        hidden={hide}
        bg="#a41d1d"
        color="white"
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
      {isNameShown && (
        <Text textColor="white" fontSize="xl">
          Dealer Hand
        </Text>
      )}
      <HStack mb={10}>
        {dealerHand.length > 0 &&
          dealerHand.map((card) => (
            <Grid
              bg="white"
              color="red"
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
              <GridItem align="left" mr={2} mt={4} transform="scale(-1)">
                {card.split(".")[0]}
              </GridItem>
            </Grid>
          ))}
      </HStack>
      {isNameShown && (
        <Text textColor="white" fontSize="xl">
          Player Hand
        </Text>
      )}
      <HStack>
        {playerHand.length > 0 &&
          playerHand.map((card) => (
            <Grid
              bg="white"
              color="black"
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
              <GridItem align="left" mr={2} mt={4} transform="scale(-1)">
                {card.split(".")[0]}
              </GridItem>
            </Grid>
          ))}
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader />
          <ModalCloseButton />
          <ModalBody>
            <Center mb={4}>
              <Text noOfLines={2}>
                Player's Score: {playerValue} vs Dealer's Score: {dealerValue}
              </Text>
            </Center>
            {youWin && (
              <Text>
                {" "}
                You win!! Go and boast about you being smart! Press on 'Start
                Game' to play another round!
              </Text>
            )}
            {youLose && (
              <Text>
                {" "}
                Womp, womp, you lost. Practice some more! Press on 'Start Game'
                to play another round!
              </Text>
            )}
            {Tie && (
              <Text>
                {" "}
                It's a tie! Press on 'Start Game' to play another round!
              </Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={clearScore}>
              Okay
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default Card;
