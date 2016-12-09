var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

run = input => {
  var messages = input.split('\n');
  var length = messages[0].length;
  var counts = new Array(length).fill(null).map(() => new Object());
  messages.forEach(message => {
    for (var i = 0; i < length; i++) {
      counts[i][message[i]] = (counts[i][message[i]] || 0) + 1;
    }
  });
  var message = '';
  for (var i = 0; i < length; i++) {
    var posCounts = counts[i];
    message += Object.getOwnPropertyNames(posCounts).sort((a, b) => posCounts[b] - posCounts[a])[0];
  }
  return message;
}
