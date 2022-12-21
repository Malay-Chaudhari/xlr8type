import React from "react";
import logo from "./../../assets/logo.png";
import "./Nav.css";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="xlr8-logo" src={logo} alt="logo" />
                <p className="xlr8-logo-text">XLR8Type</p>
            </div>
        </div>
    )
}

export default Nav;