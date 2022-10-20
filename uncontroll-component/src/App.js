import './App.css';
import React,{useRef} from "react";

function App() {
  let inputRef=useRef(null)
  let inputRef2=useRef(null)
  function SubmitForm(e){
    e.preventDefault()
    console.warn("Input Field 1 value:",inputRef.current.value)
    console.warn("Input Field 2 value:",inputRef2.current.value)
  }
  return (
    <div className="App">
      <h1>Uncontrolled Component!</h1>
      <form onSubmit={SubmitForm}>
        <input type="text" ref={inputRef}/><br/>
        <input type="text" ref={inputRef2}/><br/>
          <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
