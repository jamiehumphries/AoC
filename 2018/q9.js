class MarbleCircle {
  constructor() {
    this.links = {
      0: { previous: 0, next: 0 }
    };
    this.current = 0;
  }

  insert(marble) {
    const currentLink = this.links[this.current];
    const next = currentLink.next;
    const nextLink = this.links[next];
    currentLink.next = marble;
    nextLink.previous = marble;
    this.links[marble] = { previous: this.current, next };
    this.current = marble;
  }

  capture() {
    const captured = this.current;
    const currentLink = this.links[captured];
    const previous = currentLink.previous;
    const next = currentLink.next;
    this.links[previous].next = next;
    this.links[next].previous = previous;
    delete this.links[captured];
    this.current = next;
    return captured;
  }

  move(offset) {
    const moveInDirection = offset >= 0 ? this.forward.bind(this) : this.back.bind(this);
    for (let step = 0; step < Math.abs(offset); step++) {
      moveInDirection();
    }
  }

  forward() {
    this.current = this.links[this.current].next;
  }

  back() {
    this.current = this.links[this.current].previous;
  }

  toArray() {
    const array = [];
    let next = 0;
    do {
      array.push(next);
      next = this.links[next].next;
    } while (next !== 0);
    return array;
  }
}

function getHighScore(players, turns) {
  const marbles = new MarbleCircle();
  let marble = 0;
  const scores = {};
  while (marble++ < turns) {
    if (marble % 23 === 0) {
      const currentPlayer = marble % players;
      marbles.move(-7);
      const capturedMarble = marbles.capture();
      scores[currentPlayer] = (scores[currentPlayer] || 0) + marble + capturedMarble;
    } else {
      marbles.move(1);
      marbles.insert(marble);
    }
  }
  return Math.max(...Object.values(scores));
}

console.log(getHighScore(7, 25) === 32);
console.log(getHighScore(10, 1618) === 8317);
console.log(getHighScore(13, 7999) === 146373);
console.log(getHighScore(17, 1104) === 2764);
console.log(getHighScore(21, 6111) === 54718);
console.log(getHighScore(30, 5807) === 37305);

console.log(getHighScore(459, 71790));
console.log(getHighScore(459, 7179000));
