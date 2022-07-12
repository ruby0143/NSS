import React from "react";
import "./Team.css";
import Card from "../Card/Card";
import TeamCard from "../TeamCard/TeamCard";

function Team() {
  return (
    <div className="team">
      <h2>Teams</h2>
      <hr></hr>
      <div className="row">
        <div className="col-lg-6 space">
          <Card
            img="https://www.w3schools.com/css/paris.jpg"
            title="Card title"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
        <div className="col-lg-6 space">
          <Card
            img="https://www.w3schools.com/css/paris.jpg"
            title="Card title"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
        <div className="col-lg-6 space">
          <Card
            img="https://www.w3schools.com/css/paris.jpg"
            title="Card title"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
        <div className="col-lg-6 space">
          <Card
            img="https://www.w3schools.com/css/paris.jpg"
            title="Card title"
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </div>
        <div className="h4">
          <h4>Student Coordinators:  </h4>
        </div>
        <div className="row">
          <TeamCard link="/2021" text="Batch 2021" />
          <TeamCard link="#" text="Batch 2020" />
          <TeamCard link="#" text="Batch 2019" />
          <TeamCard link="#" text="Batch 2018" />
          
        </div>
        </div>
    </div>
  );
}

export default Team;
