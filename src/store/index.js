import { createStore, applyMiddleware } from 'redux';
import {  fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { reducer } from './reducers/'
import  sagas from './sagas/'

function* rootSaga() {
    yield [
        fork(sagas)
    ]
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer,
    applyMiddleware(createLogger(), sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
