import React, { useState, useEffect } from 'react';
import './style.css';

import petStore from './petstore.json';

export default function App() {
  const paths = petStore.paths;
  const items = Object.keys(paths);
  const [selectedItem, setSelectedItem] = useState('');

  console.log(Object.keys);

  function handleResourceClick(item) {
    setSelectedItem(item);
    console.log(item);
  }

  const elements = items.map(function (item, index) {
    if (paths[item].hasOwnProperty('get')) {
      return (
        <div>
          <h3 onClick={() => handleResourceClick(item)}> {item} </h3>
          <p> {paths[item].get.summary} </p>
        </div>
      );
    }
  });

  return (
    <div className="container">
      <aside>{elements}</aside>{' '}
      <main>
        <h2> Main content here </h2>
      </main>
    </div>
  );
}

// {petStore.paths['/pet'].post.description}
