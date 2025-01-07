import React from 'react';
    import { useNavigate } from 'react-router-dom';

    function Onboarding() {
      const navigate = useNavigate();

      const handleGetStarted = () => {
        navigate('/dashboard');
      };

      return (
        <div className="onboarding">
          <h1>One platform <br/> all things Crypto</h1>
          <p>Trade Crypto easily anytime, anywhere.</p>
          <div className="input-group">
            <input type="email" placeholder="Email Address...." />
            <button onClick={handleGetStarted}>Get started</button>
          </div>
        </div>
      );
    }

    export default Onboarding;
