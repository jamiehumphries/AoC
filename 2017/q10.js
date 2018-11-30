const input = `230,1,2,221,97,252,168,169,57,99,0,254,181,255,235,167`;
const listLength = 256;

const lengths = input.split(',').map(n => parseInt(n));
let list = [...Array(listLength).keys()]

let currentPosition = 0;
let skipSize = 0;

function reverse(length) {
  // Circle list.
  const circleTail = list.splice(currentPosition);
  list = circleTail.concat(list);
  // Reverse length.
  const reverseTail = list.splice(length);
  list.reverse();
  list = list.concat(reverseTail);
  // Uncircle list.
  const uncircleTail = list.splice(listLength - currentPosition);
  list = uncircleTail.concat(list);
}

lengths.forEach(length => {
  reverse(length);
  currentPosition = (currentPosition + length + skipSize) % listLength;
  skipSize++;
});

const result1 = list[0] * list[1];
result1;
