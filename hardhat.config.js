const fs = require('fs');

const privateKey = fs.readFileSync('.secret').toString().trim();
require('@nomiclabs/hardhat-waffle');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  solidity: '0.8.4',
};
