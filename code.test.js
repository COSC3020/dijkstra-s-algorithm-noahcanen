const fs = require('fs');
const assert = require('assert');
const { inflate } = require('zlib');

eval(fs.readFileSync('code.js')+'');

