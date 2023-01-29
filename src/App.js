import React from 'react';
import Navbar from './components/Navigation/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './pages/HomePage/LandingPage';
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path="/Dashboard" element = { <Dashboard/> }/>
        <Route exact path="/" element = { <LandingPage/> }/>
      </Routes>
      
    </Router>

    
    
    </div>
  )
}

export default App 