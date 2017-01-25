# util.rstrip [![Build Status](https://travis-ci.org/jmquigley/util.rstrip.svg?branch=master)](https://travis-ci.org/jmquigley/util.rstrip)
> Removes newline characters from the right of a string

Removes the `\n`, `\r`, or `\r\n` from the end of a string and returns it.


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

    const rstrip = require('util.rstrip');
    let s = rstrip('This is a test\r\n');
    
    // returns the string "This is a test" without newlines
