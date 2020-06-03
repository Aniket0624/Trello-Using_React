import * as ActionTypes from "../constants/actionTypes"
// import BoardsAPI from "../services/board-services"
// import ListsAPI from "../services/list-service"
// import CardAPi from "../services/card-services"
// import ChecklistAPI from "../services/checklist-service"
// import CheckItemsAPI from "../services/checkItems-service"

export const getAllBoards = (boards) => {
    return {
        type: ActionTypes.DISPLAY_ALL_BOARDS,
        boards
    }
}

export const requestGetAllBoards = () => ({ type: ActionTypes.REQUEST_ALL_BOARDS });

export const addNewListAction = (newList) => ({
    type: ActionTypes.ADD_NEW_LIST,
    newList
});

export const addNewList = (BoardID, listName) =>  ({ type: ActionTypes.REQUEST_ADD_NEW_LIST, BoardID, listName });

export const getAllListsByBoardId = (boardsWithLists) => {
    return {
        type: ActionTypes.DISPLAY_ALL_LISTS,
        board: boardsWithLists
    }
}

export const requestgetAllListsByBoardId = (boardID) => ({ type: ActionTypes.REQUEST_DISPLAY_ALL_LISTS, boardID });

export const getAllCardsByListId = (cards, list) => {
    return {
        type: ActionTypes.DISPLAY_ALL_CARDS,
        list,
        cards
    }
}

export const requestGetAllCardsByListId = (list) => ({ type: ActionTypes.REQUEST_CARDS, list });

export const addNewCardAction = (newCard, list, ListID) => ({
    type: ActionTypes.ADD_NEW_CARD,
    newCard,
    list,
    ListID
});

export const requestAddNewCard = (ListID, cardName, list) => ({ type: ActionTypes.REQUEST_ADD_NEW_CARD, ListID, cardName, list });

export const deleteCardAction = (list, cardID, listID) => ({
    type: ActionTypes.DELETE_CARD,
    list,
    cardID,
    listID
})

export const requestdeleteCardAction = (cardID, listID, list) => ({ type: ActionTypes.REQUEST_DELETE_CARD, cardID, listID, list });

export const fetchChekcklist = (checklists) => ({
    type: ActionTypes.DISPLAY_CHECKLIST,
    checklists
})

export const requestFetchChecklist = (cardID) => ({ type: ActionTypes.REQUEST_DISPLAY_CHECKLIST, cardID });

export const addChecklistsAction = (newChecklist) => ({
    type: ActionTypes.ADD_CHECKLIST,
    newChecklist
})
export const addChecklists = (cardID, checklistName) => ({ type: ActionTypes.REQUEST_ADD_CHECKLIST, cardID, checklistName });

export const deleteChecklistAction = (checklistID) => ({
    type: ActionTypes.DELETE_CHECKLIST,
    checklistID
})

export const deleteChecklist = (checklistID) =>  ({ type: ActionTypes.REQUEST_DELETE_CHECKLIST, checklistID });

export const addCheckitemAction = (newCheckitem, checklist) => ({
    type: ActionTypes.ADD_CHECKITEM,
    newCheckitem,
    checklist
})

export const addCheckitem = (checkList, checkitemName) =>  ({ type: ActionTypes.REQUEST_ADD_CHECKITEM, checkList, checkitemName });

export const deleteCheckitemAction = (checkItemDetails) => ({
    type: ActionTypes.DELETE_CHECKITEM,
    checkItemDetails
})

export const deleteCheckitem = (checkItemDetails) => ({ type: ActionTypes.REQUEST_DELETE_CHECKITEM, checkItemDetails });

export const updateCheckitemAction = () => ({
    type: ActionTypes.UPDATE_CHECKITEM
})

export const updateCheckitem = (idCheckItem, event, idCard) => ({ type: ActionTypes.REQUEST_UPDATE_CHECKITEM, idCheckItem, event, idCard });









// export const addNewList = (BoardID, listName) => dispatch => {
//     const service = new ListsAPI();
//     service.addNewList(BoardID, listName).then(newList => {
//         dispatch(addNewListAction(newList))
//     })
// };

// export const fetchAllCardsWithListId = (list) => dispatch => {
//     const service = new CardAPi();
//     service.fetchAllCards(list.id).then(cards => {
//         dispatch(getAllCardsByListId(cards, list))
//     })
// }

// export const addNewCard = (ListID, cardName, list) => dispatch => {
//     const service = new CardAPi();
//     service.addnewCardToList(ListID, cardName).then(newCard => {
//         dispatch(addNewCardAction(newCard, list, ListID))
//     })
// };

// export const deleteCard = (cardID, listID, list) => dispatch => {
//     const service = new CardAPi();
//     console.log(listID);
//     service.deleteCard(cardID).then(res => dispatch(deleteCardAction(list, cardID, listID)))
// }

// export const fetchChecklist = (cardID) => dispatch => {
//     const service = new ChecklistAPI();
//     service.fetchChecklistByCardID(cardID).then(res => {
//         console.log(res);
//         dispatch(fetchChekcklist(res))
//     })
// }

// export const addChecklists = (cardID, checklistName) => dispatch => {
//     const service = new ChecklistAPI();
//     service.addCheckListToCard(cardID, checklistName).then(res => dispatch(addChecklistsAction(res)))
// }

// export const deleteChecklist = (checklistID) => dispatch => {
//     const service = new ChecklistAPI();
//     service.deleteChecklist(checklistID).then(res => dispatch(deleteChecklistAction(checklistID)))
// }

// export const addCheckitem = (checkList, checkitemName) => dispatch => {
//     // console.log(checkitemName);
//     const service = new CheckItemsAPI();
//     service.addCheckitems(checkList, checkitemName.id).then(res => dispatch(addCheckitemAction(res, checkitemName)))
// }

// export const deleteCheckitem = (checkItemDetails) => dispatch => {
//     const service = new CheckItemsAPI();
//     service.deleteCheckitem(checkItemDetails).then(res => dispatch(deleteCheckitemAction(checkItemDetails)))
// }

// export const updateCheckitem = (idCheckItem, event, idCard) => dispatch => {
//     const service = new CheckItemsAPI();
//     service.updateCheckitem(idCheckItem, event, idCard).then(res => dispatch(updateCheckitemAction()))
// }