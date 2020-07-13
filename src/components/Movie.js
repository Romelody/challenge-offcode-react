import React from 'react';

export default ({ imdbID, Title, Poster, Year }) => (
  <div className="results" key={imdbID}>
    <article>
      <h3>{Title}</h3>
      <img src={Poster} alt={Title} />
      <div className="caption">
        <p>{Year}</p>
        <a
          href={`http://www.imdb.com/title/${imdbID}`}
          target="_blank"
          rel="noreferrer"
        >
          View on IMDB
        </a>
      </div>
    </article>
  </div>
);
