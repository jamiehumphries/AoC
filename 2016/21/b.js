var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

var password = 'fbgdceah'.split('');

swapPosition = (x, y) => {
  var oldX = password[x];
  password[x] = password[y];
  password[y] = oldX;
}

unswapPosition = (x, y) => swapPosition(x, y);

swapLetter = (x, y) => {
  swapPosition(password.indexOf(x), password.indexOf(y));
}

unswapLetter = (x, y) => swapLetter(x, y);

rotate = (dir, x) => {
  for (var i = 0; i < x; i++) {
    if (dir === 'left') {
      password.push(password.shift());
    } else if (dir === 'right') {
      password.unshift(password.pop());
    }
  }
}

unrotate = (dir, x) => rotate(dir === 'left' ? 'right' : 'left', x);

rotateBasedOnLetter = x => {
  var pos = password.indexOf(x);
  rotate('right', pos + 1);
  if (pos >= 4) {
    rotate('right', 1);
  }
}

unrotateBasedOnLetter = x => {
  var target = password.concat();
  for (var i = 0; i < password.length; i++) {
    rotate('left', i);
    rotateBasedOnLetter(x);
    if (password.join('') === target.join('')) {
      rotate('left', i);
      break;
    }
    password = target.concat();
  }
}

reverse = (x, y) => {
  var head = password.splice(0, x);
  var tail = password.splice(y - x + 1);
  var middle = password.reverse();
  password = head.concat(middle, tail);
}

unreverse = (x, y) => reverse(x, y);

move = (x, y) => {
  var letter = password.splice(x, 1);
  head = password.splice(0, y);
  password = head.concat(letter, password).filter(x => x != null);
}

unmove = (x, y) => move(y, x);

unscramble = op => {
  var match;
  if (match = op.match(/swap position (\d) with position (\d)/)) {
    var x = parseInt(match[1]);
    var y = parseInt(match[2]);
    unswapPosition(x, y);
  } else if (match = op.match(/swap letter (\w) with letter (\w)/)) {
    var x = match[1];
    var y = match[2];
    unswapLetter(x, y);
  } else if (match = op.match(/rotate (left|right) (\d) steps?/)) {
    var dir = match[1];
    var x = parseInt(match[2]);
    unrotate(dir, x);
  } else if (match = op.match(/rotate based on position of letter (\w)/)) {
    var x = match[1];
    unrotateBasedOnLetter(x);
  } else if (match = op.match(/reverse positions (\d) through (\d)/)) {
    var x = parseInt(match[1]);
    var y = parseInt(match[2]);
    unreverse(x, y);
  } else if (match = op.match(/move position (\d) to position (\d)/)) {
    var x = parseInt(match[1]);
    var y = parseInt(match[2]);
    unmove(x, y);
  }
}

run = input => {
  var operations = input.split('\n');
  operations.reverse().forEach(unscramble);
  return password.join('');
}
