# alveyjs-lib
This is an extend lib for bitcoinjs-lib.
It extends the network type of bitcoinjs-lib.
It also provides an useful lib to help you building ALV transactions.

## Installation
``` bash
npm install alveyjs-lib
```

## Setup
### Node.js
``` javascript
var alveyjs = require('alveyjs-lib')
```

## New features
### Network
```
{
    alvey: {
        messagePrefix: '\x18Alvey Signed Message:\n',
        bech32: 'qc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x3a,
        scriptHash: 0x32,
        wif: 0x80
    },
    alvey_testnet: {
        messagePrefix: '\x18Alvey Signed Message:\n',
        bech32: 'tq',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x78,
        scriptHash: 0x6e,
        wif: 0xef
    }
}

```

### Utils
#### Utils.selectTxs
```javascript
/**
 * This is a function for selecting ALV utxos to build transactions
 * the transaction object takes at least 3 fields, value(unit is 1e-8 ALV) , confirmations and isStake
 *
 * @param [transaction] unspentTransactions
 * @param Number amount(unit: ALV)
 * @param Number fee(unit: ALV)
 * @returns [transaction]
 */
function selectTxs(unspentTransactions, amount, fee)
```
#### Utils.buildPubKeyHashTransaction
```javascript
/**
 * This is a helper function to build a pubkeyhash transaction
 * the transaction object takes at least 5 fields, value(unit is 1e-8 ALV), confirmations, isStake, hash and pos
 *
 * @param bitcoinjs-lib.KeyPair keyPair
 * @param String to
 * @param Number amount(unit: ALV)
 * @param Number fee(unit: ALV)
 * @param [transaction] utxoList
 * @returns String the built tx
 */
function buildPubKeyHashTransaction(keyPair, to, amount, fee, utxoList)
```
#### Utils.buildCreateContractTransaction
```javascript
/**
 * This is a helper function to build a create-contract transaction
 * the transaction object takes at least 5 fields, value(unit is 1e-8 ALV), confirmations, isStake, hash and pos
 *
 * @param bitcoinjs-lib.KeyPair keyPair
 * @param String code The contract byte code
 * @param Number gasLimit
 * @param Number gasPrice(unit: 1e-8 ALV/gas)
 * @param Number fee(unit: ALV)
 * @param [transaction] utxoList
 * @returns String the built tx
 */
function buildCreateContractTransaction(keyPair, code, gasLimit, gasPrice, fee, utxoList)
```
#### Utils.buildSendToContractTransaction
```javascript
/**
 * This is a helper function to build a send-to-contract transaction
 * the transaction object takes at least 5 fields, value(unit is 1e-8 ALV), confirmations, isStake, hash and pos
 *
 * @param bitcoinjs-lib.KeyPair keyPair
 * @param String contractAddress The contract address
 * @param String encodedData The encoded abi data
 * @param Number gasLimit
 * @param Number gasPrice(unit: 1e-8 ALV/gas)
 * @param Number fee(unit: ALV)
 * @param [transaction] utxoList
 * @returns String the built tx
 */
function buildSendToContractTransaction(keyPair, contractAddress, encodedData, gasLimit, gasPrice, fee, utxoList)
```
