let b = 0;
let c = 0;
let g = 0;
let h = 0;

b = 65 * 100 + 100000;
c = b + 17000;

const sieve = [];
for (let n = 0; n <= c; n++) {
  sieve.push(true);
}
sieve[0] = false;
sieve[1] = false;

let p = 2;
while (p < Math.ceil(Math.sqrt(c))) {
  for (let n = 2 * p; n < sieve.length; n += p) {
    sieve[n] = false;
  }
  p++;
  while (!sieve[p]) {
    p++;
  }
}

function isPrime(n) {
  return sieve[n];
}

for (let n = b; n <= c; n += 17) {
  if (!isPrime(n)) {
    h++;
  }
}

h;
