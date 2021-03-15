import axios from "axios";
import proj4 from "proj4";



const wkb_transform = (coordinates, type) => {
    switch (type) {
        case "Point":
            return proj4("EPSG:3857", "EPSG:4326", coordinates)
        case  "LineString":
            return coordinates.map((item) => {
                return proj4("EPSG:3857", "EPSG:4326", item)
            })
        case  "MultiLineString":
            return coordinates.map((item) => {
                return item.map((nested_item) => {
                    return proj4("EPSG:3857", "EPSG:4326", nested_item)
                })
            })
        default:
            return null;
    }
}


export default function fetch_data(dispatch, url, action_type_success, action_type_fail, point_name) {
    let wkx = require('wkx');
    axios.get(url).then(
        res => {
            let filtered_data = []
            res.data.forEach((item) => {
                    let geoData = wkx.Geometry.parse(item['wkb_geometry']).toGeoJSON()
                    filtered_data.push({
                        type: "Feature",
                        properties: {
                            name: item[point_name]
                        },
                        geometry: {
                            type: geoData.type,
                            coordinates: wkb_transform(geoData.coordinates, geoData.type)

                        }
                    })
                }
            )
            dispatch({
                type: action_type_success, payload: filtered_data
            })
        }).catch(err => {
        dispatch({
            type: action_type_fail
        })
    })


}