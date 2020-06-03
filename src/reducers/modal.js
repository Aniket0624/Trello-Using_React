import {DISPLAY_CHECKLIST, ADD_CHECKLIST, DELETE_CHECKLIST, ADD_CHECKITEM, DELETE_CHECKITEM, UPDATE_CHECKITEM} from "../constants/actionTypes"

const ModalReducers = (state = { checklists: [] }, action) => {
    switch(action.type) {
        case DISPLAY_CHECKLIST : 
            console.log(action.checklists);
            return {...state, checklists: action.checklists};
        case ADD_CHECKLIST :   
            return { checklists : state.checklists.concat([action.newChecklist])}
        case DELETE_CHECKLIST : 
            return { checklists : state.checklists.filter(checklist => checklist.id !== action.checklistID)}
        case ADD_CHECKITEM :
            let checklistsDetails = [...state.checklists];
                checklistsDetails[
                    checklistsDetails.indexOf(action.checklist)
                ].checkItems = checklistsDetails[
                    checklistsDetails.indexOf(action.checklist)
                ].checkItems.concat(action.newCheckitem);
                console.log(checklistsDetails);
              return {checklists : checklistsDetails}
         case DELETE_CHECKITEM : 
                console.log(action.checkItemDetails)
                return { checklists : 
                    state.checklists.map(checkList => {
                        if (checkList.id === action.checkItemDetails.idChecklist) {
                          checkList.checkItems = checkList.checkItems.filter(
                            c => c.id !== action.checkItemDetails.id
                          );
                        }
                
                        return checkList;
                      })
                }
         case  UPDATE_CHECKITEM  : 
                return state
        default :
            return state;
    }
}

export default ModalReducers