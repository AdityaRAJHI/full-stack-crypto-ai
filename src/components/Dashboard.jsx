import React from 'react';

    function Dashboard() {
      return (
        <div className="dashboard">
          <div className="sidebar">
            <span>🏠</span>
            <span>📈</span>
            <span>📊</span>
            <span>💰</span>
            <span>⚙️</span>
            <span>➡️</span>
          </div>
          <div className="main-content">
            <div className="header">
              <h2>Home</h2>
              <div className="search-bar">
                <input type="text" placeholder="Search" />
                <span>🔍</span>
              </div>
              <div className="icons">
                <span>🔔</span>
                <span>👤</span>
              </div>
            </div>
            <div className="content">
              <div className="card">
                <h3>A-CRYPTO AI</h3>
                <p>New Product Combines with AI</p>
                <p>Analyze the cryptocurrency market using AI.</p>
                <button>Learn More.</button>
              </div>
              <div className="card">
                <h3>ETH/USD</h3>
                <p>Graph here</p>
                <div>
                  <button>Day</button>
                  <button>Week</button>
                  <button>Month</button>
                </div>
              </div>
              <div className="card">
                <h3>BTC - USD</h3>
                <p>$ 65,000.30</p>
                <p>6.2%</p>
              </div>
              <div className="card">
                <h3>ETH - USD</h3>
                <p>$ 3,527.55</p>
                <p>1.4%</p>
              </div>
              <div className="card">
                <h3>BNB - USD</h3>
                <p>$ 623.19</p>
                <p>10.5%</p>
              </div>
              <div className="card">
                <h3>ATOM - USD</h3>
                <p>$ 20.55</p>
                <p>22.1%</p>
              </div>
              <div className="card">
                <h3>USDC - USD</h3>
                <p>$ 1027.10</p>
                <p>26.8%</p>
              </div>
              <div className="card">
                <h3>Overview</h3>
                <p>Graph here</p>
                <div>
                  <button>Day</button>
                  <button>Week</button>
                  <button>Month</button>
                </div>
              </div>
              <div className="card">
                <h3>Targets</h3>
                <p>85%</p>
              </div>
              <div className="card">
                <h3>Market Trend</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Last Price</th>
                      <th>24h Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BTC Bitcoin</td>
                      <td>$ 65,000.30</td>
                      <td>6.24</td>
                    </tr>
                    <tr>
                      <td>BNB BNB</td>
                      <td>$ 623.19</td>
                      <td>10.58</td>
                    </tr>
                    <tr>
                      <td>ETH Ethereum</td>
                      <td>$ 3,527.55</td>
                      <td>1.42</td>
                    </tr>
                    <tr>
                      <td>LTC Litecoin</td>
                      <td>$ 118.20</td>
                      <td>20.23</td>
                    </tr>
                    <tr>
                      <td>ADA Cardano</td>
                      <td>$ 32.12</td>
                      <td>19.05</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    }

    export default Dashboard;
