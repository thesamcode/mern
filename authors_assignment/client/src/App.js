
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Update from './views/Update';
import New from './views/New';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<New />} path="/new" />
        <Route element={<Update />} path="/edit/:id"/>
      </Routes>
    </div>
  );
}
export default App;