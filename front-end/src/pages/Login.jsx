import React, { useState } from 'react';
import Button from '../components/Button';
import NavBar from '../components/NavBar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    // For now, just log email and password (later replace it with an API call)
    console.log('Logging in with:', email, password);
  };

  return (
    <div>
    <div class="navbar">
        <NavBar/>
    </div>
      
      {/* Login Form */}
      <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        
        <form onSubmit={handleLogin}>
          {/* Email input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div class="flex space-x-3 justify-center">
            {/* Login Button */}
            <Button text="Login" onClick={handleLogin} color="bg-blue-500" />

            {/* SignUp Button */}
            <Button text="Sign Up" color="bg-blue-500"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
