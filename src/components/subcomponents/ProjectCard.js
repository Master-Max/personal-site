import React from 'react';

function ProjectCard(props) {
  return (
    <article className="card" onClick={props.click}>
      <div className="card-name">
        {props.name}
      </div>
      <div className="card-body">
        {props.body}
      </div>
    </article>
  )
}

export default ProjectCard;
