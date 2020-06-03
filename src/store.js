import rootSaga  from './sagas/index';
// import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
// import {fetchAllBoards} from "./actions/index"
import { createStore, applyMiddleware  } from 'redux';
import reducer from "./reducers/index"

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer, applyMiddleware(sagaMiddleware))


sagaMiddleware.run(rootSaga)