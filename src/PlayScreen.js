// 0 буби  1 черви  2 крести  3 пики
import { useEffect, useState } from "react"

function PlayScreen({numberOfPlayers}) {

  const [freeCardsIds, setFreeCardsIds] = useState(()=>{
    const list = []
    for (let i = 0; i < 36; i++) {
      list.push(i)
    }
    return list
  })

  const tempDeck = []
  const values = ['0','1','2','3','4','5','6','7','8','9','10','J','Q','K','A']
  const suits = ['https://abrakadabra.fun/uploads/posts/2021-12/1639919802_1-abrakadabra-fun-p-krasnii-romb-1.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Love_Heart_symbol_inglow.svg/1200px-Love_Heart_symbol_inglow.svg.png', 
  'https://wordassociations.net/image/600x/svg_to_png/jean_victor_balin_card_trefle.png', 
  'https://cdn131.picsart.com/312186446046211.png']
  for (let cost = 6; cost < 15; cost++) {
    for (let suitIndex = 0; suitIndex < 4; suitIndex++) {
      tempDeck.push({
        id: (cost-6)*4 + suitIndex+1,
        cost: cost,
        value: values[cost],
        suit: suitIndex
      })
    }
  }
  
  // const getRandomFreeId = () => {
  //   const randInt = Math.floor(Math.random()*freeCardsIds.length)
  // }

  // const getRandomHand = (cardsInHand, cardsInDeck) => {
  //   const randHand = []
  //   while (randHand.length < cardsInHand) {
  //     const randInt = Math.floor(Math.random()*cardsInDeck)
  //     if (!randHand.includes(randInt)) {
  //       randHand.push(randInt)
  //     }
  //   }
  //   return randHand
  // }

  // const tempHand = getRandomHand(4,36)

  // const [hand, setHand] = useState(tempHand.map((el) => {
  //   return tempDeck[el]
  // }))

  // let tempCardToBeat = -1
  // const [cardToBeat, setCardToBeat] = useState(()=>{
  //   while (tempCardToBeat < 0 || tempHand.includes(tempCardToBeat)) {
  //     tempCardToBeat = Math.floor(Math.random()*36)
  //   }
  //   return tempDeck[tempCardToBeat]
  // })

  // let tempTrumpCard = -1
  // const [trumpCard, setTrumpCard] = useState(()=>{
  //   while (tempTrumpCard < 0 || tempHand.includes(tempTrumpCard) || tempCardToBeat === tempTrumpCard) {
  //     tempTrumpCard = Math.floor(Math.random()*36)
  //   }
  //   return tempDeck[tempTrumpCard]
  // })

  // const countPossibilityToBeat = () => {
  //   let counter = 0
  //   hand.forEach((el) => {
  //     if ((el.suit === trumpCard.suit && el.suit !== cardToBeat.suit) || (el.suit === cardToBeat.suit && el.cost > cardToBeat.cost)) {
  //       counter++
  //     }
  //   })
  //   return counter
  // }

  const [deck, setDeck] = useState(tempDeck)

  const getSomeCardsFromDeck = (amount, tempFreeCardsIds) => {
    const list = []
    while (list.length < amount) {
      const randomId = Math.floor(Math.random()*tempFreeCardsIds.length)
      list.push(tempFreeCardsIds[randomId])
      tempFreeCardsIds = tempFreeCardsIds.filter((el)=>{
        return tempFreeCardsIds[randomId] !== el
      })
    }
    return [list, tempFreeCardsIds]
  }

  // Раздача
  let tempPlayers = []
  let tempFreeCardsIds = [...freeCardsIds]
  for (let i = 0; i < numberOfPlayers; i++) {
    const lists = getSomeCardsFromDeck(6, tempFreeCardsIds)
    tempPlayers.push(lists[0].map((el)=>{
      return deck[el]
    }))
    tempFreeCardsIds = lists[1]
  }
  

  const [players, setPlayers] = useState([...tempPlayers])


  return (
    <div className="play-screen">
      {players.map((player, index)=>{
        return (<div className="hand">
        {player.map((el, idx) => {
          if (index === 0) {
            console.log(freeCardsIds);
            return (
              <div className="card face-of-card" key={idx} style={{transform: `rotate(${(3-idx-0.5)*(-10)}deg)`}}>
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
          } else {
            return (
              <div className="card" key={idx} style={{transform: `rotate(${(3-idx-0.5)*(-10)}deg)`}}>
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
          }
        })}
      </div>)
      })}
      
    </div>)

  // return (
  // <div className="play-screen">
  //   <div className="text possibility-text">Количество возможностей побить карту: {countPossibilityToBeat()}</div>
  //   <div className="hand">
  //     {hand.map((el, idx) => {
  //       return (
  //         <div className="card" key={idx}>
  //           <div className="sumbols">
  //             <div className="value">{el.value}</div>
  //             <img className="suit" src={suits[el.suit]}></img>
  //           </div>
  //           <div className="sumbols sumbols--right">
  //             <div className="value">{el.value}</div>
  //             <img className="suit" src={suits[el.suit]}></img>
  //           </div>
  //         </div>
  //       )
  //     })}
  //   </div>
  //   <div className="field">
  //     <div className="card card-to-beat">
  //       <div className="sumbols">
  //         <div className="value">{cardToBeat.value}</div>
  //         <img className="suit" src={suits[cardToBeat.suit]}></img>
  //       </div>
  //       <div className="sumbols sumbols--right">
  //         <div className="value">{cardToBeat.value}</div>
  //         <img className="suit" src={suits[cardToBeat.suit]}></img>
  //       </div>
  //     </div>
  //     <div className="trump-cards">
  //       <div className="card trump-card">
  //         <div className="sumbols">
  //           <div className="value">{trumpCard.value}</div>
  //           <img className="suit" src={suits[trumpCard.suit]}></img>
  //         </div>
  //         <div className="sumbols sumbols--right">
  //           <div className="value">{trumpCard.value}</div>
  //           <img className="suit" src={suits[trumpCard.suit]}></img>
  //         </div>
  //       </div>
  //       <img className="card back-of-card" src="https://phonoteka.org/uploads/posts/2021-11/1635890714_8-phonoteka-org-p-fon-dlya-rubashki-kart-krasivie-9.png"></img>
  //     </div>
  //   </div>
  // </div>)
}

export default PlayScreen;
