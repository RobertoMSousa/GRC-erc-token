require('dotenv').config();

require("@nomicfoundation/hardhat-toolbox");

const { API_SEPOLIA_URL, PRIVATE_KEY, API_GOERLI_URL, API_MAINNET_URL } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_SEPOLIA_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    goerli: {
      url: API_GOERLI_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    mainnet: {
      url: API_MAINNET_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
};