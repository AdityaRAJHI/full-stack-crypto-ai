import React from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import Onboarding from './components/Onboarding';
    import Dashboard from './components/Dashboard';
    import FAQ from './components/FAQ';
    import Community from './components/Community';
    import P2P from './components/P2P';

    function App() {
      return (
        <div className="container">
          <nav className="nav">
            <h1>A-Crypto</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/introduce">Introduce</Link></li>
              <li><Link to="/faq">FAQs</Link></li>
              <li><Link to="/community">Community</Link></li>
              <li><Link to="/p2p">P2P</Link></li>
            </ul>
            <div className="auth-buttons">
              <button>Sign In</button>
              <button>Register</button>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/community" element={<Community />} />
            <Route path="/p2p" element={<P2P />} />
          </Routes>
          <footer className="footer">
            <p>made with love by RajkumarSinha</p>
          </footer>
        </div>
      );
    }

    export default App;
