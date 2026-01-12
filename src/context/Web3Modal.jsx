import { createAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { mainnet, sepolia } from '@reown/appkit/networks';

const projectId = process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID || 'YOUR_PROJECT_ID_HERE';

// Create the modal
const modal = createAppKit({
  adapters: [new EthersAdapter()],
  networks: [mainnet, sepolia],
  metadata: {
    name: 'Wallet Connect App',
    description: 'Simple WalletConnect Integration',
    url: 'https://localhost:3000',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  },
  projectId,
  features: {
    analytics: true
  }
});

export default modal;
