var md5 = require('md5');

var input = 'wtnhxymk';
var password = new Array(8).fill('?');

var i = 0;
while (password.indexOf('?') !== -1) {
  var hash = md5(input + i);
  if (i % 100000 == 0) {
    console.log(i);
  }
  if (hash.startsWith('00000')) {
    var position = parseInt(hash[5]);
    if (password[position] === '?') {
      password[position] = hash[6];
      console.log('Password: ' + password.join(''));
    }
  }
  i++;
}
