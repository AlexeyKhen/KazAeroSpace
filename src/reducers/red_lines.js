import {GET_RED_LINES_SUCCESS, GET_RED_LINES_FAIL} from '../actions/types.js'


const initialState = {
    lines_loaded: false,
    error_occurred: false,
    features: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RED_LINES_SUCCESS:
            return {...state, features: action.payload, lines_loaded: true, error_occurred: false}
        case GET_RED_LINES_FAIL:
            return {...state, features: [], lines_loaded: false, error_occurred: true}
        default:
            return state;
    }
}
export default reducer