import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* user is not running metamask 
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/a1a942e169be4eb89dae54466236adff'
  );
  web3 = new Web3(provider);
}

export default web3;