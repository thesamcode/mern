
import React from 'react';
import './App.css';
// import Main from './views/Main'
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/products/" />
        <Route element={<Detail />} path="/products/:id" />
        <Route element={<Update />} path="/products/:id/edit"/>
      </Routes>
    </div>
  );
}
export default App;

{/* function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App; */}
