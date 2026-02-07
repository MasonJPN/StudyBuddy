import { flashCards } from "../assets/mockData";
import {useNavigate} from "react-router-dom"
import { FlashCardContext } from "../context/FlashCardContext";
import { useContext } from "react";
export default function SetsCard(){

const Navigate = useNavigate()
const {sets} = useContext(FlashCardContext)

    return (
        <div className="card-container">
            <button 
                className="new-set-btn"
                onClick={() => Navigate('/add')}
            >
             Add Set
            </button>
            <button 
                className="quiz-set-btn"
                onClick={() =>  Navigate('/quiz')}
                
                >
                Quiz
            </button>


        {sets.map((set) =>{
            return (
                <>
                 
                <div key={set.id} className="set-info">
                    <h2>{set.title}</h2>
                    <p>{set.cards.length} cards</p>
                    <button className="study-btn"onClick={() => Navigate(`/study/${set.id}`)}>Study</button>
                    <button className="view-btn" onClick={() => Navigate(`/set/${set.id}`)}>View</button>
                </div>
                </>
            )
        })}

        </div>
           
       


    )
}