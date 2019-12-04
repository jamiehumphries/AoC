let input = '165061';

let recipes = [3, 7];
let elf1 = 0;
let elf2 = 1;
let tail = [];

function addRecipe(r) {
  recipes.push(r);
  tail.push(r);
  while (tail.length > input.length) {
    tail.shift();
  }
}

function isMatch() {
  return tail.join('') === input;
}

// while (scores.length < input + 10) {
while (true) {
  const recipe1 = recipes[elf1];
  const recipe2 = recipes[elf2];
  const combined = recipe1 + recipe2;
  const tens = Math.floor(combined / 10);
  const units = combined % 10;
  if (tens !== 0) {
    addRecipe(tens);
  }
  if (isMatch()) {
    break;
  }
  addRecipe(units);
  if (isMatch()) {
    break;
  }
  elf1 = (elf1 + recipe1 + 1) % recipes.length;
  elf2 = (elf2 + recipe2 + 1) % recipes.length;
}

// console.log(scores.slice(input, input + 10).join(''));
console.log(recipes.length - input.length);
