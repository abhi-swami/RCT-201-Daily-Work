import React from 'react';

import './App.css';
import Btn from "./Components/Button";
import Counter from "./Components/Counter"


function App() {

  return (
    <div className="App">
      <Btn color="green" title="Click Me"/>
      <Counter/>
    </div>
  );
}

export default App;
