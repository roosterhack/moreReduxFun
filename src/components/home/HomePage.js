import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='jumbotron'>
      <h1>Plurasight Administration</h1>
      <p>Reactm redux and react goodies</p>
      <Link to='about' className='btn btn-primary btn-lg'>
        Learn more
      </Link>
    </div>
  );
};

export default HomePage;
