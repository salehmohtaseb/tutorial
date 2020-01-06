import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import { reducer } from './reducers/'
import  rootSaga  from './sagas/'

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    reducer,
    applyMiddleware(createLogger(), sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
