import './App.css';
import Navbar from './components/Navbar';
import propTypes from 'prop-types'
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';


function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (type, message )=>{
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
     setAlert (null)
    }, 1500);
  }
  const [mode, setMode] = useState('light')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
    }
    else{
      setMode('dark')
    }
  }
  return (
    <>
<Navbar title="TextUtils2" about="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} mode={mode}/>
<TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert}/>
{/* <About/> */}
</>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
  about: propTypes.string 
}

export default App;
