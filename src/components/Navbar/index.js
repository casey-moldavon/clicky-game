import React from "react";
import "./style.css";


function Navbar(props) {
    return (
    <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper black center">
                {/* <a href="/#" className="brand-logo center" id="app-name">Smash Bros: Clicky Game</a> */}
                <ul className="categories container">
                    <li className="brand-logo center" id="app-name">Smash Bros: Clicky Game
                    {/* <img id="logo-image" src={require('../images/smash-logo.jpg')} /> */}
                    </li>

            <div className="scores">
                <div className="currentScore">Score: {props.score}</div>
                <div className="topScore">Top Score: {props.topScore}</div>
            </div>
                </ul>
            </div>

        </nav>
    </div>
    )
}

export default Navbar;