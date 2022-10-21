import './App.css';
import Home from "./Home";
import About from "./About";
import {Routes,Route,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Link to="/home">Home Page</Link><br/><br/>
        <Link to="/about">About Page</Link>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;
