import React from 'react';
import './style.css';

import petStore from './petstore.json';

export default function App() {
  const paths = petStore.paths;
  const items = Object.keys(paths);

  console.log(Object.keys);

  const elements = items.map(function (item, index) {
    if (paths[item].hasOwnProperty('get')) {
      return (
        <div>
          <h3> {item} </h3>
          <p> {paths[item].get.description} </p>
        </div>
      );
    }
  });

  return <div>{elements}</div>;
}

// {petStore.paths['/pet'].post.description}
