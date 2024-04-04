import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import Signup from './SignUp';
import Login from './Login';
import './login.css'

const LoginSignup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [islogin, setIslogin] = useState(true);

    const changeLogin = () => {
        setIslogin(!islogin);

    }

    const containerClass = "gradientBG " + (islogin ? "login" : "signup");

    // const changeButton = <button onClick={changeLogin}>Sign up</button>

    return (
        <div className={containerClass}>
            <div className="info-container">
                <div className="info">
                    <div className="info-panel top-panel">
                        <p className="info-text">
                            Welcome back!                            
                        </p>
                        <img src="/imgs/dino-hi.png" style={{width:200}}></img>
                        {/* <button onClick={changeLogin}>
                                Sign up
                            </button> */}
                    </div>
                    <div className="info-panel bottom-panel">
                        <p className="text-sm text-white text-center">
                            Hello friend!
                        </p>
                        <img src="/imgs/dino-hi.png" style={{width:200}}></img>
                        {/* <button onClick={changeLogin}>
                                Sign up
                            </button> */}
                    </div>
                </div>
            </div>

            <div className="form-container">
                {islogin ? <Login changeFunc={changeLogin} /> : <Signup changeFunc={changeLogin} />}
            </div>
        </div>
    )
}

export default LoginSignup