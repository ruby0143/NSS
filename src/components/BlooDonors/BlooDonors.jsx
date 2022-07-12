import React from "react";
import TeamCard from "../TeamCard/TeamCard";
import Team from "../Team/Team";
import "./BlooDonors.css";
import { Link } from "react-router-dom";


function BlooDonors() {
  return (
    <div className="BlooDonors">
      <h4>Blood Donors</h4>
      <hr></hr>
      <div className="row">
        
        <TeamCard link="/o" text="O+ve" />
        <TeamCard link="#" text="O-ve" />
        <TeamCard link="#" text="A+ve" />
        <TeamCard link="#" text="A-ve" />
        <TeamCard link="#" text="B+ve" />
        <TeamCard link="#" text="B-ve" />
        <TeamCard link="#" text="AB" />
      </div>

      
    </div>
  );
}

export default BlooDonors;
