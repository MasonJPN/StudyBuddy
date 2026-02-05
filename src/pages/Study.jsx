import React from 'react'
import {useState} from "react"
import {flashCards} from "../assets/mockData"
import { FlashCardContext } from '../context/FlashCardContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'



const Study = () => {
const {setId} = useParams()
const {sets} = useContext(FlashCardContext)
/*
MUST CALL SETS TO REPLACE FLASHCARD OR WILL NEVER SEE MORE THAN THE DEFAULT AMOUNT OF CARDS
*/



/*
change from sets[0] to using useparams so there is no error of showing the
same cards for each set.
 */
const currentSet = sets.find(set => set.id === Number(setId))
const [currentCardIndex, setCurrentCardIndex] = useState(0)
const currentCard = currentSet.cards[currentCardIndex]
const [isFlipped, setIsFlipped] = useState(false)

function handleFlip(){
  setIsFlipped(!isFlipped)
  
}


function handlePrev(){
setCurrentCardIndex((prev) => prev > 0 ? prev -1 : 0)
}

function handleNext(){
  setCurrentCardIndex((prev) => prev < currentSet.cards.length -1 ? prev +1 : prev)
  setIsFlipped(false)
}

  return (
    <div className="study-container">
  <div className={`study-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
    <div className="card-front">
      
      <p>{currentCard.front}</p>
    </div>
    <div className="card-back">
      
      <p>{currentCard.back}</p>
    </div>
  </div>
  
  <div className="study-nav-buttons">
    <button className="prev-btn" onClick={handlePrev}>Previous</button>
    <button className="next-btn" onClick={handleNext}>Next</button>
  </div>
</div>
  )
}

export default Study