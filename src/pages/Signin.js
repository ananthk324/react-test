import React, { useState } from "react";
import './Signin.css';

const Signin = () => {

    const logo = require('../constants/zymmo-logo-text.png');

    const [signinData, setSigninData] = useState({
        email: "",
        password: ""
    });

    const updateSigninData = (e) => {
        setSigninData({
            ...signinData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        console.log("Ok");
    }

    return (
        <div className="signin-container">
            <div className="zymmo-image">
                <img src={logo} alt="Zymmo Picture" />
            </div>
            <form onSubmit={handleSubmit}>
                <div className="email-data">
                    <label>EMAIL</label>
                    <div>
                        <input className="email-input-field" 
                            placeholder="Enter email"
                            type="email"
                            name="email"
                            value={signinData.email}
                            onChange={updateSigninData} />
                    </div>
                </div>
    
                <div className="password-data">
                    <label>PASSWORD</label>
                    <div>
                        <input className="password-input-field" 
                            placeholder="Enter password"
                            type="password"
                            name="password"
                            value={signinData.password}
                            onChange={updateSigninData} />
                        <a className="forgot-password">Forgot?</a>
                    </div>
                </div>

                <button type="submit" className="signin-button">SIGN IN</button>
            </form>
        </div>
    );
}

export default Signin;