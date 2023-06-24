import React, {useState} from 'react';
import './Login.css';
import log from '../ac.png'
import AuthService from "../../services/AuthService";
import { useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../auth/Auth";

const Login = () => {

    const navigate = useNavigate()
    const auth = useAuth()
    const location = useLocation()
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const redirectPath = location.state?.path || '/homeUser'

    function onChangeUsername(e) {
        setUserName(e.target.value)
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleLogin(e) {
        e.preventDefault()
        console.log(userName)
        AuthService.login(userName, password).then(
            () => {
                auth.login(userName)
                console.log("redirect to another page")
                navigate('/users')
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                console.log("errrrorrr shiraz")
            })

    }

    return (
        <div className={"wrapper"}>
            <div className={"container main"}>
                <div className={"login_row row"}>
                    <div className={"col-md-6 side-image"}>
                        <img src={log} alt={""} className={"img"}/>
                    </div>
                    <div className={"col-md-6 right"}>
                        <form onSubmit={handleLogin}>
                            <div className={"input-box"}>
                                <header>Create account</header>
                                <div className={"input-field"}>
                                    <input onChange={onChangeUsername} type={"text"} className={"input"} name={"email"} id={"email"}
                                           required={true}/>
                                    <label form={"email"}>Email</label>
                                </div>
                                <div className={"input-field"}>
                                    <input onChange={onChangePassword} type={"password"} className={"input"} name={"password"} id={"password"}
                                           required={true}/>
                                    <label form={"password"}>Password</label>
                                </div>
                                <div className={"input-field"}>
                                    <input type={"submit"} className={"submit"} value={"Sign Up"}/>
                                </div>
                                <div className={"signin"}>
                                    <span>Already have an account <a href={"#"}>Log in here</a></span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;