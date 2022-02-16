import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import {TextForm} from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light') // whether dark mode is available or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const toggleMode = () => {
    if( mode === 'light' ){
      setMode('dark')
      document.body.style.backgroundColor= '#383838'
      showAlert("dark mode is enabled", "success")
    }else if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor= '#f8f9fa'
      showAlert("light mode is enabled", "success")
    }
  }
  
  return (
    <>
    {/* Props , only string can be sent */}
    
    <Router>
      <Navbar title = "TextUtils" about = "About Us" mode= {mode} toggleMode = {toggleMode}  />
      <Alert alert = {alert} />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
        <TextForm showAlert={showAlert} mode= {mode} />
        </Route>
      </Switch>
    </Router>
      </>
  );
}

export default App;
