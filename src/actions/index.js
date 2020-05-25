import * as ActionTypes from "../constants/actionTypes"
import BoardsAPI from "../services/board-services"
import ListsAPI from "../services/list-service"
import CardAPi from "../services/card-services"
import ChecklistAPI from "../services/checklist-service"
import CheckItemsAPI from "../services/checkItems-service"

const getAllBoards = (boards) => {
    return {
        type: ActionTypes.DISPLAY_ALL_BOARDS,
        boards
    }
}

const addNewListAction = (newList) => ({
    type: ActionTypes.ADD_NEW_LIST,
    newList
});

const getAllListsByBoardId = (boardsWithLists) => {
    return {
        type: ActionTypes.DISPLAY_ALL_LISTS,
        board: boardsWithLists
    }
}

const getAllCardsByListId = (cards, list) => {
    return {
        type: ActionTypes.DISPLAY_ALL_CARDS,
        list,
        cards
    }
}

const addNewCardAction = (newCard, list, ListID) => ({
    type: ActionTypes.ADD_NEW_CARD,
    newCard,
    list,
    ListID
});

const deleteCardAction = (list, cardID, listID) => ({
    type: ActionTypes.DELETE_CARD,
    list,
    cardID,
    listID
})

const fetchChekcklist = (checklists) => ({
    type: ActionTypes.DISPLAY_CHECKLIST,
    checklists
})

const addChecklistsAction = (newChecklist) => ({
    type: ActionTypes.ADD_CHECKLIST,
    newChecklist
})

const deleteChecklistAction = (checklistID) => ({
    type: ActionTypes.DELETE_CHECKLIST,
    checklistID
})

const addCheckitemAction = (newCheckitem, checklist) => ({
    type: ActionTypes.ADD_CHECKITEM,
    newCheckitem,
    checklist
})

const deleteCheckitemAction = (checkItemDetails) => ({
    type: ActionTypes.DELETE_CHECKITEM,
    checkItemDetails
})

const updateCheckitemAction = () => ({
    type: ActionTypes.UPDATE_CHECKITEM
})

export const fetchAllBoards = () => dispatch => {
    const service = new BoardsAPI();
    service.fetchAllBoards().then(boards => {
        console.log(boards)
        dispatch(getAllBoards(boards))
    })
}

export const fetchAllListsWithBoardId = (BoardID) => dispatch => {
    const service = new ListsAPI();
    service.fetchAllListsWithBoardsId(BoardID).then(boardsWithLists => {
        // console.log(boardsWithLists)
        dispatch(getAllListsByBoardId(boardsWithLists))
    })
}

export const addNewList = (BoardID, listName) => dispatch => {
    const service = new ListsAPI();
    service.addNewList(BoardID, listName).then(newList => {
        dispatch(addNewListAction(newList))
    })
};

export const fetchAllCardsWithListId = (list) => dispatch => {
    const service = new CardAPi();
    service.fetchAllCards(list.id).then(cards => {
        dispatch(getAllCardsByListId(cards, list))
    })
}

export const addNewCard = (ListID, cardName, list) => dispatch => {
    const service = new CardAPi();
    service.addnewCardToList(ListID, cardName).then(newCard => {
        dispatch(addNewCardAction(newCard, list, ListID))
    })
};

export const deleteCard = (cardID, listID, list) => dispatch => {
    const service = new CardAPi();
    console.log(listID);
    service.deleteCard(cardID).then(res => dispatch(deleteCardAction(list, cardID, listID)))
}

export const fetchChecklist = (cardID) => dispatch => {
    const service = new ChecklistAPI();
    service.fetchChecklistByCardID(cardID).then(res => {
        console.log(res);
        dispatch(fetchChekcklist(res))
    })
}

export const addChecklists = (cardID, checklistName) => dispatch => {
    const service = new ChecklistAPI();
    service.addCheckListToCard(cardID, checklistName).then(res => dispatch(addChecklistsAction(res)))
}

export const deleteChecklist = (checklistID) => dispatch => {
    const service = new ChecklistAPI();
    service.deleteChecklist(checklistID).then(res => dispatch(deleteChecklistAction(checklistID)))
}

export const addCheckitem = (checkList, checkitemName) => dispatch => {
    // console.log(checkitemName);
    const service = new CheckItemsAPI();
    service.addCheckitems(checkList, checkitemName.id).then(res => dispatch(addCheckitemAction(res, checkitemName)))
}

export const deleteCheckitem = (checkItemDetails) => dispatch => {
    const service = new CheckItemsAPI();
    service.deleteCheckitem(checkItemDetails).then(res => dispatch(deleteCheckitemAction(checkItemDetails)))
}

export const updateCheckitem = (idCheckItem, event, idCard) => dispatch => {
    const service = new CheckItemsAPI();
    service.updateCheckitem(idCheckItem, event, idCard).then(res => dispatch(updateCheckitemAction()))
}