import React from 'react';
import Movie from './Movie';

export default ({ search }) => {
  const lista = search.map((movie) => <Movie {...movie} />);
  return <div className="list-container">{lista}</div>;
};
