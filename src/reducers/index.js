import {
    combineReducers
} from "redux";
import BoardReducers from "./boards"
import ListReducer from "./Lists"
import ModalReducres from "./modal"

const reducers = combineReducers({
    BoardReducers,
    ListReducer,
    ModalReducres
});

export default reducers;