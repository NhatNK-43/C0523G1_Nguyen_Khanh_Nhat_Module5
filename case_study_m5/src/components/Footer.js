import React from "react";
import {NavLink} from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="">
                    &copy; <i>2023, Furama</i>
                </div>
            </div>
            {/*<div className="header fixed-top">*/}
            {/*    <nav className="navbar navbar-expand-lg">*/}
            {/*        <div className="container">*/}
            {/*            <NavLink className="navbar-brand" to="/">*/}
            {/*                <img src="/images/logo-furama.png" style={{height:"70px"}} alt="..."/>*/}
            {/*            </NavLink>*/}
            {/*            <button*/}
            {/*                className="navbar-toggler"*/}
            {/*                type="button"*/}
            {/*                data-bs-toggle="collapse"*/}
            {/*                data-bs-target="#navbarNavDropdown"*/}
            {/*                aria-controls="navbarNavDropdown"*/}
            {/*                aria-expanded="false"*/}
            {/*                aria-label="Toggle navigation"*/}
            {/*            >*/}
            {/*                <span className="navbar-toggler-icon"/>*/}
            {/*            </button>*/}
            {/*            <div*/}
            {/*                className="collapse navbar-collapse justify-content-end"*/}
            {/*                id="navbarNavDropdown"*/}
            {/*            >*/}
            {/*                <ul className="navbar-nav">*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <NavLink id="path" className="nav-link" to="/facilities">*/}
            {/*                            Facilities*/}
            {/*                        </NavLink>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <NavLink id="path" className="nav-link" to="/customers">*/}
            {/*                            Customers*/}
            {/*                        </NavLink>*/}
            {/*                    </li>*/}
            {/*                    <li className="nav-item">*/}
            {/*                        <NavLink id="path" className="nav-link" to="/contracts">*/}
            {/*                            Contracts*/}
            {/*                        </NavLink>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </nav>*/}
            {/*</div>*/}
        </>
    )
}
export default Footer;