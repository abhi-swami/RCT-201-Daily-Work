import {useState} from "react";

import "./App.css";
import Button from "./Components/Button";
import IncDecButton from "./Components/IncDecButton";

function App() {
  const [count,setCount]=useState<number>(0)

  const handleClick = (param: string) => {
    alert(`${param} Triggered`);
  };
  const handleChange=(param:number)=>{
    setCount(count+param)
  }

  return (
    <div className="App">
      <Button text="Click Me" handleClick={handleClick} />
      <hr/>
      <div>
        <h2>Counter</h2>
        <h4>Count:{count}</h4>
        <IncDecButton value={-1} handleChange={handleChange}>DEC</IncDecButton>
        <IncDecButton value={+1} handleChange={handleChange}>INCE</IncDecButton>
        {/* <IncDecButton handleChange={()=>setCount(prvCount=>prvCount-1)}>DEC</IncDecButton>
        <IncDecButton handleChange={()=>setCount(prvCount=>prvCount+1)}>INCE</IncDecButton> */}
      </div>
    </div>
  );
}

export default App;

