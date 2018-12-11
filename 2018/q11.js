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
  } else {
    const factor = getLowestFactorOtherThanOne(size);
    if (factor === size) {
      cellPower += getCellPower(x, y, 1);
      cellPower += getCellPower(x + 1, y + 1, size - 1);
      for (let d = 1; d < size; d++) {
        cellPower += getCellPower(x, y + d, 1);
        cellPower += getCellPower(x + d, y, 1);
      }
    } else {
      const segmentSize = size / factor;
      for (let x0 = x; x0 < x + size; x0 += segmentSize) {
        for (let y0 = y; y0 < y + size; y0 += segmentSize) {
          cellPower += getCellPower(x0, y0, segmentSize);
        }
      }
    }
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
