
import {DISPLAY_ALL_BOARDS} from "../../constants/actionTypes"

  const BoardReducers = (state = { boards: []}, action) =>{
      switch (action.type) {
          case DISPLAY_ALL_BOARDS : 
            let newState = {...state };
            newState.boards = action.boards
            return newState;
          default : 
            return state;
      }
  }


  export default BoardReducers;