import React, { useState } from 'react';
    import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
    import { Bar } from 'react-chartjs-2';
    import { useNavigate } from 'react-router-dom';
    import WalletModal from './WalletModal';
    
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
    
    const Dashboard = () => {
      const navigate = useNavigate();
      const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Sample Bar Chart',
          },
        },
      };
    
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: [100, 200, 150, 300, 250, 400, 350],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: [200, 300, 250, 400, 350, 500, 450],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
    
      const handleHomeClick = () => {
        console.log('Home icon clicked');
        navigate('/');
      };
    
      const handleLineChartClick = () => {
        console.log('Line chart icon clicked');
        navigate('/dashboard');
        // Add your action here, e.g., navigate to a different page
      };
    
      const handleBarChartClick = () => {
        console.log('Bar chart icon clicked');
        navigate('/marketplace');
        // Add your action here, e.g., display a modal
      };
    
      const handleMoneyClick = () => {
        console.log('Money icon clicked');
        setIsWalletModalOpen(true);
        // Add your action here, e.g., open a transaction page
      };
    
      const handleSettingsClick = () => {
        console.log('Settings icon clicked');
        navigate('/settings');
        // Add your action here, e.g., open a settings page
      };
    
      const handleLogoutClick = () => {
        console.log('Logout icon clicked');
        // Add your action here, e.g., log the user out
      };
    
      const closeWalletModal = () => {
        setIsWalletModalOpen(false);
      };
    
      return (
        <div className="dashboard">
          <div className="sidebar">
            <button onClick={handleHomeClick}>🏠 Home</button>
            <button onClick={handleLineChartClick}>📈 Charts</button>
            <button onClick={handleBarChartClick}>📊 Marketplace</button>
            <button onClick={handleMoneyClick}>💰 Wallet</button>
            <button onClick={handleSettingsClick}>⚙️ Settings</button>
            <button onClick={handleLogoutClick}>➡️ Logout</button>
          </div>
          <div className="main-content">
            <div className="header">
              <h2>Dashboard</h2>
            </div>
            <div className="content">
              <div className="chart-container">
                <Bar options={options} data={data} />
              </div>
            </div>
          </div>
    
          <WalletModal isOpen={isWalletModalOpen} onClose={closeWalletModal} />
        </div>
      );
    };
    
    export default Dashboard;
