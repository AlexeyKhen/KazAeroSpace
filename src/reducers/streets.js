import {GET_STREETS_FAIL, GET_STREETS_SUCCESS} from '../actions/types.js'


const initialState = {
    streets_loaded: false,
    error_occurred: false,
    features: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STREETS_SUCCESS:
            return {...state, features: action.payload, streets_loaded: true,error_occurred: false}
        case GET_STREETS_FAIL:
            return {...state, features: [], streets_loaded: false,error_occurred: true}
        default:
            return state;
    }
}

export default reducer