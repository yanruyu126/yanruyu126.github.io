import React from 'react';

function Cell({data}: any) {
  let title = <h2>{data.title}</h2>;
  if (data.link) {
    title = <h2><a href={data.link}>{data.title}</a></h2>;
  }
  return (
    <div>
    <div className="cell-container">
      <article className="project-post">
        <header>
          {title}
          <div>
            {data.collaborators}
          </div>
        </header>
        <div className="description">
          {data.desc}
        </div>
      </article>
    </div>
  </div>
  )
}


export default Cell;