import {SHOW_BUSES, SHOW_RED_LINES, SHOW_STREETS, SHOW_ALL} from '../actions/types.js'


const initialState = {
    buses_are_shown: true,
    streets_are_shown: false,
    lines_are_shown: false
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_BUSES:
            return {
                ...state, buses_are_shown: true,
                streets_are_shown: false,
                lines_are_shown: false
            }
        case SHOW_STREETS:
            return {
                ...state, buses_are_shown: false,
                streets_are_shown: true,
                lines_are_shown: false
            }
        case SHOW_RED_LINES:
            return {
                ...state, buses_are_shown: false,
                streets_are_shown: false,
                lines_are_shown: true
            }
        case SHOW_ALL:
            return {
                ...state, buses_are_shown: true,
                streets_are_shown: true,
                lines_are_shown: true
            }
        default:
            return state;
    }
}

export default reducer