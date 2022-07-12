import React from "react";
import HomeNav from "../HomeNav/HomeNav";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <HomeNav />
        <div className="foot2 text-center">
          <p className="foot-p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
          <p className="foot-p2">
            Social Media Links
          </p>
          <p className="foot-p3">
            @Copyright Harsha Mysore
          </p>
        </div>
      </footer>
    </div>
  );
}
