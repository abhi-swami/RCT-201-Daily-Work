import { useState } from "react";
import "./App.css";
import { handleAdd, handleReduce } from "./redux/action";
import { store } from "./redux/store";

function App() {
  const [forceUpdate, setForceUpdate] = useState(0);
  const { dispatch, subscribe, getState } = store;

  const { count } = getState();

  const handleAddition = () => {
    dispatch(handleAdd(1));
  };
  const handleSub = () => {
    dispatch(handleReduce(-1));
  };
  subscribe(() => {
    setForceUpdate((preVal) => preVal + 1);
  });

  return (
    <div className="App">
      <h1>count is {count}</h1>
      <button onClick={handleSub}>-</button>
      <button onClick={handleAddition}>+</button>
    </div>
  );
}

export default App;
