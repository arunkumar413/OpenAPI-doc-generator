import React from 'react';
import './style.css';

import petStore from './petstore.json';

export default function App() {
  const paths = petStore.paths;
  console.log(paths);

  const items = Object.keys(paths);

  let elements = items.map(function (item, index) {
    console.log(item);
    // console.log(petStore.paths[item].put.description);
    return <h5> {petStore.paths[item].put.description} </h5>;
  });

  return <div>{elements}</div>;
}
