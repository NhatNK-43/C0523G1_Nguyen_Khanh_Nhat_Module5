import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import data from "bootstrap/js/src/dom/data";

function Header() {
    const [isDark,setIsDark] = useState("");

    function myFunction() {
        let element = document.body;
        // element.classList.toggle("dark-mode");
        // element.classList.add('data-bs-theme="dark"');
        element.setAttribute("data-bs-theme","dark")
    }
    return (
        <>
            <div className="header fixed-top">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/">
                            <img src="/images/logo-furama.png" style={{height:"70px"}} alt="..."/>
                        </NavLink>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes"/>
                                <label className="form-check-label" htmlFor="mySwitch">Dark Mode</label>
                        </div>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div
                            className="collapse navbar-collapse justify-content-end"
                            id="navbarNavDropdown"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink id="path" className="nav-link" to="/facilities">
                                        Facilities
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink id="path" className="nav-link" to="/customers">
                                        Customers
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink id="path" className="nav-link" to="/contracts">
                                        Contracts
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Header;