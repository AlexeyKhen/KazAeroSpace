import {GET_BUS_STOPS_FAIL, GET_BUS_STOPS_SUCCESS} from "./types";
import fetch_data from "../services/wkb_transofrm";

export const getBusStops = () => (dispatch) => {
    fetch_data(dispatch, 'https://sacral.openlayers.kz/geo/busstops/', GET_BUS_STOPS_SUCCESS, GET_BUS_STOPS_FAIL, 'stationnam')

}

