const GET_TRIPS = 'GET_TRIPS';
const SET_TRIPS = 'SET_TRIPS';

const getTrips = (params) => ({
    type: GET_TRIPS,
    params: params
})

const setTrips = (TRIPS = []) => ({
    type: SET_TRIPS,
    TRIPS
})

export const mutations = {
    GET_TRIPS,
    SET_TRIPS,
    getTrips,
    setTrips
}

