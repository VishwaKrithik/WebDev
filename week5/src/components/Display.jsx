/*
    The main display file in which button and other components are imported and used
*/ 

import React, { useState } from "react";
import TemperatureDisplay from "./TemperatureDisplay";
import Button from "./Button";
import "./styles/Display.css"

const Display = () => {

    const [value, setValue] = useState(25);
    const [unit, setUnit] = useState("C");

    const unitChangeHandler = () => {
        if(unit === "C") {
            const newValue = ((value * (9 / 5)) + 32).toFixed(0);;
            setValue(newValue);
            setUnit("F");
        } else {
            const newValue = ((value - 32) * 5 / 9).toFixed(0);
            setValue(newValue);
            setUnit("C");
        }
    }

    return (
        <div className="Display">
            <div className="innerDisplay">
                <Button onClick={() => setValue(value - 1)} variant="PlusMinus" style={{fontSize: "80px"}}>-</Button>
                <TemperatureDisplay unit={unit}>{value}</TemperatureDisplay>
                <Button onClick={() => setValue(Number(value) + 1)} variant="PlusMinus">+</Button>
            </div>

            <div className="innerDisplay2">
                <Button onClick={unitChangeHandler} variant="FarCel">{unit === "C" ? "F" : "C"}</Button>
            </div>
        </div>
    )
}

export default Display;