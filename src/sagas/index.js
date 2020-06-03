import * as boardSaga from "./boardSaga"
import * as listSaga from "./listSaga"
import * as cardSaga from "./cardSaga"
import * as checklistSaga from "./checklistSaga"
import * as checkitemsSaga from "./checkitemsSaga"
import {
    all,
    fork
} from 'redux-saga/effects';

export default function* rootSaga() {
    yield all(
        [   ...Object.values(boardSaga), 
            ...Object.values(listSaga), 
            ...Object.values(cardSaga),
            ...Object.values(checklistSaga), 
            ...Object.values(checkitemsSaga)].map(fork)
    );
}