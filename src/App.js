import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React,{useState} from 'react'
import About from './components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [textMode, settextMode] = useState("Dark")
  const handleMode =()=>{
    if(mode==="light"){
      setMode("dark")
      settextMode("Light")
      document.body.style.backgroundColor = "black"
      document.body.style.color = "white"
    }
    else{
      setMode("light")
      settextMode("Dark")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
}
  return (
    <Router>
    <>
      {/* <Navbar title="PRops TItle" /> */}
      <Navbar title="TextEditor" bgMode={mode} handleMode={handleMode} textMode={textMode}/>
   
    <Switch>
          <Route path="/about">
          <div className="container my-3">
          <About title="About This Website"></About>
          </div>
          </Route>
          <Route path="/">
          <div className="container my-3">
          <Textarea heading="Write your text below" bgMode={mode}/>
        </div>
          </Route>
        </Switch>
  </>
  </Router>
  );
}

export default App;
