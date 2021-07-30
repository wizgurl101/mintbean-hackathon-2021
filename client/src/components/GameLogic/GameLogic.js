import React, {useState, useEffect} from 'react'

function GameLogic() {
    const [deck, setDeck] = useState([])

    // On start of a solo game
    const StartSolo = () => {  
        // J,Q,K = 10 & A = 11 OR 1
        let tempDeck = []
        let cardVal = ["2","3","4","5","6","7","8","9","10","J",'Q','K','A']
        let cardType = ['Spades','Clubs', 'Hearts', 'Diamonds']
        for(let i = 0; i < cardVal.length; i++) {
            let cardV = cardVal[i]
            for(let j = 0; j < cardType; j++) {
                let cardT = cardType[j]
                let card = cardV + cardT
                tempDeck.push(card)
            }
        }
    }

    return (
        <div>
            <button onClick={StartSolo}>Play Solo</button>
        </div>
    )
}

export default GameLogic
