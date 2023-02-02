import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import {increment,decrement} from "./redux/action"

function App() {
  const count = useSelector((store) => store.count);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{count}</h1>
      <div>
          <button onClick={()=> dispatch(increment(10))}>+</button>
          <button onClick={()=> dispatch(decrement(10))}>-</button>
      </div>
    </div>
  );
}

export default App;