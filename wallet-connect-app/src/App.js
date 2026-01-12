import './App.css';
import { useAppKit, useAppKitAccount } from '@reown/appkit/react';

function App() {
  const { open } = useAppKit();
  const { address, isConnected } = useAppKitAccount();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Blockchain Wallet Connector</h1>
        
        <div className="wallet-info">
          {isConnected ? (
            <div className="connected-info">
              <p>✅ Wallet Connected!</p>
              <p className="address">Address: {address}</p>
            </div>
          ) : (
            <p className="not-connected">No wallet connected</p>
          )}
        </div>

        <button 
          onClick={() => open()}
          className="connect-button"
        >
          {isConnected ? 'Switch Wallet' : 'Connect Wallet'}
        </button>
      </header>
    </div>
  );
}

export default App;
