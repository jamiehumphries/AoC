var md5 = require('md5');

var input = 'wtnhxymk';
var password = '';

var i = 0;
while (password.length < 8) {
  var hash = md5(input + i);
  if (i % 100000 == 0) {
    console.log(i);
  }
  if (hash.startsWith('00000')) {
    password += hash[5];
    console.log('Password: ' + password + new Array(8 - password.length).fill('?').join(''));
  }
  i++;
}
