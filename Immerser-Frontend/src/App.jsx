import 'bootstrap/dist/css/bootstrap.min.css';
import { React } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Body from '../components/Body.jsx';

function App() {

  return (
    <Router>
      <Navbar />
      <Body />
      <Footer />
    </Router>
  );
}

export default App
