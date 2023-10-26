import React from "react";

function Header() {
    return (
        <>
            <div className="header fixed-top">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <a className="navbar-brand" href="#">
                            <img src="/images/logo-furama.png" style={{height:"70px"}} alt="..."/>
                        </a>
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
                                    <a className="nav-link" href="#">
                                        Facilities
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Customers
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Contacts
                                    </a>
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