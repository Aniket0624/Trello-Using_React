import {
    DISPLAY_ALL_LISTS,
    ADD_NEW_LIST
} from "../constants/actionTypes"
import { combineReducers } from "redux";
import CardReducer from "./cards";
import ModalReducers from "./modal";

const ListChildrenReducer = combineReducers({
    lists : CardReducer,
    currentCard : ModalReducers
})


const ListReducer = (state = {lists: [], currentCard: {}}, action) => {
    // console.log(state)
    switch (action.type) {
        case DISPLAY_ALL_LISTS: 
            action.board.lists = action.board.lists.map(list => {
                return {
                    ...list,
                    cards: []
                }
            })
            // console.log({...state, ...action.board})
            return {...state, ...action.board }
        case ADD_NEW_LIST: {
            console.log(state.lists)
            state.lists = state.lists.concat([action.newList])
            return state;
        }
        default:
            return {...state, ...ListChildrenReducer(state, action) }
    }
}

export default ListReducer;