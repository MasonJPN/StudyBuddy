import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { FlashCardContext } from '../context/FlashCardContext'
import { useParams } from 'react-router-dom'


const Quiz = () => {
  const { setId } = useParams()
  const { sets } = useContext(FlashCardContext)
  const currentSet = sets.find(set => set.id === Number(setId))

  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [answer, setAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState("")

  if (!currentSet || currentSet.cards.length === 0) {
    return <div className="no-cards">No cards in this set!</div>
  }

  if (currentCardIndex >= currentSet.cards.length) {
    return <div className='score'>
        <h1 className="score-h1">Quiz Complete!</h1> 
        <h2 className='score-h2'> Score: {score}/{currentSet.cards.length}</h2>
      </div>
  }

  const currentCard = currentSet.cards[currentCardIndex]

  function handleCheck(){
    if(answer.toLowerCase() === currentCard.back.toLowerCase()){
      setFeedback("correct")
      setScore(score + 1)
      setAnswer("")
      setTimeout(() => {
        setCurrentCardIndex(currentCardIndex +1)
        setFeedback("")
      }, 1000)

    } else {
      setFeedback("incorrect")
      setScore(score -1)
      setTimeout(() => {
        setFeedback("")
      },1000)
    }
  }

  return (
    <div className={`quiz-container ${feedback}`}>
      <div className="card-front">
        <p>{currentCard.front}</p>
      </div>
      
      <div className="study-nav-buttons">
        <input 
          className="answer-input"
          placeholder='Type Answer'
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button 
          className="check-btn"
          onClick={handleCheck}
          disabled={!answer.trim()}
        >
          Check
        </button>
      </div>
    </div>
  )
}

export default Quiz