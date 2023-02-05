
import { useDispatch, useSelector } from 'react-redux';

import {increment,decrement} from "../redux/Counter/CounterAction"

function Counter() {
  const count = useSelector((store) => store.counterReducer.count);
  console.log(count);
  const dispatch = useDispatch();
  return (
    <div >
      <h1>{count}</h1>
      <div>
          <button onClick={()=> dispatch(increment(10))}>+</button>
          <button onClick={()=> dispatch(decrement(10))}>-</button>
      </div>
    </div>
  );
}

export default Counter;