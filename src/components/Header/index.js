import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-item title">
                HOME
            </div>
            <div className="header-item search-box">
                <i className="fa fa-search"></i>
                <input type="text" placeholder="Search" />
            </div>
            <div className="header-item admin-menu">
                Admin
                <i className="fa fa-caret-down"></i>
            </div>
        </div>
    )
}

export default Header;