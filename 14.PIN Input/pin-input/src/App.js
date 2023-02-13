
import './App.css';
import InputBoxes from './Components/InputBoxes';
import { useState } from 'react';

function App() {
  const [otp,setOpt]=useState('');
  const handleOtp=(param)=>{
    setOpt(param)
  }
  return (
    <div className="App">
     <InputBoxes numberOfBoxes={4} handleOtp={handleOtp}/>
     <h2>{otp}</h2>
    </div>
  );
}

export default App;
