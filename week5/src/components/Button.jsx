/*
    THe button component containing all variant of button.
*/

import React from "react";
import "./styles/Button.css"

/**
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?: "primary" | "PlusMinus" | "FarCel" }} props 
 */

const Button = ({variant="primary", children, ...props}) => {
    return (
        <button className={`btn btn-${variant}`} {...props}>
            {children}
        </button>
    )
}

export default Button;