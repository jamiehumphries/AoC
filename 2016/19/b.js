var Deque = require('double-ended-queue');

var input = 3018458;
var half = Math.floor(input / 2);

// e.g. firstHalf = [1, 2, 3], secondHalf = [4, 5, 6, 7]
var firstHalf = new Deque();
for (var i = 1; i <= half; i++) {
  firstHalf.push(i);
}
var secondHalf = new Deque();
for (var i = half + 1; i <= input; i++) {
  secondHalf.push(i);
}

while (firstHalf.length > 0) {
  secondHalf.shift();
  secondHalf.push(firstHalf.shift());
  if (firstHalf.length < secondHalf.length - 1) {
    firstHalf.push(secondHalf.shift());
  }
}

console.log(secondHalf.peekFront());
