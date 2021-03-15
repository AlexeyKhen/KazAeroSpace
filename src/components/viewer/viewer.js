import React from 'react';
import {connect} from 'react-redux';
import {Viewer} from "resium";
import LayersCreator from "../layersCreator/layersCreator";
import Alert from '@material-ui/lab/Alert';
import makeStyles from "@material-ui/core/styles/makeStyles";

function mapStateToProps(state) {
    return {
        bus_error: state.busStops.error_occurred,
        street_error: state.streets.error_occurred,
        lines_error: state.red_lines.error_occurred,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));


function ViewerShow(props) {
    const {bus_error, street_error, lines_error} = props

    const classes = useStyles();

    if (bus_error && street_error && lines_error) {
        return (<div className={classes.root}>
                <Alert severity="error">Упс! случилась ошибка, надеюсь вы не забыли включить плагин
                    <a href={'https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf'}> Allow
                        CORS: Access-Control-Allow-Origin</a>
                </Alert>
            </div>
        )
    }
    return (
        <Viewer>
            <LayersCreator/>
        </Viewer>
    );
}

export default connect(
    mapStateToProps,
)(ViewerShow);



