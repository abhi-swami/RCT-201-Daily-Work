// import axios from 'axios';
import { useState } from 'react';
import './App.css';
import AddCountry from './Components/AddCountry';
import AddCity from './Components/AddCity';
import { Obj } from './Components/AddCity';
import CityCountryTabel from './Components/CityCountryTabel';

// const url = "http://localhost:8080/countries/1";



function App() {
  const [data,setData]=useState<Obj[]>([])
  const [countriesData, setCountriesData] = useState<string[]>([])
  const onAddCountry = (x: string): void => {
    setCountriesData([...countriesData,x])
    // uploadData();
  }
  // console.log(countriesData)
  // const uploadData = ():void => {
  //   axios.post<string[]>(
  //     `${url}`,
  //     {...countriesData},
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Accept: 'application/json',
  //       },
  //     },
  //   )
  // }

  

  const onAdd=(x:Obj):void=>{
    // console.log(x)
    setData([...data,x])
  }
  console.log(data)
  return (
    <div className="App">
      <AddCountry onAddCountry={onAddCountry} />
      <AddCity onAdd={onAdd} countriesData={countriesData}/>
      <CityCountryTabel data={data}/>
    </div>
  );
}

export default App;
