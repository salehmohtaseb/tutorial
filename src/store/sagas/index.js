import { take, put } from 'redux-saga/effects';
import { mutations } from '../mutations'

function* GetTripsSaga() {
    while (true) {
        const params = yield take(mutations.GET_TRIPS);

        yield put(mutations.setTrips([
            {
                from: 'amman',
                to: 'zarqa',
                time: '20min',
                driver: {
                    name: 'Saleh',
                    carType: 'sonata',
                    carModel: '2019'
                }
            }, {
                from: 'amman',
                to: 'zarqa',
                time: '20min',
                driver: {
                    name: 'Saleh',
                    carType: 'sonata',
                    carModel: '2019'
                }
            }]
        ));
    }
}

export default function* tripsSaga() {
    yield [
        GetTripsSaga()
    ]
}