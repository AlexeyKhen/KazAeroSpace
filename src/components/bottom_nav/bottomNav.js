import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import FormatStrikethroughIcon from '@material-ui/icons/FormatStrikethrough';
import LinearScaleIcon from '@material-ui/icons/LinearScale';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {connect} from "react-redux";
import {getBusStops} from "../../actions/bus_stops";
import {getStreets} from "../../actions/streets";
import {getRedLines} from "../../actions/read_lines";
import {showBuses, showAll, showLines, showStreets} from "../../actions/click_events";


const useStyles = makeStyles({
    root: {
        width: 500,
    },
});

function mapStateToProps(state) {
    return {};
}

function BottomNav(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const {showBuses, showAll, showLines, showStreets}  = props

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Автобусные остановки" icon={<DirectionsBusIcon/>} onClick={showBuses}/>
            <BottomNavigationAction label="Улицы" icon={<FormatStrikethroughIcon/>} onClick={showStreets}/>
            <BottomNavigationAction label="Другие линии" icon={<LinearScaleIcon/>} onClick={showLines}/>
            <BottomNavigationAction label="Все объекты" icon={<DoneAllIcon/>} onClick={showAll}/>
        </BottomNavigation>
    );
}


export default connect(
    mapStateToProps, {showBuses, showAll, showLines, showStreets}
)(BottomNav);