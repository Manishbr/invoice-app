import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate,  } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home';
import Header from './components/Header';
import InvoicePage from './pages/InvoicePage';
import Login from './components/Login';
import HomeContent from './components/HomeContent';
import Signup from './components/Signup';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsAuthenticated(!!localStorage.getItem('token'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className="App">
      <Router>
        <Header /> {/* Move Header inside Router */}
        <Routes>
          <Route path="/login1" element={<Home />} />
          <Route path="/" element={isAuthenticated ? <HomeContent /> : <Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
