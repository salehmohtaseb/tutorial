export const GET_TRIPS = 'GET_TRIPS';
export const SET_TRIPS = 'SET_TRIPS';
export const UPDATE_TRIPS = 'UPDATE_TRIPS';
export const EDIT_TRIPS = 'EDIT_TRIPS'

export const getTrips = (params) => ({
    type: GET_TRIPS,
    params: params
})

export const setTrips = (trips = []) => ({
    type: SET_TRIPS,
    trips
})

export const updateTrips = (params) => ({
    type:UPDATE_TRIPS,
    params
})

export const editTrip =(params) => ({
    type:EDIT_TRIPS,
    params
})
