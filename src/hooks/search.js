import { useState } from 'react';
import useAxios from 'axios-hooks';

export const useSearch = (s) => {
  const [search, setSearch] = useState(s);
  const [{ data: page1, loading1, error1 }] = useAxios(
    `http://www.omdbapi.com/?apikey=4d05574f&s=${search}&page=1`
  );
  const [{ data: page2, loading2, error2 }] = useAxios(
    `http://www.omdbapi.com/?apikey=4d05574f&s=${search}&page=2`
  );
  return [
    {
      data:
        page1 && page2 && page1.Search && page2.Search
          ? [...page1.Search, ...page2.Search.slice(0, 5)]
          : undefined,
      loading: loading1 || loading2,
      error: error1 || error2
    },
    setSearch
  ];
};
