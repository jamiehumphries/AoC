const factorA = 16807;
const factorB = 48271;
const modulo = 2147483647;

let a = 591;
let b = 393;

const trials = 5000000;

let pairs = 0;
let matches = 0;
while (pairs < trials) {
  do {
    a = a * factorA % modulo;
  } while (a % 4 !== 0);
  do {
    b = b * factorB % modulo;
  } while (b % 8 !== 0);
  const isMatch = (a & 0xffff) === (b & 0xffff);
  if (isMatch) {
    matches++;
  }
  pairs++;
}

const result = matches;
result;
