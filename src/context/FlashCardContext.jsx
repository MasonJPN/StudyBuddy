import {useState} from "react"
import { createContext } from "react"
import {flashCards} from "../assets/mockData"

/*  remember to export const or you will get an error*/



export const FlashCardContext = createContext()

export default function FlashCardProvider({children}){
const [sets, newSets] = useState(flashCards)



/*  
Set Items context and item card context.
Simply adding and deleting both cards and set
*/

function addSet(item){
newSets([...sets, item])
}

function deleteSet(setID){
    newSets((prev) => prev.filter((item) => item.id !== setID))
}


/* card context below */


function addCard(setId, NewCard){
    newSets((prev) => prev.map((set) => set.id === setId
     ? {...set, cards: [...set.cards, NewCard]}
    : set
))
}


function deleteCard(setId,cardId ){

    newSets((prev) => prev.map((set) => set.id === setId 
    ? {...set, cards: set.cards.filter((card) => card.id !== cardId)}
    : set
))
}

    



    return (

        
        <FlashCardContext.Provider value={{addSet, deleteSet, sets, deleteCard, addCard    }}>
            {children}
        </FlashCardContext.Provider>
        

    )
}