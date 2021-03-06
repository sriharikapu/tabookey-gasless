var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "digital unknown jealous mother legal hedgehog save glory december universe spread figure custom found six"

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
		verbose: process.env.VERBOSE,
  		host: "127.0.0.1",
  		port: 8545,
                network_id: "*",
                //gas: 8000000,  
                gas:5000000,
		gasPrice: 1000,

    },
    npmtest: { //used from "npm test". see pakcage.json 
		verbose: process.env.VERBOSE,
  		host: "127.0.0.1",
  		port: 8544,
                network_id: "*",

    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/c3422181d0594697a38defe7706a1e5b")
      },
      network_id: 3
    }
  },
  mocha: {
      slow: 1000
  }
};
