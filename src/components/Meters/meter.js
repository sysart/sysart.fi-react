import React from 'react';

const Meter = ({meter}) => {
    console.log('Mittari ', meter);
    return (
        <div className="col-sm-4 meter">
            <div className="meter-value">{meter.value}</div>
            <div className="meter-label">{meter.label}</div>
        </div>
    )
}

export default Meter;
