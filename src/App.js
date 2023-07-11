import { useState } from "react"

function App() {

  const tempDeck = []
  const values = ['0','1','2','3','4','5','6','7','8','9','10','J','Q','K','A']
  const suits = ['https://abrakadabra.fun/uploads/posts/2021-12/1639919802_1-abrakadabra-fun-p-krasnii-romb-1.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Love_Heart_symbol_inglow.svg/1200px-Love_Heart_symbol_inglow.svg.png', 
  'https://wordassociations.net/image/600x/svg_to_png/jean_victor_balin_card_trefle.png', 
  'https://cdn131.picsart.com/312186446046211.png']
  for (let cost = 6; cost < 15; cost++) {
    for (let suitIndex = 0; suitIndex < 4; suitIndex++) {
      tempDeck.push({
        cost: cost,
        value: values[cost],
        suit: suitIndex
      })
    }
  }

  const getRandomHand = (cardsInHand, cardsInDeck) => {
    const randHand = []
    while (randHand.length < cardsInHand) {
      const randInt = Math.floor(Math.random()*cardsInDeck)
      if (!randHand.includes(randInt)) {
        randHand.push(randInt)
      }
    }
    return randHand
  }

  const tempHand = getRandomHand(4,36)

  const [hand, setHand] = useState(tempHand.map((el) => {
    return tempDeck[el]
  }))

  let tempCardToBeat = -1
  const [cardToBeat, setCardToBeat] = useState(()=>{
    while (tempCardToBeat < 0 || tempHand.includes(tempCardToBeat)) {
      tempCardToBeat = Math.floor(Math.random()*36)
    }
    return tempDeck[tempCardToBeat]
  })

  let tempTrumpCard = -1
  const [trumpCard, setTrumpCard] = useState(()=>{
    while (tempTrumpCard < 0 || tempHand.includes(tempTrumpCard) || tempCardToBeat === tempTrumpCard) {
      tempTrumpCard = Math.floor(Math.random()*36)
    }
    return tempDeck[tempTrumpCard]
  })

  console.log(tempCardToBeat);
  console.log(tempTrumpCard);

  const [deck, setDeck] = useState(tempDeck.filter((_, idx) => {
    return !tempHand.includes(idx) && idx !== tempCardToBeat && idx !== tempTrumpCard
  }))

  console.log(tempDeck)
  console.log(deck);

  return (
  <div className="tabble">
    <div className="hand">
      {hand.map((el) => {
        return (
          <div className="card">
            <div className="sumbols">
              <div className="value">{el.value}</div>
              <img className="suit" src={suits[el.suit]}></img>
            </div>
            <div className="sumbols sumbols--right">
              <div className="value">{el.value}</div>
              <img className="suit" src={suits[el.suit]}></img>
            </div>
          </div>
        )
      })}
    </div>
    <div className="field">
      <div className="card card-to-beat">
        <div className="sumbols">
          <div className="value">{cardToBeat.value}</div>
          <img className="suit" src={suits[cardToBeat.suit]}></img>
        </div>
        <div className="sumbols sumbols--right">
          <div className="value">{cardToBeat.value}</div>
          <img className="suit" src={suits[cardToBeat.suit]}></img>
        </div>
      </div>
      <div className="card trump-card">
        <div className="sumbols">
          <div className="value">{trumpCard.value}</div>
          <img className="suit" src={suits[trumpCard.suit]}></img>
        </div>
        <div className="sumbols sumbols--right">
          <div className="value">{trumpCard.value}</div>
          <img className="suit" src={suits[trumpCard.suit]}></img>
        </div>
      </div>
    </div>
  </div>)
}

export default App;
