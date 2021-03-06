import React, { useRef } from 'react';
import List from './List';
import { useSearch } from '../hooks/search';

export default () => {
  const [{ data, loading, error }, setSearch] = useSearch('');
  const inputRef = useRef('');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const searchMovies = () => setSearch(inputRef.current.value);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setSearch(inputRef.current.value);
    }
  };

  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="Search your movie!"
        name="searchTerm"
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={searchMovies}>
        Search
      </button>

      {data && <List search={data} />}
    </>
  );
};
