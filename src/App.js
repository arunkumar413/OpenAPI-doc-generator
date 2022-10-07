import React from 'react';
import './style.css';

import petStore from './petstore.json';

export default function App() {
  console.log(petStore);
  const paths = petStore.paths;

  const items = Object.keys(paths);

  let elements = items.map(function (item, index) {
    console.log(item);
    return <h5> {petStore.paths['/pet'].post.description} </h5>;
  });

  return <div>{elements}</div>;
}
