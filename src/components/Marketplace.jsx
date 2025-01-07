import React, { useState, useEffect } from 'react';

    function Marketplace() {
      const [assets, setAssets] = useState([]);

      useEffect(() => {
        // Fetch data from an API or use static data
        const sampleAssets = [
          { id: 1, name: 'Bitcoin', symbol: 'BTC', price: 65000 },
          { id: 2, name: 'Ethereum', symbol: 'ETH', price: 3500 },
          { id: 3, name: 'Litecoin', symbol: 'LTC', price: 200 },
          { id: 4, name: 'Ripple', symbol: 'XRP', price: 1.5 },
          { id: 5, name: 'Cardano', symbol: 'ADA', price: 2.5 },
        ];
        setAssets(sampleAssets);
      }, []);

      return (
        <div className="marketplace">
          <h2>Crypto Marketplace</h2>
          <div className="asset-list">
            {assets.map((asset) => (
              <div key={asset.id} className="asset-card">
                <h3>{asset.name} ({asset.symbol})</h3>
                <p>Price: ${asset.price}</p>
                <button>Buy</button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default Marketplace;
