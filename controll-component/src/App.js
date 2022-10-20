import './App.css';
import React,{useState} from "react";
function App() {
  let [val,setVal]=useState("")
  let [item,setItem]=useState("")
  return (
    <div className="App">
      <h1>Val: {val}</h1>
      <h1>Item: {item}</h1>
      <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/><br/>
        <input type="text" value={item} onChange={(e)=>setItem(e.target.value)}/>
    </div>
  );
}

export default App;
