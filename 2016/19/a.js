var input = 3018458;

var circle = new Array(input).fill(0).map((_, i) => i + 1);
var i = 0;
while (circle.length > 1) {
  var newCircle = [];
  for (; i < circle.length; i += 2) {
    newCircle.push(circle[i]);
  }
  i = i % circle.length;
  circle = newCircle;
}

console.log(circle[0]);