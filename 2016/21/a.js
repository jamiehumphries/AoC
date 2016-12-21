var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

var password = 'abcdefgh'.split('');

swapPosition = (x, y) => {
  var oldX = password[x];
  password[x] = password[y];
  password[y] = oldX;
}

swapLetter = (x, y) => {
  swapPosition(password.indexOf(x), password.indexOf(y));
}

rotate = (dir, x) => {
  for (var i = 0; i < x; i++) {
    if (dir === 'left') {
      password.push(password.shift());
    } else if (dir === 'right') {
      password.unshift(password.pop());
    }
  }
}

rotateBasedOnLetter = x => {
  var pos = password.indexOf(x);
  rotate('right', pos + 1);
  if (pos >= 4) {
    rotate('right', 1);
  }
}

reverse = (x, y) => {
  var head = password.splice(0, x);
  var tail = password.splice(y - x + 1);
  var middle = password.reverse();
  password = head.concat(middle, tail);
}

move = (x, y) => {
  var letter = password.splice(x, 1);
  head = password.splice(0, y);
  password = head.concat(letter, password).filter(x => x != null);
}

scramble = op => {
  var match;
  if (match = op.match(/swap position (\d) with position (\d)/)) {
    var x = parseInt(match[1]);
    var y = parseInt(match[2]);
    swapPosition(x, y);
  } else if (match = op.match(/swap letter (\w) with letter (\w)/)) {
    var x = match[1];
    var y = match[2];
    swapLetter(x, y);
  } else if (match = op.match(/rotate (left|right) (\d) steps?/)) {
    var dir = match[1];
    var x = parseInt(match[2]);
    rotate(dir, x);
  } else if (match = op.match(/rotate based on position of letter (\w)/)) {
    var x = match[1];
    rotateBasedOnLetter(x);
  } else if (match = op.match(/reverse positions (\d) through (\d)/)) {
    var x = parseInt(match[1]);
    var y = parseInt(match[2]);
    reverse(x, y);
  } else if (match = op.match(/move position (\d) to position (\d)/)) {
    var x = parseInt(match[1]);
    var y = parseInt(match[2]);
    move(x, y);
  }
}

run = input => {
  var operations = input.split('\n');
  operations.forEach(scramble);
  return password.join('');
}
