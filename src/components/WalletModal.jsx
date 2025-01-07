import React from 'react';
    
    const WalletModal = ({ isOpen, onClose }) => {
      if (!isOpen) return null;
    
      const sampleTransactions = [
        { id: 1, date: '2023-08-25', description: 'Sold BTC', amount: -0.5 },
        { id: 2, date: '2023-08-24', description: 'Bought ETH', amount: 2 },
        { id: 3, date: '2023-08-23', description: 'Sold LTC', amount: -5 },
      ];
    
      return (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Wallet Details</h3>
              <button className="modal-close" onClick={onClose}>
                &times;
              </button>
            </div>
            <div className="amount-card">
              <h4>Current Balance</h4>
              <p>$12,345.67</p>
            </div>
            <div className="expenses-list">
              <h4>Recent Transactions</h4>
              <ul>
                {sampleTransactions.map((transaction) => (
                  <li key={transaction.id}>
                    <span>{transaction.date}</span>
                    <span>{transaction.description}</span>
                    <span>
                      {transaction.amount > 0 ? '+' : ''}
                      {transaction.amount}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    };
    
    export default WalletModal;
