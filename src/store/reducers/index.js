import {mutations} from '../mutations'
import { combineReducers } from 'redux';

 export let defaultState = {
  trips: [{
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
}],
}


 const tripsReducers = {
  trips(trips = defaultState.trips, action) {
    switch (action.type) {
      case mutations.SET_TRIPS:
        return (action.trips);
      default:
        return trips;
    }
  }
}

export const reducer = combineReducers({
  ...tripsReducers
});