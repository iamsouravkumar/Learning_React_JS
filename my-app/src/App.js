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
  return (
    <>
<Navbar title="TextUtils2" about="About Us"/>
<Alert alert={alert}/>
<TextForm heading="Enter the text below to analyze" showAlert={showAlert}/>
{/* <About/> */}
</>
  );
}

Navbar.propTypes = {
  title: propTypes.string,
  about: propTypes.string 
}

export default App;
