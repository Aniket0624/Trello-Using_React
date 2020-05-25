import {
    DISPLAY_ALL_CARDS,
    DELETE_CARD,
    ADD_NEW_CARD
} from "../../../constants/actionTypes"


const CardReducer = (state = [], action) => {
    switch(action.type) {
        case DISPLAY_ALL_CARDS : 
        let newLists = [...state];
        console.log([newLists.indexOf(action.list)])
            newLists[newLists.indexOf(action.list)].cards = action.cards;
            console.log(newLists)
            return state;
        case ADD_NEW_CARD : 
           let newCard = [...state];
           console.log(newCard)
           newCard.forEach(list => {
               if(list.id === action.ListID)
               {  
                   list.cards = list.cards.concat(action.newCard)
                   console.log(list.cards);
               }
               return list;
           })
            return newCard;
        case DELETE_CARD : 
            console.log(action.listID)
            let dltCard = [...state];
            dltCard.forEach(list => {
                if(list.id === action.listID)
                {  
                    list.cards = list.cards.filter(
                        card => card.id !== action.cardID
                      )
                }
                return list;
            })
            return dltCard;
        default : 
            return state;
    }
}

export default CardReducer; 