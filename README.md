# ERC20 Token Airdrop Project

## Description
This project is a Hardhat-based implementation for deploying and managing ERC20 tokens, particularly focusing on performing token airdrops. It allows token creators to distribute tokens to multiple recipients efficiently and securely.

## Features
- Deploy ERC20 tokens.
- Perform airdrops to a list of wallet addresses.
- Utilizes Hardhat for Ethereum development tasks.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed (see [nodejs.org](https://nodejs.org/))
- Hardhat installed (`npm install --save-dev hardhat`)
- An Ethereum wallet with testnet/mainnet Ether for deployment and gas fees.

## Installation
To install the necessary dependencies, run the following command:
```bash
npm install
```

## Configuration
Create a `.env` file in the root directory of your project and add the following environment variables:
```
ALCHEMY_API_KEY=YourAlchemyAPIKey
PRIVATE_KEY=YourEthereumWalletPrivateKey
```
Replace `YourAlchemyAPIKey` and `YourEthereumWalletPrivateKey` with your actual Alchemy API key and Ethereum wallet private key.

## Usage
Here's a brief rundown on how to deploy the token and perform an airdrop:

1. **Deploy the Token:**
   - Use the provided script `scripts/deploy.js` to deploy your ERC20 token.
   - Run `npx hardhat run scripts/deploy.js --network <network-name>`.
   - Replace `<network-name>` with the Ethereum network you wish to deploy to (e.g., `rinkeby`, `mainnet`).

2. **Perform an Airdrop:**
   - Update the `scripts/airdrop.js` with your token's address and the list of recipient addresses.
   - Run `npx hardhat run scripts/airdrop.js --network <network-name>`.


## License
Distributed under the MIT License. See `LICENSE` for more information.
