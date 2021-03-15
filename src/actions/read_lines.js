import {GET_RED_LINES_FAIL, GET_RED_LINES_SUCCESS} from "./types";
import fetch_data from "../services/wkb_transofrm";

export const getRedLines = () => (dispatch) => {
    fetch_data(dispatch, "https://sacral.openlayers.kz/geo/redlines/", GET_RED_LINES_SUCCESS, GET_RED_LINES_FAIL, 'ogc_fid')

}