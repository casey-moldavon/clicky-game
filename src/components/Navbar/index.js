import React from "react";
import "./style.css";


function Navbar() {
    return (
    <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper black center">
                <a href="/#" data-activates="slide-out" class="button-collapse show-on-large menuIcon"><i class="fas fa-bars"></i></a>

                <a className="brand-logo center" id="app-name">Clicky Game (Smash Bros Edition)</a>
                <ul className="categories container">

                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;