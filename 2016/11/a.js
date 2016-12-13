// P = promethium
// B = cobalt
// C = curium
// R = ruthenium
var floors = [
  ['PG', 'PM'],
  ['BG', 'CG', 'RG', 'PG'],
  ['BM', 'CM', 'RM', 'PM'],
  []
]

safe = floor => {
  if (floor.find(c => c.endsWith('G')) === undefined) {
    return true;
  }
  return floor.filter(c => c.endsWith('M'))
    .filter(m => floor.indexOf(m[0] + 'G') === -1)
    .length === 0;
}

clone = floors => floors.map(f => f.concat());

solve = (floors, elevator) => {
  if (elevator < 0 || elevator >= floors.length) {
    return;
  }
  if (floors.find(f => !safe(f)) !== undefined) {
    return;
  }
  floor[elevator].forEach((c, i) => {
    var newFloors = clone(floors);
    newFloors[elevator].splice(i, 1);

  });
}

solve(floors, 0);