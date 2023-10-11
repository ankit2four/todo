import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; 

function Login() {
  const navigate = useNavigate();
  const { setCurrentUser } = useUser();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState('');
  

  const handleSignUp = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter a valid username and password.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      setError('Username already exists. Please choose a different one.');
      return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    const user = users.find((user) => user.username === username && user.password === password);
    setLoggedIn(true);
    setCurrentUser(user);
    navigate('/Home1');
   
  };

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter a valid username and password.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.username === username && user.password === password);

    if (!user) {
      setError('Invalid username or password. Please try again.');
      return;
    }

    setLoggedIn(true);
    setCurrentUser(user);
    

    // Redirect to a different page after successful login
    navigate('/Home1');
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="login-container">
      {loggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <button id="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          {error && <p className="error">{error}</p>}
          <form>
            <label htmlFor="username-input">
              Username:
              <input
                type="text"
                id="username-input"
                className="input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label htmlFor="password-input">
              Password:
              <input
                type="password"
                id="password-input"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="button" className="login-button" onClick={handleLogin}>
              Login
            </button>
            <button type="button" className="signup-button" onClick={handleSignUp}>
              Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Login;
