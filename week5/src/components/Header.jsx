/*
    THe Header component used to display the header of the application.
*/

import React from "react";
import "./styles/Header.css"

const Header = ({ children }) => {
    return (
        <div className="header">
            <h2>{children}</h2>
        </div>
    )
}

export default Header;