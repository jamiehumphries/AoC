let a = 1;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;
let g = 0;
let h = 0;

b = 65;
c = b;
b *= 100;
b += 100000;
c = b;
c += 17000;

while (true) {
  f = true;
  d = 2;
  do {
    e = 2;
    do {
      if (d * e === b) {
        f = false;
      }
      e++;
    } while (e < b)
    d++;
  } while (d < b)
  if (!f) {
    h++;
  }
  if (b === c) {
    break;
  }
  b += 17;
}
