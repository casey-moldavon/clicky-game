import React from "react";
import "./style.css";


function Navbar(props) {
    return (
    <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper black center">
                <a className="brand-logo center" id="app-name">Clicky Game (Smash Bros Edition)</a>
                <ul className="categories container">

                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;

{/* <div className="wrapper">{props.children}</div>; */}