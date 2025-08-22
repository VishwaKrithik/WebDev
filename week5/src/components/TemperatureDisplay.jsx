/*
    The Temperature display component used to display the temperature details.
*/

import React from "react";
import "./styles/TemperatureDisplay.css"

const TemperatureDisplay = ({children, unit}) => {

    return (
        <div className="tempDisplay">
            <span>{children}</span>
            <span>&deg;{unit}</span>
        </div>
    )
}

export default TemperatureDisplay;