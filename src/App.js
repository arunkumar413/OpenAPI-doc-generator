import React, { useState, useEffect } from 'react';
import './style.css';

import petStore from './petstore.json';

export default function App() {
  const paths = petStore.paths;
  const items = Object.keys(paths);
  const [selectedItem, setSelectedItem] = useState('');

  console.log(Object.keys);

  function handleResourceClick(clickedEle) {
    setSelectedItem(clickedEle);
    console.log(clickedEle);
  }

  function selectedElementInfo() {
    if (selectedItem != '') {
      return <p>{paths[selectedItem].get.summary} </p>;
    } else return <p> </p>;
  }

  const elements = items.map(function (item, index) {
    if (paths[item].hasOwnProperty('get')) {
      return (
        <div key={index.toString()}>
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
        <h2> {selectedItem} </h2>

        {selectedElementInfo()}
      </main>
    </div>
  );
}

// {petStore.paths['/pet'].post.description}
