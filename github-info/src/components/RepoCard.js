import React from "react";
import "../styles/repoCard.scss";

function RepoCard(props) {
  return (
    <div className="repo-container">
      <h4>{props.repo.name}</h4>
      <a href={props.repo.html_url}>Visit repo</a>
      <h5>{props.repo.description}</h5>
    </div>
  );
}

export default RepoCard;
