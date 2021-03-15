import {combineReducers} from "redux";
import busStops from './bus_stops'
import streets from './streets'
import red_lines from './red_lines'
import show_elements from './show_elements'


export default combineReducers({
    busStops, streets, red_lines, show_elements
})