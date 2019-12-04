const _ = require('lodash')

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
################################`

let grid = []

class Unit {
  constructor(type, row, col, attackPower, allowElfDeaths) {
    this.type = type
    this.row = row
    this.col = col
    this.attackPower = attackPower
    this.allowToDie = !(type === 'E' && !allowElfDeaths)
    this.hp = 200
  }

  get enemyType () {
    return this.type === 'E' ? 'G' : 'E'
  }

  takeTurn () {
    if (this.hp <= 0) {
      return
    }
    this.move()
    this.attack()
  }

  move () {
    const nextStep = this.getNextStepTowardsEnemy()
    if (nextStep) {
      this.moveTo(nextStep[0], nextStep[1])
    }
  }

  attack () {
    const target = this.getTarget()
    if (target) {
      target.hp -= this.attackPower
      if (target.hp <= 0) {
        target.die()
      }
    }
  }

  getNextStepTowardsEnemy () {
    return getNextStep(this.enemyType, this.row, this.col)
  }

  getTarget () {
    const adjacentSqaures = [
      { row: this.row - 1, col: this.col },
      { row: this.row, col: this.col - 1 },
      { row: this.row, col: this.col + 1 },
      { row: this.row + 1, col: this.col }
    ]
    let currentTarget = null
    for (const sq of adjacentSqaures) {
      const target = this.getEnemy(sq.row, sq.col)
      if (target && (!currentTarget || target.hp < currentTarget.hp)) {
        currentTarget = target
      }
    }
    return currentTarget
  }

  getEnemy (row, col) {
    const square = grid[row][col]
    if (square.type === this.enemyType) {
      return square
    }
    return null
  }

  moveTo (row, col) {
    grid[this.row][this.col] = '.'
    this.row = row
    this.col = col
    grid[this.row][this.col] = this
  }

  die () {
    if (!this.allowToDie) {
      throw 'AN ELF DIED!'
    }
    grid[this.row][this.col] = '.'
  }

  toString () {
    return `${this.type} (${this.row}, ${this.col})`
  }
}

function setUpGame (elfAttackPower, allowElfDeaths) {
  grid = []
  for (const line of input.split('\n')) {
    const row = []
    for (const char of line.split('')) {
      if (char === 'E' || char === 'G') {
        const attackPower = char === 'E' ? elfAttackPower : 3
        const unit = new Unit(char, grid.length, row.length, attackPower, allowElfDeaths)
        row.push(unit)
      } else {
        row.push(char)
      }
    }
    grid.push(row)
  }
}

function printGrid (round) {
  if (round === 0) {
    console.log('Initially:')
  } else if (round === 1) {
    console.log('After 1 round:')
  } else {
    console.log(`After ${round} rounds:`)
  }

  const lines = []
  for (const row of grid) {
    let line = ''
    const units = []
    for (const square of row) {
      const type = square.type
      if (type) {
        line += type
        units.push(square)
      } else {
        line += square
      }
    }
    if (units.length > 0) {
      line += `   ${units.map(unit => `${unit.type}(${unit.hp})`).join(', ')}`
    }
    lines.push(line)
  }
  const output = lines.join('\n')
  console.log(output)
}

function runRound () {
  const order = getTurnOrder()
  if (order.length === 0) {
    return false
  }
  for (const unit of order) {
    unit.takeTurn()
  }
  return true
}

function getTurnOrder () {
  const order = []
  let hasElves = false
  let hasGoblins = false
  for (const row of grid) {
    for (const square of row) {
      if (square instanceof Unit) {
        if (square.type === 'E') {
          hasElves = true
        } else if (square.type === 'G') {
          hasGoblins = true
        }
        order.push(square)
      }
    }
  }
  return hasElves && hasGoblins ? order : []
}

function getNextStep (type, row, col) {
  const shortestPathGrid = _.cloneDeep(grid)
  shortestPathGrid[row][col] = 0
  let distance = 0
  let chosenSquare = null
  function setAdjacentDistances (row, col) {
    const adjacentSqaures = [
      { row: row - 1, col: col },
      { row: row, col: col - 1 },
      { row: row, col: col + 1 },
      { row: row + 1, col: col }
    ]
    let changed = false
    for (const sq of adjacentSqaures) {
      if (!shortestPathGrid[sq.row]) {
        continue
      }
      const square = shortestPathGrid[sq.row][sq.col]
      if (square === '.') {
        shortestPathGrid[sq.row][sq.col] = distance + 1
        changed = true
      } else if (square instanceof Unit && square.type === type) {
        if (chosenSquare === null) {
          chosenSquare = [row, col]
        } else {
          const [chosenRow, chosenCol] = chosenSquare
          if (row < chosenRow || (row === chosenRow && col < chosenCol)) {
            chosenSquare = [row, col]
          }
        }
      }
    }
    return changed
  }
  while (chosenSquare === null) {
    let changed = false
    for (let row = 0; row < shortestPathGrid.length; row++) {
      for (let col = 0; col < shortestPathGrid[row].length; col++) {
        const square = shortestPathGrid[row][col]
        if (square === distance) {
          if (setAdjacentDistances(row, col)) {
            changed = true
          }
        }
      }
    }
    if (!changed) {
      break
    }
    distance++
  }
  return getFirstStepInPath(shortestPathGrid, chosenSquare)
}

function getFirstStepInPath (shortestPathGrid, targetSquare) {
  if (!targetSquare) {
    return null
  }
  const [targetRow, targetCol] = targetSquare
  let distance = shortestPathGrid[targetRow][targetCol]
  if (distance === 1) {
    return targetSquare
  }
  // Clear other squares at this distance.
  for (let row = 0; row < shortestPathGrid.length; row++) {
    for (let col = 0; col < shortestPathGrid[row].length; col++) {
      if (shortestPathGrid[row][col] >= distance && (row !== targetRow || col !== targetCol)) {
        shortestPathGrid[row][col] = '.'
      }
    }
  }
  function isAdjacentTo (pathDistance, row, col) {
    const adjacentSqaures = [
      { row: row - 1, col: col },
      { row: row, col: col - 1 },
      { row: row, col: col + 1 },
      { row: row + 1, col: col }
    ]
    for (const sq of adjacentSqaures) {
      if (!shortestPathGrid[sq.row]) {
        continue
      }
      if (shortestPathGrid[sq.row][sq.col] === pathDistance) {
        return true
      }
    }
    return false
  }
  distance--
  let firstStep = null
  while (firstStep === null && distance > 0) {
    for (let row = 0; row < shortestPathGrid.length; row++) {
      for (let col = 0; col < shortestPathGrid[row].length; col++) {
        if (shortestPathGrid[row][col] === distance) {
          if (!isAdjacentTo(distance + 1, row, col)) {
            shortestPathGrid[row][col] = '.'
          } else if (distance === 1) {
            if (!firstStep) {
              firstStep = [row, col]
            } else {
              const [firstStepRow, firstStepCol] = firstStep
              if (row < firstStepRow || (row === firstStepRow && col < firstStepCol)) {
                firstStep = [row, col]
              }
            }
          }
        }
      }
    }
    distance--
  }
  return firstStep
}

function runGame (elfAttackPower, allowElfDeaths) {
  setUpGame(elfAttackPower, allowElfDeaths)
  let round = 0
  do {
    printGrid(round++)
  } while (runRound())
  const fullRounds = round - 2
  const hpSum = grid.reduce((total, row) => total + row.reduce((rowTotal, square) => rowTotal + (square.hp || 0), 0), 0)
  const output = fullRounds * hpSum
  console.log(fullRounds, hpSum)
  console.log(output)
}

let power = 4
while (true) {
  try {
    runGame(power++, false)
    break
  } catch (e) {
    console.error(e)
  }
}
