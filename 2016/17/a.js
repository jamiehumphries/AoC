var md5 = require('md5');

var input = 'pgflpeqp';

const openChars = 'bcdef'
open = char => openChars.indexOf(char) !== -1;

var positions = {};
position = state => positions[state] || (positions[state] = [
  (state.match(/D/g) || []).length - (state.match(/U/g) || []).length,
  (state.match(/R/g) || []).length - (state.match(/L/g) || []).length
]);

var states = [input];
while (states.length > 0) {
  var state = states.shift();
  var pos = position(state);
  if (pos[0] === 3 && pos[1] === 3) {
    console.log(state.substring(input.length));
    break;
  }
  var hash = md5(state).substring(0, 4);
  // UP
  if (open(hash[0]) && pos[0] > 0) {
    states.push(state + 'U');
  }
  // DOWN
  if (open(hash[1]) &&  pos[0] < 3) {
    states.push(state + 'D');
  }
  // LEFT
  if (open(hash[2]) && pos[1] > 0) {
    states.push(state + 'L');
  }
  // RIGHT
  if (open(hash[3]) && pos[1] < 3) {
    states.push(state + 'R');
  }
}
