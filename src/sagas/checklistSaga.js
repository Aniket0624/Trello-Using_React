import  { put, call, takeLatest } from "redux-saga/effects"
import * as ActionTypes from "../constants/actionTypes"
import ChecklistAPI from "../services/checklist-service"
import * as ChecklistAction from "../actions/index"

function* handleFetchChecklists(action){
    try{
        const service = new ChecklistAPI();
        const checklists = yield call(service.fetchChecklistByCardID, action.cardID)
        yield put(ChecklistAction.fetchChekcklist(checklists))
    }
    catch(e) {
        console.log((e));
    }
}

function* handleAddChicklist(action){
    try{
        // console.log(action);
        const service = new ChecklistAPI();
        const newCchecklist = yield call(service.addCheckListToCard, action.cardID, action.checklistName)
        yield put(ChecklistAction.addChecklistsAction(newCchecklist))
    }
    catch(e){
        console.log(e);
    }
}

function* handleDeleteChicklist(action){
    try{
        const service = new ChecklistAPI();
        yield call(service.deleteChecklist, action.checklistID);
        yield put(ChecklistAction.deleteChecklistAction(action.checklistID))
    }
    catch(e){
        console.log(e);
    }
}

export function* ListSaga() {
    yield takeLatest(ActionTypes.REQUEST_DISPLAY_CHECKLIST, handleFetchChecklists)
    yield takeLatest(ActionTypes.REQUEST_DELETE_CHECKLIST, handleDeleteChicklist)
    yield takeLatest(ActionTypes.REQUEST_ADD_CHECKLIST, handleAddChicklist)
}