import React from "react";
import "./TeamCard.css";

function TeamCard(props) {
  return (
    
      <div class="card col-lg-3 teami">
        <a href={props.link}>
          <div class="card-body">{props.text}</div>
        </a>
      </div>
    
  );
}

export default TeamCard;
