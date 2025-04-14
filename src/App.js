//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages: 
import Project from './pages/Project';
import About from "./pages/About";
import Navigation from './components/Navigation';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
    /*
    <div className="App">
      <header className="App-header">
        



       
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
    </div>
    */
  );
}


export default App;
