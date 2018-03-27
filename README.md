# happyuc-keyfile-recognizer

[![Build Status](https://travis-ci.org/happyuc/happyuc-keyfile-recognizer.svg?branch=master)](https://travis-ci.org/happyuc/happyuc-keyfile-recognizer) [![Coverage Status](https://coveralls.io/repos/github/happyuc/happyuc-keyfile-recognizer/badge.svg?branch=master)](https://coveralls.io/github/happyuc/happyuc-keyfile-recognizer?branch=master) [![Code Climate](https://codeclimate.com/github/happyuc/happyuc-keyfile-recognizer/badges/gpa.svg)](https://codeclimate.com/github/happyuc/happyuc-keyfile-recognizer) [![npm version](https://badge.fury.io/js/happyuc-keyfile-recognizer.svg)](https://badge.fury.io/js/happyuc-keyfile-recognizer)
[![dependencies Status](https://david-dm.org/happyuc/happyuc-keyfile-recognizer/status.svg)](https://david-dm.org/happyuc/happyuc-keyfile-recognizer)

Checks for structural sanity (key-names and value-types) of `json`-keyfiles.

Currently recognized keyfiles:
 - Hucersale
 - [webu-secret-storage](https://github.com/happyuc-project/wiki/wiki/Webu-Secret-Storage-Definition) (v3)
  - scrypt
  - pbkdf2

## Installation

```shell
npm install --save happyuc-keyfile-recognizer
```

## Usage

```javascript
var fs = require('fs');
var recognizer = require('happyuc-keyfile-recognizer');

fs.readFile('keyfile.json', (err, data) => {
    var json = JSON.parse(data);
    var result = recognizer(json);
    /** result
     *               [ 'webu', 3 ]   webu (v3) keyfile
     *  [ 'hucersale', undefined ]   Hucersale keyfile
     *                        null   no valid  keyfile
     */
}));
```

## Development

To build and run the tests:

```shell
$ npm install
$ npm test
```

## Contributions

Contributions welcome - see [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT - see [LICENSE.md](LICENSE.md)
