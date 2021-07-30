import React, { useState, useEffect } from "react";

function GameLogic() {
  const [deck, setDeck] = useState([]);
  const [dealerHand, setDealerHand] = useState([])
  const [playerHand, setPlayerHand] = useState([])
  const [dealerValue, setDealerValue] = useState(0)
  const [playerValue, setPlayerValue] = useState(0)
  const [winScore, setWinScore] = useState(21)

  // On start of a solo game
  const startSolo = () => {
    // J,Q,K = 10 & A = 11 OR 1
    let tempDeck = [];
    let cardVal = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];
    let cardType = ["Spades", "Clubs", "Hearts", "Diamonds"];
    for (let i = 0; i < cardVal.length; i++) {
      let cardV = cardVal[i];
      for (let j = 0; j < cardType.length; j++) {
        let cardT = cardType[j];
        let card = cardV + cardT;
        tempDeck.push(card);
      }
    }
    // call a helper function to shuffle our deck
    shuffleDeck(tempDeck);
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
    setPlayerValue(0)
    setDealerValue(0)
    setDealerHand([])
    setPlayerHand([])
  }


  return (
    <div>
      <button onClick={startSolo}>Play Solo</button>
      {deck.length > 0 &&
        deck.map((card) => (
          <div>
            <p>{card}</p>
          </div>
        ))}
    </div>
  );
}

export default GameLogic;