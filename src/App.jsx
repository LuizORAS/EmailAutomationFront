import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from './Header';  
import BodyMain from './BodyMain';
import Footer from './Footer';

function App() {
  return (
    <div className='MainBody'>
      <Router>
        <Header />
        <BodyMain />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
