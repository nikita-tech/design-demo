import React from "react";
import './Header.scss';

function Header(){
    return(
        <div className="header">
            <div className="menu">
                <img src="/assets/images/hamburger.png" alt="menu" />
            </div>
            <div className="logo">
                <img src="/assets/images/honda.png" alt="logo" />
            </div>
            <div className="login-profile">
                <img src="/assets/images/profile-top.png" alt="profile" />
            </div>
        </div>
    );
}

export default Header