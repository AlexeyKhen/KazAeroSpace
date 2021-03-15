import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {getBusStops} from "../../actions/bus_stops";
import {getStreets} from "../../actions/streets";
import {getRedLines} from "../../actions/read_lines";
import {GeoJsonDataSource} from "resium";
import {Color} from "cesium";
import './layersCreator.css'
import show_elements from "../../reducers/show_elements";

function mapStateToProps(state) {
    return {
        features_bus: state.busStops.features,
        features_street: state.streets.features,
        features_lines: state.red_lines.features,
        show_state: state.show_elements
    };
}


class LayersCreator extends Component {
    componentDidMount() {

        this.props.getBusStops()
        this.props.getStreets()
        this.props.getRedLines()
    }


    render() {
        const dataBus = {
            type: 'FeatureCollection',
            features: this.props.features_bus
        }
         const dataStreet = {
            type: 'FeatureCollection',
            features: this.props.features_street
        }
          const dataLines = {
            type: 'FeatureCollection',
            features: this.props.features_lines
        }
        const {streets_are_shown,buses_are_shown,lines_are_shown} = this.props.show_state
        return (
            <Fragment>
                <GeoJsonDataSource data={dataStreet} show={streets_are_shown}/>
                <GeoJsonDataSource data={dataBus} show={buses_are_shown}/>
                <GeoJsonDataSource data={dataLines} show={lines_are_shown}/>
            </Fragment>
        );
    }
}

export default connect(
    mapStateToProps, {getBusStops,getStreets,getRedLines}
)(LayersCreator);