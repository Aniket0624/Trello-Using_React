import {
    combineReducers
} from "redux";
import BoardReducers from "./Boards/boards"
import ListReducer from "./Boards-withList/Lists"
import ModalReducres from "./Boards-withList/ModalReducers/modal"
// import CardReducer from "./Boards/List/Cards/cards"

const reducers = combineReducers({
    BoardReducers,
    ListReducer,
    ModalReducres
});

export default reducers;