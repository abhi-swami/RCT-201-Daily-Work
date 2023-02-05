
import './App.css';
import { useSelector,useDispatch } from 'react-redux';


function App() {
  const count=useSelector(store=>store)
  const disptch=useDispatch();
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
