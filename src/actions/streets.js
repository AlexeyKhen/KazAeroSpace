import {GET_STREETS_FAIL, GET_STREETS_SUCCESS} from "./types";
import fetch_data from "../services/wkb_transofrm";


export const getStreets = () => (dispatch) => {
    fetch_data(dispatch, 'https://sacral.openlayers.kz/geo/streets/', GET_STREETS_SUCCESS, GET_STREETS_FAIL, 'name')
}