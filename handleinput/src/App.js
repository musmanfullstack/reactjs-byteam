import './App.css';
import React, {useState} from "react";

function App() {
  const [data,setData]=useState()
  function getData(val){
    setData(val.target.value)
  }
  return (
    <div className="App">
      <h1>Hello:{data}</h1>
      <input type="text" onChange={getData}/>
    </div>
  );
}
export default App;
