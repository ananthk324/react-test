import React from 'react';
import './MapZoomButtons.css';

const MapZoomButtons = (props) => {
    return (
        <div className="controls">
            {/* <button onClick={props.handleZoomIn}> */}
            <button>
                <i className="fa fa-plus"></i>
            </button>
            {/* <button onClick={props.handleZoomOut}> */}
            <button>
                <i className="fa fa-minus"></i>
            </button>
        </div>
    );
}

export default MapZoomButtons;