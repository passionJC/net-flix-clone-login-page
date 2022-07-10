import React from "react";
import './LoginPage.css';
import NetflixLogo from '../Netflix-Logo.png';
import { Link } from 'react-router-dom';
import { useState } from "react";

const LoginPage = () => {

    const userCredentials = [
        {
            username: "user1",
            password: "pass1"
        }
    ];

    const [passwordShown, setPasswordShown] = useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const handleSubmit = () => {

        const userData = userCredentials.find((user) => user.username === document.getElementById("userName").value);

        if (userData) {
            if (userData.password !== document.getElementById("passWord").value) {
                setIsSubmitted(false);
            } else {
                setIsSubmitted(true);
            }
        } else {
            setIsSubmitted(false);
        }
    };

    return (

        <div className="loginPageBody">
            <div className="overLay"></div>
            <div className="overLay2"></div>
            <header>
                <img src={NetflixLogo} alt="" width="200px" />
            </header>

            <form className="signIn" onChange={handleSubmit}>
                <h2>Sign In</h2>
                <input id="userName" type="text" placeholder="Email or Phone number" className="inputBox" />
                <p className="pNum">Please enter a valid email or phone number.</p>
                <input id="passWord" type={passwordShown ? "text" : "password"} placeholder="Password" className="inputBox" />
                <input type="checkbox" onClick={togglePassword} id="showPW" />
                <label for="showPW">Show Password</label>
                <p className="pPass" id="passWordText">Your password must contain between 4 and 60 characters.</p>
                <Link to={isSubmitted ? '/home-page' : '/net-flix-clone-login-page/'}> <button onClick={handleSubmit} type="submit">Sign In</button></Link>
            </form>
        </div >
    )
}

export default LoginPage; 