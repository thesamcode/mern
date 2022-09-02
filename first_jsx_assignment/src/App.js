

import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // everything in this return statement can only be in this bracket set <>. One parent and everything has to be a child of one thing.
    // <div className="App">
    <div style={{padding: "30px", textAlign: "left"}}>
        <h1>Hello Dojo!</h1>
        <h2>Things I need to do:</h2>
        <list>
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </list>
    </div>
  );
}

export default App;
