import * as mutations from '../mutations'
import { combineReducers } from 'redux';

export let defaultState = {
  trips: []
}


const tripsReducers = {
  trips(trips = defaultState.trips, action) {
    switch (action.type) {
      case mutations.SET_TRIPS:
        return (action.trips);
      case mutations.EDIT_TRIPS:
        return CheckforEdit(trips, action.params)
      default:
        return trips;
    }
  }
}

const CheckforEdit = function (trips, editedTrip) {
  return trips.map(function (row) {
    if (row.id === editedTrip.id) {
      return editedTrip
    } else {
      return row
    }
  })
}

export const reducer = combineReducers({
  ...tripsReducers
});