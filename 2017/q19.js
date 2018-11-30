const grid =[
  '     |          ',
  '     |  +--+    ',
  '     A  |  C    ',
  ' F---|----E|--+ ',
  '     |  |  |  D ',
  '     +B-+  +--+ '
]

let position = [0, grid[0][grid[0].indexOf('|')]];
let direction = [1, 0];
