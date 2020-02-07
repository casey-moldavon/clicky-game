import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card">
      <span onClick={() => props.charSelect(props.id)} className="remove">
        <img alt={props.name} src={props.image} className="image-char" />
      </span>
    </div>
  );
}

export default CharacterCard;