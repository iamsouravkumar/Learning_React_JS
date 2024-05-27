import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';

function App() {
  return (
    <>
<Navbar title="TextUtils2" about="About Us"/>
<TextForm heading="Enter the text below to analyze"/>
</>
  );
}

Navbar.PropTypes = {
  title: PropTypes.string,
  about: PropTypes.string 
}

export default App;
