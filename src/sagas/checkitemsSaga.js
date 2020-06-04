import  { put, call, takeLatest } from "redux-saga/effects"
import * as ActionTypes from "../constants/actionTypes"
import CheckItemsAPI from "../services/checkItems-service"
import * as CheckitemAction from "../actions/index"

function* handleAddCheckitems(action){
    try{
        // console.log(action);
        const service = new CheckItemsAPI();
        const newCheckitem = yield call(service.addCheckitems, action.checkitemName, action.checkList.id)
        yield put(CheckitemAction.addCheckitemAction(newCheckitem, action.checkList))
    }
    catch(e){
        console.log(e);
    }
}

function* handleDeleteCheckitems(action){
    try{
        const service = new CheckItemsAPI();
        yield call(service.deleteCheckitem, action.checkItemDetails);
        yield put(CheckitemAction.deleteCheckitemAction(action.checkItemDetails))
    }
    catch(e){
        console.log(e);
    }
}

export function* CheckitemsSaga() {
    yield takeLatest(ActionTypes.REQUEST_DELETE_CHECKITEM, handleDeleteCheckitems)
    yield takeLatest(ActionTypes.REQUEST_ADD_CHECKITEM, handleAddCheckitems)
}