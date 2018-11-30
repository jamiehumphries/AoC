const input = 'oundnydw';

// See q10.js.
function knotHash(key) {
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

  const lengths = key.split('').map(char => char.charCodeAt()).concat([17, 31, 73, 47, 23]);
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

  return denseHash(list);
}

function zeroPad(binaryString) {
  while (binaryString.length < 4) {
    binaryString = '0' + binaryString;
  }
  return binaryString;
}

let used = 0;
const rows = [];

for (let i = 0; i < 128; i++) {
  const hash = knotHash(`${input}-${i}`);
  const row = hash.split('').map(char => zeroPad(parseInt(char, 16).toString('2'))).join('');
  used += row.match(/1/g).length;
  rows.push(row);
}

const result1 = used;
result1;

function union(g1, g2) {
  return new Set([...g1, ...g2]);
}

function key(square) {
  return `(${square.join()})`;
}

function getAdjacentSquares(square) {
  const i = square[0];
  const j = square[1];
  return [
    [i - 1, j],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j]
  ]
}

function isUsed(square) {
  const i = square[0];
  const j = square[1];
  const row = rows[i] || [];
  return row[j] === '1';
}

function getRegion(square, knownRegion) {
  knownRegion = knownRegion || new Set();
  if (!isUsed(square)) {
    return knownRegion;
  }
  let region = new Set([key(square), ...knownRegion]);
  getAdjacentSquares(square).filter(adj => !knownRegion.has(key(adj))).forEach(adj => {
    region = union(region, getRegion(adj, region));
  });
  return region;
}

let allRegioned = new Set();
let regions = 0;
for (let i = 0; i < 128; i++) {
  for (let j = 0; j < 128; j++) {
    const square = [i, j];
    if (!isUsed(square) || allRegioned.has(key(square))) {
      continue;
    }
    const region = getRegion(square);
    allRegioned = union(allRegioned, region);
    regions++;
  }
}

const result2 = regions;
result2;
