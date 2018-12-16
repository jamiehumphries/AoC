let input = `################################
##############..######....######
###########GG.G.#######.########
############....######..#..#####
############...#######.....#####
##############..#G.####....#####
#############..G#..####...######
######.#####.G...G..###.#.######
######...###..........#.########
######G.................#.######
######....G.#............G.#####
######G......G............######
######.......E#####E.G.....#####
#####...G....#######.......#####
#####.......#########......#####
########....#########.....######
########G.G.#########...########
#########...#########.......#.##
########.G..#########..........#
#######.E....#######........#..#
#...........G.#####...E...######
####.....##................#####
#####..#.####.#.............####
########...##EE..G....E.#..E.###
##########..#................###
##########.............#.....###
###########.E.G..........##.####
###########.........###..##.####
############.##........E.#######
################.###.###########
################.###############
################################`;

input = `#######
#.G...#
#...EG#
#.#.#G#
#..G#E#
#.....#
#######`

const map = input.split('\n').map(line => line.split(''));
let units = [];
map.forEach((row, i) => {
  row.forEach((cell, j) => {
    if (cell === 'E' || cell === 'G') {
      units.push({
        type: cell,
        position: [i, j],
        hp: 200,
        attackPower: 3
      });
    }
  });
});

function anySurvive(type) {
  return units.find(u => u.type === type && u.hp > 0) !== undefined;
}

function adjacentTo(i, j) {
  // In reading order.
  return [
    [i - 1, j],
    [i, j - 1],
    [i, j + 1],
    [i + 1, j]
  ];
}

function findUnitInRange(enemy, position) {
  const enemyPosition = adjacentTo(...position).find(p => map[p[0]][p[1]] === enemy);
  if (enemyPosition) {
    return units.find(u => u.position.toString() === enemyPosition.toString());
  }
  return null;
}

function isOpen(i, j) {
  return map[i][j] === '.'; 
}

// TODO??
function getNextSquare(unit) {
  const { position } = unit;
  const visited = new Set([position.toString()]);
  let lastStep = [position];
  while (lastStep.length > 0) {
    let hasFoundTarget;
    const nextOptions = [];
    lastStep.forEach(position => {
      const newFromHere = adjacentTo(...position)
        .filter(p => isOpen(...p)).filter(p => !visited.has(p.toString));
      newFromHere.forEach(newPosition => {
        const [i, j] = newPosition;
      });
    });
    break;
  }
}

function takeTurn(unit) {
  const { type, position } = unit;
  const enemy = type === 'E' ? 'G' : 'E';
  if (!anySurvive(enemy)) {
    return;
  }
  const targetInRange = findUnitInRange(enemy, position);
  if (targetInRange) {
    targetInRange.hp -= unit.attackPower;
    if (targetInRange.hp <= 0) {
      const [i, j] = targetInRange.position;
      map[i][j] = '.';
    }
    return;
  }
  // const targets = units.filter(u => u.type === enemy);
  // const inRange = targets.reduce((arr, t) => arr.concat(adjacentTo(...t.position)), []);
  // const hasMove = inRange.find(p => isOpen(...p)) !== undefined;
  // if (!hasMove) {
  //   return;
  // }
  const nextMove = getNextSquare(unit);
}

function readingOrder(cell1, cell2) {
  const [i1, j1] = cell1;
  const [i2, j2] = cell2;
  return i1 - i2 || j1 - j2;
}

let rounds = 0;
while (anySurvive('E') && anySurvive('G') && rounds < 10) {
  units.sort((u1, u2) => readingOrder(u1.position, u2.position));
  units.forEach(unit => {
    // Check not killed this round.
    if (unit.hp > 0) {
      takeTurn(unit);
    }
  });
  units = units.filter(u => u.hp > 0);
  break;
  rounds++;
}
rounds;
