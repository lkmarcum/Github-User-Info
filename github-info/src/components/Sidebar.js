import React, { useState } from "react";
import cubes from "../cubes.png";
import "../styles/sidebar.scss";

function Sidebar() {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="sidebar">
      <img src={cubes} />
      <div className="links">
        <p onClick={() => setShowAbout(!showAbout)}>About</p>
        <a href="https://github.com/lkmarcum/Github-User-Info">
          <p>Code</p>
        </a>
        <p onClick={() => setShowContact(!showContact)}>Contact</p>
      </div>
      {showAbout ? (
        <div className="about">
          <p>
            This project is focused on creating a simple, clean, and organized
            UI to display basic information related to a user's GitHub profile.
          </p>
          <p>
            All user data is sourced from the GitHub API, the documentation for
            which can be found here: https://developer.github.com/v3/
          </p>
          <p>This site was built using React (with hooks), Axios, and SASS.</p>
          <p>
            The source code for this application can be found via the link in
            the sidebar, alongside contact information for the developer.
          </p>
          <p className="close" onClick={() => setShowAbout(false)}>
            Close
          </p>
        </div>
      ) : null}
      {showContact && (
        <div className="contact">
          <p>Email: lkmarcum@gmail.com</p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/lkmarcum">
              https://github.com/lkmarcum
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/lkmarcum/">
              https://www.linkedin.com/in/lkmarcum/
            </a>
          </p>
          <p>
            Portfolio: <a href="http://larrymarcum.com">larrymarcum.com</a>
          </p>
          <p className="close" onClick={() => setShowContact(false)}>
            Close
          </p>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
