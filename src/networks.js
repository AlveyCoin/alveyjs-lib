module.exports = {
    alvey: {
        messagePrefix: '\x15Alvey Signed Message:\n',
        bech32: 'qc',
        bip32: {
            public: 0x0488b21e,
            private: 0x0488ade4
        },
        pubKeyHash: 0x17,
        scriptHash: 0x32,
        wif: 0x80
    },
    alvey_testnet: {
        messagePrefix: '\x15Alvey Signed Message:\n',
        bech32: 'tq',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x58,
        scriptHash: 0x6e,
        wif: 0xef
    }
}
