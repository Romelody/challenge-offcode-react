import React, { useState, useRef } from 'react';
import useAxios from 'axios-hooks';
import List from '../components/List';

import './Home.scss';

function Home() {
  // state = {
  //   movies: []
  // }
  const [search, setSearch] = useState('');
  const inputRef = useRef('');
  const [{ data, loading, error }, refetch] = useAxios(
    `http://www.omdbapi.com/?apikey=4d05574f&s=${search}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const searchMovies = () => setSearch(inputRef.current.value);

  return (
    <div className="App">
      <header>
        <h1>
          <span>// </span> React challenge
        </h1>
        <p>Open readme.md</p>
      </header>
      <main>
        <h2>Search OMDB</h2>

        <form className="searchForm">
          <input
            className="input"
            type="text"
            placeholder="Improve my style please"
            name="searchTerm"
            ref={inputRef}
          />
          <button type="submit" onClick={searchMovies}>
            Search
          </button>
        </form>

        {data.Search && <List search={data.Search} />}
      </main>
    </div>
  );
}

export default Home;
