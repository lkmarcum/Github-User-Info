import React from "react";
import "../styles/repoCard.scss";

function RepoCard(props) {
  return (
    <div className="repo-container">
      <h4>{props.repo.name}</h4>
      <h5>{props.repo.description}</h5>
      <a href={props.repo.html_url}>Visit repo</a>
    </div>
  );
}

export default RepoCard;
