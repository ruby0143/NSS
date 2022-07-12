import React from "react";
import "./coord.css";
import Card from "../Card/Card";

function Coord(props) {
  return (
    <div className="coord">
      <h4>{props.batch}</h4>
      <hr></hr>
      <div className="row">

      <div className="col-lg-4">
        <Card
          img={props.t1img}
          title={props.t1title}
        />
      </div>
      <div className="col-lg-4">
      <Card
          img={props.t2img}
          title={props.t2title}
        />
      </div>
      <div className="col-lg-4">
      <Card
          img={props.t3img}
          title={props.t3title}
        />
      </div>
      <div className="col-lg-4">
      <Card
          img={props.t4img}
          title={props.t4title}
        />
      </div>
      <div className="col-lg-4">
      <Card
          img={props.t5img}
          title={props.t5title}
        />
      </div>
      <div className="col-lg-4">
      <Card
          img={props.t6img}
          title={props.t6title}
        />
      </div>
      
      </div>
    </div>
  );
}

export default Coord;
