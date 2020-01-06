import { take, put } from 'redux-saga/effects';
import * as mutations from '../mutations'
import { notify } from '../../helpers/notifier'

export function* GetTripsSaga() {
    while (true) {
        yield take(mutations.GET_TRIPS);
        yield put(mutations.setTrips([
            {
                id: 1,
                from: 'amman',
                to: 'zarqa',
                time: '20min',
                driver: {
                    id: 1,
                    name: 'Saleh',
                    carType: 'sonata',
                    carModel: '2019'
                }
            }, {
                id: 2,
                from: 'amman',
                to: 'zarqa',
                time: '20min',
                driver: {
                    id: 2,
                    name: 'Saleh',
                    carType: 'sonata',
                    carModel: '2019'
                }
            }]
        ));
    }
}

export function* UpdateTripsSaga() {
    while (true) {
        var { params } = yield take(mutations.UPDATE_TRIPS);
        yield put(mutations.editTrip(params));
        notify('Trip has been edited succesfully')
    }
}

export function* tripsSagas() {
    yield [
        GetTripsSaga(),
        UpdateTripsSaga()
    ]
}
