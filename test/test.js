const fs = require('fs');
const recognizer = require('../src');
const assert = require('chai').assert;

describe('recognize valid keyfiles', () => {
    const json = JSON.parse(fs.readFileSync('test/keyfiles-valid-instances.json'));

    it('type: hucersale', () => {
        assert.deepEqual(['hucersale', undefined], recognizer(json['hucersale']))
    });
    it('type: webu v3 ghuc', () => {
        assert.deepEqual(['webu', 3], recognizer(json['webu-v3-ghuc']))
    });
    it('type: webu v3 huc', () => {
        assert.deepEqual(['webu', 3], recognizer(json['webu-v3-huc']))
    });
    it('type: webu v3 parity', () => {
        assert.deepEqual(['webu', 3], recognizer(json['webu-v3-parity']))
    });
    it('type: webu v3 myhappyucwallet', () => {
        assert.deepEqual(['webu', 3], recognizer(json['webu-v3-myhappyucwallet']))
    });
});

describe('recognize invalid keyfiles', () => {
    const json = JSON.parse(fs.readFileSync('test/keyfiles-invalid-instances.json'));

    it('missing key-value pair', () => {
        assert.notDeepEqual(['webu', 3], recognizer(json['missing-key']))
    });
    it('invalid key', () => {
        assert.notDeepEqual(['webu', 3], recognizer(json['invalid-key']))
    });
    it('invalid value-type', () => {
        assert.notDeepEqual(['webu', 3], recognizer(json['invalid-value-type']))
    });
});
