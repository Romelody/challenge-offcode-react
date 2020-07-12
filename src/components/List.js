import React from 'react';

export default ({ search }) => {
  const lista = search.map(({ Title, Poster, imdbID }) => (
    <div className="results" key={imdbID}>
      <article>
        <h3>{Title}</h3>
        <img src={Poster} alt={Title} />
        <p>
          1988 - <a href="http://wwwimdb.com">VIEW ON IMDB</a>
        </p>
      </article>
    </div>
  ));
  return <div>{lista}</div>;
};
