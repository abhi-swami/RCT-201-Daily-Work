
import './App.css';
import Calculator from "./Componants/Calculator"
import { useSelector } from 'react-redux';
import Counter from './Componants/Counter';
function App() {
  const val= useSelector(store=>store.calculatorReducer.res);
  console.log(val)
  return (
    <div className="App">
      <Counter/>
     <Calculator val={val}/>
    </div>
  );
}

export default App;
