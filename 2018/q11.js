const start = +new Date;

let serialNumber = 6303;
serialNumber %= 1000;

const powerLevels = {};
function getPowerLevel(x, y) {
  const cached = powerLevels[[x, y]];
  if (cached !== undefined) {
    return cached;
  }
  const rackId = x + 10;
  let powerLevel = rackId * y;
  powerLevel += serialNumber;
  powerLevel *= rackId;
  powerLevel %= 1000;
  powerLevel /= 100;
  powerLevel = Math.floor(powerLevel);
  powerLevel -= 5;
  powerLevels[[x, y]] = powerLevel;
  return powerLevel;
}

const cellPowers = {};
function getCellPower(x, y, size) {
  const sizeCache = cellPowers[size];
  const cached = sizeCache[[x, y]];
  if (cached !== undefined) {
    return cached;
  }
  let cellPower = 0;
  if (size === 1) {
    cellPower += getPowerLevel(x, y);
  } else if (size % 2 === 0) {
    const half = size / 2;
    cellPower += getCellPower(x, y, half);
    cellPower += getCellPower(x, y + half, half);
    cellPower += getCellPower(x + half, y, half);
    cellPower += getCellPower(x + half, y + half, half);
  } else {
    cellPower += getCellPower(x, y, size - 1);
    cellPower += getCellPower(x + 1, y + 1, size - 1);
    cellPower -= getCellPower(x + 1, y + 1, size - 2);
    cellPower += getCellPower(x, y + size - 1, 1);
    cellPower += getCellPower(x + size - 1, y, 1);
  }
  sizeCache[[x, y]] = cellPower;
  return cellPower;
}

const factors = {};
function getLowestFactorOtherThanOne(size) {
  const cached = factors[size];
  if (cached !== undefined) {
    return cached;
  }
  let factor = size;
  for (let n = 2; n <= Math.sqrt(size); n++) {
    if (size % n === 0) {
      factor = n;
      break;
    }
  }
  factors[size] = factor;
  return factor;
}

const gridSize = 300;
let maxCellPower = 0;
let bestCell = null;

for (let size = 1; size <= gridSize; size++) {
  cellPowers[size] = {};
  for (let x = 1; x <= gridSize - size + 1; x++) {
    for (let y = 1; y <= gridSize - size + 1; y++) {
      const cellPower = getCellPower(x, y, size);
      if (cellPower > maxCellPower) {
        maxCellPower = cellPower;
        bestCell = [x, y, size];
      }
    }
  }
  console.log(size, maxCellPower, bestCell);
  console.log(`After ${(+new Date - start) / 1000} seconds.`);
}

console.log('Done.');
