import {GET_BUS_STOPS_FAIL, GET_BUS_STOPS_SUCCESS} from '../actions/types.js'


const initialState = {
    bus_loaded: false,
    error_occurred: false,
    features: [],

}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BUS_STOPS_SUCCESS:
            return {...state, features: action.payload, bus_loaded: true, error_occurred: false}
        case GET_BUS_STOPS_FAIL:
            return {...state, features: [], bus_loaded: false, error_occurred: true}
        default:
            return state;
    }
}

export default reducer