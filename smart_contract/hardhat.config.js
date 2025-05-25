require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.28',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/3be4YJsdzrAdqIZuMrOr9v2ekv2UXsE1',
      accounts: ['e63a1579213826b624a8a6cc28f9058cc5339561aaa89f1ab6582818261a2bcd'],
    },
  },
};