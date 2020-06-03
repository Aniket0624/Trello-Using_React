import * as ActionTypes from "../constants/actionTypes"



export const getAllBoards = (boards) => {
    return {
        type: ActionTypes.DISPLAY_ALL_BOARDS,
        boards
    }
}


export const addNewListAction = (newList) => ({
    type: ActionTypes.ADD_NEW_LIST,
    newList
});


export const getAllListsByBoardId = (boardsWithLists) => {
    return {
        type: ActionTypes.DISPLAY_ALL_LISTS,
        board: boardsWithLists
    }
}


export const getAllCardsByListId = (cards, list) => {
    return {
        type: ActionTypes.DISPLAY_ALL_CARDS,
        list,
        cards
    }
}


export const addNewCardAction = (newCard, list, ListID) => ({
    type: ActionTypes.ADD_NEW_CARD,
    newCard,
    list,
    ListID
});


export const deleteCardAction = (list, cardID, listID) => ({
    type: ActionTypes.DELETE_CARD,
    list,
    cardID,
    listID
})


export const fetchChekcklist = (checklists) => ({
    type: ActionTypes.DISPLAY_CHECKLIST,
    checklists
})


export const addChecklistsAction = (newChecklist) => ({
    type: ActionTypes.ADD_CHECKLIST,
    newChecklist
})

export const deleteChecklistAction = (checklistID) => ({
    type: ActionTypes.DELETE_CHECKLIST,
    checklistID
})


export const addCheckitemAction = (newCheckitem, checklist) => ({
    type: ActionTypes.ADD_CHECKITEM,
    newCheckitem,
    checklist
})


export const deleteCheckitemAction = (checkItemDetails) => ({
    type: ActionTypes.DELETE_CHECKITEM,
    checkItemDetails
})


export const updateCheckitemAction = () => ({
    type: ActionTypes.UPDATE_CHECKITEM
})


export const requestGetAllBoards = () => ({ type: ActionTypes.REQUEST_ALL_BOARDS });
export const addNewList = (BoardID, listName) =>  ({ type: ActionTypes.REQUEST_ADD_NEW_LIST, BoardID, listName });
export const requestgetAllListsByBoardId = (boardID) => ({ type: ActionTypes.REQUEST_DISPLAY_ALL_LISTS, boardID });
export const requestGetAllCardsByListId = (list) => ({ type: ActionTypes.REQUEST_CARDS, list });
export const requestAddNewCard = (ListID, cardName, list) => ({ type: ActionTypes.REQUEST_ADD_NEW_CARD, ListID, cardName, list });
export const requestdeleteCardAction = (cardID, listID, list) => ({ type: ActionTypes.REQUEST_DELETE_CARD, cardID, listID, list });
export const requestFetchChecklist = (cardID) => ({ type: ActionTypes.REQUEST_DISPLAY_CHECKLIST, cardID });
export const addChecklists = (cardID, checklistName) => ({ type: ActionTypes.REQUEST_ADD_CHECKLIST, cardID, checklistName });
export const deleteChecklist = (checklistID) =>  ({ type: ActionTypes.REQUEST_DELETE_CHECKLIST, checklistID });
export const addCheckitem = (checkList, checkitemName) =>  ({ type: ActionTypes.REQUEST_ADD_CHECKITEM, checkList, checkitemName });
export const deleteCheckitem = (checkItemDetails) => ({ type: ActionTypes.REQUEST_DELETE_CHECKITEM, checkItemDetails });
export const updateCheckitem = (idCheckItem, event, idCard) => ({ type: ActionTypes.REQUEST_UPDATE_CHECKITEM, idCheckItem, event, idCard });