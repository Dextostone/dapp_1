var ganache = require('ganache-cli');
var Web3 = require('web3');
if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider(ganache.provider()));
    console.log(web3.eth.accounts);
  }
exports.web3 = web3;
