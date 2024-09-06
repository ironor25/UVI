require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


const SEPOLIA_URL = process.env.SEPOLIA_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    localhost:{url:"http://127.0.0.1:8545/"},
    sepolia :{
      url : SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
      chainId : 11155111
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
