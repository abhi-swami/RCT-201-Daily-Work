import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/Home';
import AllPages from './Pages/AllPages';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllPages/>
    </div>
  );
}

export default App;
