require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name recipe magic artwork hope private army genre'; 
let testAccounts = [
"0xb569c7114bb2aa2ea821ff5173bf5df15859991dd164b6ef37afd728c5791cb0",
"0x119782871308d4ca17b0d1187e35203163b949167b408b75facefdb7f47e7311",
"0xc06b63f9d68cc4a6bb060ba6348ed9c1c30d025e4804c7f9cddcd6d198155bda",
"0x61dd8b93f9cc2e44f40d810e1c3c7d33918427f7cd266c4b989c2e9110a4a58c",
"0xdf05a2170d823f1a3aa23f8633b63cf07f8c2d9428f19c0f4059abb9e4789010",
"0xabbda3fd931b9b30d729fa230ac5b7aa5212a3646d37a20edefa020e46d30ed4",
"0x4693249c0cff12c185c3c8293d1b3af3ed3ad35802ad0450baecb8b819fcaa6e",
"0xe87d5ffa5099a56e3b7894841832de9d23a90d66b4430b95f8c0d862d4c4afbc",
"0x42d4a7c7b6ca018d7b852b0f6d19ccc2d767e6d796c580430c003564c6bd3b77",
"0xebee12378d9276b642239e62dd5076279970d7e389e8455ec3f965af06080912"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

