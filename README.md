# util.rstrip [![Build Status](https://travis-ci.org/jmquigley/util.rstrip.svg?branch=master)](https://travis-ci.org/jmquigley/util.rstrip) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) [![NPM](https://img.shields.io/npm/v/util.rstrip.svg)](https://www.npmjs.com/package/util.rstrip) [![Coverage Status](https://coveralls.io/repos/github/jmquigley/util.rstrip/badge.svg?branch=master)](https://coveralls.io/github/jmquigley/util.rstrip?branch=master)


> Removes newline characters from the right of a string

Removes the `\n`, `\r`, or `\r\n` from the end of a string or Buffer and returns the new string.


## Installation

To install as a global package:
```
$ npm install --global util.rstrip
```

To install as a development dependency with cli:
```
$ npm install --save-dev util.rstrip
```

## Example Usage

#### From String
```javascript
const rstrip = require('util.rstrip');
let s = rstrip('This is a test\r\n');
    
// returns the string "This is a test" without newlines
```

#### From Buffer
```javascript
const rstrip = require('util.rstrip');
let buf = new Buffer('This is a test\r\n');
let s = rstrip(buf);
    
// returns the string "This is a test" without newlines
```
