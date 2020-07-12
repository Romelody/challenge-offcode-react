import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';

import './Home.scss';

function Home() {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}

export default Home;
