import React from "react";
import Card from "../Card/Card";
import "./Awards.css";

function Awards() {
  return (
    <div className="awards">
      <h2>Awards</h2>
      <hr></hr>
      <div className="row ">
        <div className="col-lg-6 center">
          <Card
            img="../images/awards/awards1.jpg"
            title="BEST NSS VOLUNTEER AWARD FROM JNTUH – K. PRADEEP KUMAR"
          />
        </div>
        <div className="col-lg-6 center">
          <Card
            img="../images/awards/awards2.jpg"
            title="ABHISTI SEVA PURASKAR AWARD "
          />
        </div>
        <div className="col-lg-6 center">
          <Card
            img="../images/awards/awards3.jpg"
            title="BEST NSS VOLUNTEER AWARD - 2022"
            text="P. GANGA CHANDHAR REDDY"
          />
        </div>
        <div className="col-lg-6 center">
          <Card
            img="../images/awards/awards4.jpg"
            title="BEST NSS VOLUNTEER AWARD - 2022"
            text="P. MAYURI                                                       "
          />
        </div>
        
      </div>
    </div>
  );
}

export default Awards;
