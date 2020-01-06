import { fork } from 'redux-saga/effects';
import { tripsSagas } from './trips';

export default function* rootSaga() {
    yield [
        fork(tripsSagas)
    ]
}