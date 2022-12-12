import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/about">About</Link>
      <Link to="/about/Oliveira">About2</Link>
    </div>
  );
}

export default Home;
