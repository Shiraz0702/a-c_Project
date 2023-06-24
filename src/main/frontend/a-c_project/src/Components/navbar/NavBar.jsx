import React from 'react';
import {useNavigate} from "react-router-dom";
import AuthService from "../../services/AuthService";

const NavBar = () => {
    const navigate = useNavigate()

    function logOut() {
        AuthService.logout()
        navigate('/home')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/Users/shira/IdeaProjects/a-c_project/src/main/frontend/a-c_project/public/index.html">A/C</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {
                            !localStorage.getItem("user") ?
                                (
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href={"/home"}>Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/contact">Contact</a>
                                        </li>
                                        <li className="nav-item ">
                                            <a className="nav-link" href={"/login"}>Login</a>
                                        </li>
                                    </ul>) : (
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link" href={"/users"}>Users</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/customers">Customers</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/bid">bid</a>
                                        </li>
                                        <button className="btn btn-sm btn-outline-secondary mx-5" type="button"
                                                onClick={logOut}>log out
                                        </button>
                                    </ul>
                                )
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;