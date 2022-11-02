require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain punch hunt glimpse food genius'; 
let testAccounts = [
"0x6ec7f319296b7a3893ba77e74643479671038cf9b993603f9d963c0667936e22",
"0xba9f1c3e8e364421dfb357e5bb2f1dbf7028ddffb7e5615872494ca5d3b283af",
"0x1cae7f2d75fb18c00c2038017df8e138595a0485da21513220ed4cdbf55f45fe",
"0x18daf1e7a9e1362fc6255efada2696611d08e23fda463806ef361906ea540cdd",
"0x56a7c31feaef00705b597bfe3bf0571d5af2ace90820a337b582686dbf29792a",
"0xac04d7d6f392bdafcb4b7aa074568eef232b598c8fe8d7f6035e5a8118a12549",
"0x268348f1e738aa513632017080ce3ee82a02023877e961bf5570ddb20aa93635",
"0xf85e0497f2dacc393fceecb52b673d56baaecbd2a863e8dab44a2969acadfe79",
"0x90a03f9a37fb11d463e7e7ecfbdfe9c937a458a9c533ea0b50a1d484ad5200bb",
"0xb3000192daa040143f7f947bf47d49987b3eacb3bd554848b48d871ef4e56576"
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

