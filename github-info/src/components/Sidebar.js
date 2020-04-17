import React from "react";
import cubes from "../cubes.png";
import "../styles/sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={cubes} />
      <div className="links">
        <p>About</p>
        <p>Code</p>
        <p>Contact</p>
      </div>
    </div>
  );
}

export default Sidebar;
