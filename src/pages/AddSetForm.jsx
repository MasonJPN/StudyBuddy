import React from 'react'
import { FlashCardContext } from '../context/FlashCardContext'
import {useState, useContext, } from "react"
import {useNavigate} from "react-router-dom"


const AddSetForm = () => {
const [setName, setSetName] = useState("")
const {addSet} = useContext(FlashCardContext)
const Navigate = useNavigate()


function handleSubmit(e){
 e.preventDefault();
    
const newSet = {
    id: Date.now(),
    title: setName,
    cards: []
}

addSet(newSet)
Navigate('/')

}



  return (

    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>New set name:</label>
            <input 
                placeholder="e.g., History Notes .."
                value={setName}
                onChange={(e) => {setSetName(e.target.value)}}
                required
                >
            </input>
            <label>Subject: </label>
            <select>
                <option>Languages</option>
                <option>Science</option>
                <option>Math</option>
                <option>History</option>
                <option>Other</option>
            </select>
        <button className="submit-btn">Submit</button>
        </form>
    </div>
  )
}

export default AddSetForm