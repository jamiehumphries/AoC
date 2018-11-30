const input = '230,1,2,221,97,252,168,169,57,99,0,254,181,255,235,167';
const listLength = 256;

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

// const lengths = input.split(',').map(n => parseInt(n));
const lengths = input.split('').map(char => char.charCodeAt()).concat([17, 31, 73, 47, 23]);
const rounds = 64;
for (let round = 1; round <= rounds; round++) {
  lengths.forEach(length => {
    reverse(length);
    currentPosition = (currentPosition + length + skipSize) % listLength;
    skipSize++;
  });
}

function denseHash(spareHash) {
  let hash = '';
  for (let block = 0; block * 16 < spareHash.length; block++) {
    let blockHashNumber = 0;
    for (let i = 0; i < 16; i ++) {
      blockHashNumber ^= spareHash[block * 16 + i];
    }
    let blockHash = blockHashNumber.toString(16);
    blockHash = blockHash.length === 1 ? '0' + blockHash : blockHash;
    hash += blockHash;
  }
  return hash;
}

const result1 = list[0] * list[1];
result1;
const result2 = denseHash(list);
result2;
