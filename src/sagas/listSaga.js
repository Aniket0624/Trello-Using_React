import  { takeEvery, put, call, takeLatest } from "redux-saga/effects"
import * as ActionTypes from "../constants/actionTypes"
import ListsAPI from "../services/list-service"
import * as ListAction from "../actions/index"

function* handleFetchAllLists(action){
    try{
        const service = new ListsAPI();
        const boards = yield call(service.fetchAllListsWithBoardsId, action.boardID)
        yield put(ListAction.getAllListsByBoardId(boards))
    }
    catch(e) {
        console.log((e));
    }
}

function* handleAddList(action){
    try{
        const service = new ListsAPI();
        const newList = yield call(service.addNewList, action.BoardID, action.listName)
        yield put(ListAction.addNewListAction(newList))
    }
    catch(e){
        console.log(e);
    }
}

export function* ListSaga() {
    yield takeEvery(ActionTypes.REQUEST_DISPLAY_ALL_LISTS, handleFetchAllLists)
    yield takeEvery(ActionTypes.REQUEST_ADD_NEW_LIST, handleAddList)
    
}   