import React from "react";
import "./style.css";

function IconCard(props) {
  return (
    <div className="card">
        <div className="img-container">
            <img alt={props.name} src={props.image} className="image-icon" />
        </div>
        <span onClick={() => props.iconSelected(props.id)} className="select"></span>
    </div>
  );
}

export default IconCard;