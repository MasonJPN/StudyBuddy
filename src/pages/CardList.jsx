import React from 'react'

import { useParams } from 'react-router-dom'
import {FlashCardContext} from '../context/FlashCardContext'
import { useContext, useState } from 'react'



const CardList = () => {


    const {sets, deleteCard, addCard} = useContext(FlashCardContext)
    const { setId } = useParams()
    const [frontInput, setFrontInput] = useState("")
    const [backInput, setBackInput] = useState("")


function handleSubmit(e){
    e.preventDefault();

    const newCard = {
        id: Date.now(),
        front: frontInput,
        back: backInput,
        mastered: false
    }

 addCard(Number(setId), newCard)

setFrontInput("")
setBackInput("")

}


const currentSet = sets.find(set => set.id === Number(setId))

  return (
    <div>
        <div className="card-list-container">
            {currentSet.cards.map((card) => {
                return (
                    <div className="card-list-card" key={card.id}>
                        <h3>Front: {card.front}</h3>
                        <h3>Back: {card.back}</h3>
                        <button onClick={() => deleteCard(Number(setId), card.id)}>Remove</button>
                    </div>
                        )
                 })}
        </div>
        
        <form className="add-card-form" onSubmit={handleSubmit}>
            <label>Add Front: </label>
            <input
                type="text"
                value={frontInput}
                onChange={(e) => {setFrontInput(e.target.value)}}
            />

            <label>Add Back:</label>
                <input
                type="text"
                value={backInput}
                onChange={(e) => {setBackInput(e.target.value)}}
                />
               <button type="submit"className="add-cards">Add Cards</button>
        </form>
</div>
   





  )
}

export default CardList