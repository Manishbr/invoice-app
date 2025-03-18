import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const userData = { username, password };
    localStorage.setItem('user', JSON.stringify(userData));
    
    alert('Signup successful! Please log in.');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-6 w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSignup} className="flex flex-col">
          <input
            type="text"
            placeholder="Choose a Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-2 p-2 border rounded"
            required
          />
          <input
            type="password"
            placeholder="Choose a Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 p-2 border rounded"
            required
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account? 
          <button onClick={() => navigate('/login')} className="text-blue-500 ml-1">Login</button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
