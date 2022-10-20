import './App.css';
import React, {useState} from "react";

function App() {
  const [data,setData]=useState("Sheri")
  function Update(){
    setData("Bilal")
  }
  return (
    <div className="App">
     <h1>Welcome___{data}</h1>
      <button onClick={Update}>Update Data</button>
    </div>
  );
}

export default App;
