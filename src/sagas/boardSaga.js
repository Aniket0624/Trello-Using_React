import  { takeEvery, put, call, takeLatest } from "redux-saga/effects"
import * as ActionTypes from "../constants/actionTypes"
import BoardAPI from "../services/board-services"
import { getAllBoards } from "../actions"

function* handleFetchAllLists(action){
    try{
        console.log("object");
        const service = new BoardAPI();
        const boards = yield call(service.fetchAllBoards)
        yield put(getAllBoards(boards))
    }
    catch(e) {
        console.log((e));
    }
}

export function* boardSaga() {
    yield takeLatest(ActionTypes.REQUEST_ALL_BOARDS, handleFetchAllLists)
}