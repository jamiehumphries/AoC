var md5 = require('md5');

var salt = 'qzyelonm';

const PATTERN_3 = /(.)\1\1/;
const PATTERN_5 = /(.)\1\1\1\1/g;

var keys = [];
var threes = {};

md5_2017 = input => {
  var hash = input;
  for (var i = 0; i < 2017; i++) {
    hash = md5(hash);
  }
  return hash;
}

var i = -1;
var overSpill = 0;
while ((keys.length < 64) || (overSpill++ < 1000)) {
  var hash = md5_2017(salt + (++i));
  var match3 = hash.match(PATTERN_3);
  if (!match3) {
    continue;
  }

  var match5 = hash.match(PATTERN_5) || [];
  match5.forEach(m => {
    var char5 = m[0];
    var minKey = i - 1000;
    var set = threes[char5];
    while (set[0] < minKey) {
      set.shift();
    }
    keys = keys.concat(set);
    set = threes[char5] = [];
  });

  var char3 = match3[1];
  (threes[char3] = threes[char3] || []).push(i);
}

keys.sort((a, b) => a - b);
console.log(keys);
console.log(keys[63]);
