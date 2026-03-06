import React from 'react';
import Navbarr from './Components/Navbarr'
import { useState } from 'react';
import TextForm from './Components/TextForm';
import Alert from './Components/Alertt';
import About from './Components/About'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); //wheteher it is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(67, 61, 102)';
      showalert("Dark Mode has been Enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showalert("Light Mode has been Enabled", "success")
    }
  }

  const [alert, setAlert] = useState(null)

  const showalert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Router>
          <Navbarr mode={mode} toggleMode={toggleMode} />
           <Alert alert={alert} />
          <div className="container my-3">
            <Routes>
              <Route path="/" element={
                <TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode} />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </div>
      </Router>
    </>
  );
}

export default App;
