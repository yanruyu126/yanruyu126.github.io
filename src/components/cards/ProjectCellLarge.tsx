import React from 'react';

function Cell({data}: any) {
  const title = data.link
    ? <h2><a href={data.link}>{data.title}</a></h2>
    : <h2>{data.title}</h2>;

  return (
    <div className="project-cell">
      <div className="project-cell-header">
        {title}
        <div>{data.collaborators}</div>
      </div>
      <div className="project-cell-body">
        {data.desc}
      </div>
    </div>
  );
}

export default Cell;
