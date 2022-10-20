import './App.css';
import Method from "./File";
import {useState} from "react";

function App() {
  const [name,setName]=useState("Sheri")
  return (
    <div className="App">
      <Method name={name}/>
      <button onClick={()=>{setName("Haider")}}>Click Me!</button>
    </div>
  );
}
export default App;
