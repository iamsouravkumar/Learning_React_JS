import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'

function App() {
  return (
    <>
<Navbar title="TextUtils2" about="About Us"/>
</>
  );
}

Navbar.PropTypes = {
  title: PropTypes.string,
  about: PropTypes.string 
}

export default App;
