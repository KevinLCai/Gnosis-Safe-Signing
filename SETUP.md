# Blockchain Wallet Connector - WalletConnect Integration

A simple React application that allows users to connect their blockchain wallet using WalletConnect/Reown AppKit.

## Setup Instructions

### 1. Get a WalletConnect Project ID

1. Visit [WalletConnect Dashboard](https://dashboard.walletconnect.com)
2. Create a new project
3. Copy your Project ID

### 2. Configure Environment Variables

Create or update `.env` file in the project root:

```
REACT_APP_WALLET_CONNECT_PROJECT_ID=your_project_id_here
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm start
```

The app will open at `http://localhost:3000`

## Features

- **Connect Wallet Button**: Click to open the WalletConnect modal
- **Wallet Detection**: Displays connected wallet address
- **Multi-Chain Support**: Supports Ethereum Mainnet and Sepolia testnet
- **Switch Wallet**: Easily switch between wallets

## How It Works

1. **Modal Setup**: The WalletConnect modal is initialized in `src/context/Web3Modal.jsx`
2. **App Component**: Uses hooks from `@reown/appkit/react` to display connection status
3. **EthersAdapter**: Uses Ethers.js v6 for blockchain interactions

## Supported Networks

- Ethereum Mainnet
- Sepolia Testnet

## Technologies Used

- React 18
- @reown/appkit
- @reown/appkit-adapter-ethers
- ethers.js v6

## Additional Resources

- [Reown AppKit Docs](https://docs.reown.com/appkit/overview)
- [WalletConnect SDK](https://docs.walletconnect.network)
- [Ethers.js Documentation](https://docs.ethers.org)

## License

MIT
