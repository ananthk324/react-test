import React, { useState, useContext } from "react";
import './Signin.css';

const Signin = () => {

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
            <div className="signin-field"></div>
            <form onSubmit={handleSubmit}>
                <div className="email-data">
                    <label>Email address</label>
                    <input className="email-input-field" 
                        placeholder="Enter email"
                        type="email"
                        name="email"
                        value={signinData.email}
                        onChange={updateSigninData} />
                </div>
    
                <div className="password-data">
                    <label>Password</label>
                    <input className="password-input-field" 
                        placeholder="Enter password"
                        type="password"
                        name="password"
                        value={signinData.password}
                        onChange={updateSigninData} />
                </div>

                <button type="submit" className="signin-button">SIGN IN</button>
            </form>
        </div>
    );
}

export default Signin;