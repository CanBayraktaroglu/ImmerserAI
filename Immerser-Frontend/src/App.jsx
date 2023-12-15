import './App.css'
import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />

      <Footer />
    </Router>
  );
}

export default App
