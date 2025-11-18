import React from "react";
import './Header.css';
import Navigation from "./Navigation";
const Header = () =>{
    return(
        <div className="Header--section">
                <div className="icon--details">
                    <h3><img src="./logo.jpg" alt="logo"/>SYNTELSAFE</h3>
                </div>
            <div className="Nav--section">
                <Navigation/>
            </div>
        </div>
    );
};

export default Header;