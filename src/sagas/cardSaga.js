import  { takeEvery, put, call, takeLatest } from "redux-saga/effects"
import * as ActionTypes from "../constants/actionTypes"
import CardAPI from "../services/card-services"
import * as cardAction from "../actions/index"

function* handleFetchCards(action){
    try{
        const service = new CardAPI();
        const cards = yield call(service.fetchAllCards, action.list.id)
        yield put(cardAction.getAllCardsByListId(cards, action.list))
    }
    catch(e) {
        console.log((e));
    }
}

function* handleAddCard(action){
    try{
        const service = new CardAPI();
        const newCard = yield call(service.addnewCardToList, action.ListID, action.cardName)
        yield put(cardAction.addNewCardAction(newCard, action.list, action.ListID))
    }
    catch(e){
        console.log(e);
    }
}

function* handleDeleteCard(action){
    try{
        const service = new CardAPI();
        const deleteCard = yield call(service.deleteCard, action.cardID);
        yield put(cardAction.deleteCardAction(action.list, action.cardID, action.listID))
    }
    catch(e){
        console.log(e);
    }
}

export function* CardSaga() {
    yield takeEvery(ActionTypes.REQUEST_CARDS, handleFetchCards)
    yield takeLatest(ActionTypes.REQUEST_ADD_NEW_CARD, handleAddCard)
    yield takeLatest(ActionTypes.REQUEST_DELETE_CARD, handleDeleteCard)
}