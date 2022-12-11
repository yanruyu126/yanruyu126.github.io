import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({data}: any) => (
  <div className="preview-cell-container">
    <article className="mini-post">
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="card-text">
        <header>
          <h3><a href={data.link}>{data.title}</a></h3>
        </header>
        <div className="description">
          <p>{data.desc}</p>
        </div>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;