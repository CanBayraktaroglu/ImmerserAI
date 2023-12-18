import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Body from '../components/Body.jsx';
import "./App.css";
import backgroundImage from './assets/background2.jpg';


function App() {

  const divStyle = {
    backgroundImage: `url(${backgroundImage})`
  }

  return (
    <div style={divStyle} className='mainDiv'>
      <Router>
        <Navbar />
        <Body />
        <Footer />
      </Router>
    </div>
  );
}

export default App
