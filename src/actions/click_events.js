import {SHOW_BUSES, SHOW_STREETS, SHOW_RED_LINES, SHOW_ALL} from "./types";


export const showBuses = () => (dispatch) => {
    dispatch({
        type: SHOW_BUSES
    })
}
export const showStreets = () => (dispatch) => {
    dispatch({
        type: SHOW_STREETS
    })
}
export const showLines = () => (dispatch) => {
    dispatch({
        type: SHOW_RED_LINES
    })
}
export const showAll = () => (dispatch) => {
    dispatch({
        type: SHOW_ALL
    })
}