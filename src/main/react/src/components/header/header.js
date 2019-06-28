import React from "react";

export default function header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Words</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/example">Examples</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/groups">Groups</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}