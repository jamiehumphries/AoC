var fs = require('fs');
fs.readFile('input.txt', 'utf8', (err, input) => console.log(run(input)));

decompress = input => {
  var marker = input.match(/\((\d+)x(\d+)\)/);
  if (marker === null) {
    return input.length;
  }
  var afterMarker = input.substring(marker.index + marker[0].length);
  var chars = parseInt(marker[1]);
  var repeat = parseInt(marker[2]);
  var markedSection = afterMarker.substring(0, chars);
  var tail = afterMarker.substring(chars);
  return marker.index + (repeat * decompress(markedSection)) + decompress(tail);
}

run = input => {
  return decompress(input);
}
