import './App.css';
import React,{useState,useEffect} from "react";

function App() {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    console.log("useEffect")
  });
  return (
    <div className="App">
      <h1>UseEffect in React! {count}</h1>
      <button onClick={()=>setCount(count+1)}>Update Data</button>
    </div>
  );
}

export default App;
