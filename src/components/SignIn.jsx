import React, { useState } from 'react';

    function SignIn() {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');

      const handleSubmit = (event) => {
        event.preventDefault();

        if (username.trim() === '' || password.trim() === '') {
          setError('Please fill in all fields.');
        } else {
          setError('');
          // Perform sign-in action here (e.g., send data to server)
          console.log('Sign in successful!');
          // Reset form fields after successful sign-in
          setUsername('');
          setPassword('');
        }
      };

      return (
        <div className="signin-container">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Sign In</button>
          </form>
        </div>
      );
    }

    export default SignIn;
