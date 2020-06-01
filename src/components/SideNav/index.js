import React from 'react';
import './SideNav.css';

const SideNav = () => {
    const logo = require('../../assets/logos/zymmo-logo.png');

    return (
        <div className="sidenav">
            <div className="zymmo-logo">
                <img src={logo} alt="Zymmo Logo" />
            </div>
            <div className="nav-item active">
                Home
            </div>
            <div className="nav-item">
                Orders 
            </div>
            <div className="nav-item">
                Chefs
            </div>
            <div className="nav-item">
                Foodies
            </div>
            <div className="nav-item">
                Menus
            </div>
            <div className="nav-item">
                Dishes
            </div>
            <div className="nav-item">
                Financials
            </div>
            <div className="nav-item">
                Payouts to Chefs
            </div>
        </div>
    );
}

export default SideNav;