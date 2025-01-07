import React, { useState } from 'react';

    function P2P() {
      const [assets, setAssets] = useState([]);
      const [newAssetName, setNewAssetName] = useState('');
      const [newAssetPrice, setNewAssetPrice] = useState('');

      const handleSellAsset = () => {
        if (newAssetName && newAssetPrice) {
          const newAsset = {
            id: Date.now(),
            name: newAssetName,
            price: parseFloat(newAssetPrice),
          };
          setAssets([...assets, newAsset]);
          setNewAssetName('');
          setNewAssetPrice('');
        }
      };

      const handleBuyAsset = (assetId) => {
        const updatedAssets = assets.filter((asset) => asset.id !== assetId);
        setAssets(updatedAssets);
      };

      return (
        <div className="p2p">
          <h2>Peer-to-Peer Trading</h2>
          <div className="sell-form">
            <input
              type="text"
              placeholder="Asset Name"
              value={newAssetName}
              onChange={(e) => setNewAssetName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Price"
              value={newAssetPrice}
              onChange={(e) => setNewAssetPrice(e.target.value)}
            />
            <button onClick={handleSellAsset}>List Asset</button>
          </div>
          <div className="asset-list">
            {assets.map((asset) => (
              <div key={asset.id} className="asset-card">
                <h3>{asset.name}</h3>
                <p>Price: ${asset.price}</p>
                <button onClick={() => handleBuyAsset(asset.id)}>Buy</button>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default P2P;
