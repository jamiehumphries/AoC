const _ = require('lodash')

let input = `Before: [0, 1, 2, 1]
12 3 2 2
After:  [0, 1, 1, 1]

Before: [3, 3, 2, 2]
1 0 2 2
After:  [3, 3, 2, 2]

Before: [1, 1, 2, 1]
2 0 2 1
After:  [1, 0, 2, 1]

Before: [0, 1, 1, 3]
13 3 1 3
After:  [0, 1, 1, 1]

Before: [2, 3, 2, 2]
1 1 2 2
After:  [2, 3, 2, 2]

Before: [2, 0, 2, 3]
9 2 0 0
After:  [4, 0, 2, 3]

Before: [3, 1, 1, 2]
5 0 3 2
After:  [3, 1, 2, 2]

Before: [1, 1, 2, 1]
2 0 2 3
After:  [1, 1, 2, 0]

Before: [0, 3, 0, 0]
10 3 2 0
After:  [1, 3, 0, 0]

Before: [1, 1, 0, 2]
10 2 2 0
After:  [1, 1, 0, 2]

Before: [0, 2, 1, 2]
7 0 0 0
After:  [0, 2, 1, 2]

Before: [3, 0, 2, 1]
12 3 2 1
After:  [3, 1, 2, 1]

Before: [0, 3, 1, 2]
4 2 3 0
After:  [1, 3, 1, 2]

Before: [1, 1, 0, 1]
6 1 3 3
After:  [1, 1, 0, 1]

Before: [0, 1, 0, 3]
3 3 3 1
After:  [0, 3, 0, 3]

Before: [1, 1, 2, 0]
11 1 0 1
After:  [1, 1, 2, 0]

Before: [1, 1, 0, 3]
15 0 2 3
After:  [1, 1, 0, 0]

Before: [3, 1, 2, 1]
6 1 3 2
After:  [3, 1, 1, 1]

Before: [3, 3, 2, 3]
1 1 2 0
After:  [2, 3, 2, 3]

Before: [0, 1, 0, 1]
6 1 3 2
After:  [0, 1, 1, 1]

Before: [3, 3, 2, 3]
1 0 2 2
After:  [3, 3, 2, 3]

Before: [1, 2, 1, 2]
4 2 3 2
After:  [1, 2, 1, 2]

Before: [3, 2, 1, 3]
5 0 1 1
After:  [3, 2, 1, 3]

Before: [3, 2, 1, 1]
14 1 2 1
After:  [3, 0, 1, 1]

Before: [1, 1, 0, 1]
15 0 2 0
After:  [0, 1, 0, 1]

Before: [3, 2, 3, 1]
13 3 1 2
After:  [3, 2, 0, 1]

Before: [1, 3, 0, 2]
15 0 2 1
After:  [1, 0, 0, 2]

Before: [0, 3, 0, 3]
3 3 3 3
After:  [0, 3, 0, 3]

Before: [0, 3, 2, 3]
14 3 1 0
After:  [1, 3, 2, 3]

Before: [0, 1, 3, 1]
6 1 3 3
After:  [0, 1, 3, 1]

Before: [1, 2, 2, 1]
2 0 2 0
After:  [0, 2, 2, 1]

Before: [1, 1, 0, 2]
11 1 0 1
After:  [1, 1, 0, 2]

Before: [0, 1, 2, 1]
0 1 2 1
After:  [0, 0, 2, 1]

Before: [1, 2, 2, 1]
3 2 2 2
After:  [1, 2, 2, 1]

Before: [1, 1, 0, 1]
6 1 3 2
After:  [1, 1, 1, 1]

Before: [1, 3, 2, 2]
1 1 2 0
After:  [2, 3, 2, 2]

Before: [1, 2, 3, 3]
8 1 3 3
After:  [1, 2, 3, 2]

Before: [1, 1, 3, 2]
11 1 0 3
After:  [1, 1, 3, 1]

Before: [0, 0, 0, 2]
7 0 0 1
After:  [0, 0, 0, 2]

Before: [1, 1, 1, 2]
11 1 0 0
After:  [1, 1, 1, 2]

Before: [2, 0, 0, 3]
8 0 3 2
After:  [2, 0, 2, 3]

Before: [1, 3, 2, 1]
12 3 2 2
After:  [1, 3, 1, 1]

Before: [2, 3, 2, 1]
12 3 2 3
After:  [2, 3, 2, 1]

Before: [2, 1, 3, 3]
8 0 3 2
After:  [2, 1, 2, 3]

Before: [2, 0, 2, 1]
12 3 2 1
After:  [2, 1, 2, 1]

Before: [2, 3, 3, 1]
4 3 2 3
After:  [2, 3, 3, 1]

Before: [2, 0, 2, 3]
5 3 0 2
After:  [2, 0, 2, 3]

Before: [0, 3, 2, 2]
1 1 2 2
After:  [0, 3, 2, 2]

Before: [0, 2, 2, 3]
3 3 3 1
After:  [0, 3, 2, 3]

Before: [1, 2, 1, 2]
14 1 2 2
After:  [1, 2, 0, 2]

Before: [1, 0, 3, 0]
10 3 3 2
After:  [1, 0, 1, 0]

Before: [2, 3, 2, 1]
12 3 2 2
After:  [2, 3, 1, 1]

Before: [1, 3, 1, 2]
14 3 2 3
After:  [1, 3, 1, 0]

Before: [0, 1, 2, 1]
6 1 3 2
After:  [0, 1, 1, 1]

Before: [2, 1, 2, 1]
6 1 3 3
After:  [2, 1, 2, 1]

Before: [1, 2, 0, 1]
13 3 1 3
After:  [1, 2, 0, 0]

Before: [1, 1, 2, 2]
11 1 0 1
After:  [1, 1, 2, 2]

Before: [2, 2, 3, 1]
4 3 2 1
After:  [2, 1, 3, 1]

Before: [1, 0, 3, 2]
10 3 3 3
After:  [1, 0, 3, 1]

Before: [2, 2, 0, 0]
10 3 2 2
After:  [2, 2, 1, 0]

Before: [2, 1, 2, 1]
6 1 3 1
After:  [2, 1, 2, 1]

Before: [2, 1, 3, 1]
6 1 3 1
After:  [2, 1, 3, 1]

Before: [0, 3, 2, 0]
7 0 0 3
After:  [0, 3, 2, 0]

Before: [3, 3, 0, 2]
14 1 3 0
After:  [0, 3, 0, 2]

Before: [2, 2, 2, 2]
3 2 2 2
After:  [2, 2, 2, 2]

Before: [2, 2, 1, 3]
8 1 3 3
After:  [2, 2, 1, 2]

Before: [1, 0, 0, 0]
15 0 2 1
After:  [1, 0, 0, 0]

Before: [1, 1, 2, 3]
0 1 2 0
After:  [0, 1, 2, 3]

Before: [0, 1, 0, 1]
7 0 0 1
After:  [0, 0, 0, 1]

Before: [0, 1, 3, 3]
13 2 1 0
After:  [1, 1, 3, 3]

Before: [1, 1, 0, 0]
10 3 3 3
After:  [1, 1, 0, 1]

Before: [2, 1, 2, 3]
5 3 0 1
After:  [2, 2, 2, 3]

Before: [0, 1, 1, 3]
3 3 3 1
After:  [0, 3, 1, 3]

Before: [0, 2, 3, 2]
10 3 3 0
After:  [1, 2, 3, 2]

Before: [1, 1, 3, 2]
11 1 0 2
After:  [1, 1, 1, 2]

Before: [1, 0, 2, 1]
12 3 2 0
After:  [1, 0, 2, 1]

Before: [3, 3, 1, 2]
14 3 2 1
After:  [3, 0, 1, 2]

Before: [1, 1, 2, 1]
11 1 0 2
After:  [1, 1, 1, 1]

Before: [2, 1, 1, 2]
4 2 3 0
After:  [1, 1, 1, 2]

Before: [1, 2, 0, 3]
15 0 2 0
After:  [0, 2, 0, 3]

Before: [2, 1, 2, 3]
5 3 0 2
After:  [2, 1, 2, 3]

Before: [0, 0, 2, 3]
7 0 0 2
After:  [0, 0, 0, 3]

Before: [1, 2, 1, 3]
8 1 3 3
After:  [1, 2, 1, 2]

Before: [2, 2, 3, 2]
10 3 3 0
After:  [1, 2, 3, 2]

Before: [3, 3, 2, 3]
1 1 2 3
After:  [3, 3, 2, 2]

Before: [0, 3, 0, 3]
3 3 3 1
After:  [0, 3, 0, 3]

Before: [0, 1, 1, 2]
4 2 3 0
After:  [1, 1, 1, 2]

Before: [3, 1, 2, 1]
12 3 2 0
After:  [1, 1, 2, 1]

Before: [2, 3, 2, 3]
1 1 2 3
After:  [2, 3, 2, 2]

Before: [2, 1, 2, 3]
8 0 3 0
After:  [2, 1, 2, 3]

Before: [1, 3, 1, 3]
8 2 3 2
After:  [1, 3, 1, 3]

Before: [0, 0, 2, 1]
7 0 0 3
After:  [0, 0, 2, 0]

Before: [1, 1, 2, 3]
11 1 0 1
After:  [1, 1, 2, 3]

Before: [1, 1, 2, 2]
11 1 0 3
After:  [1, 1, 2, 1]

Before: [0, 0, 0, 3]
10 2 2 3
After:  [0, 0, 0, 1]

Before: [0, 1, 0, 0]
10 2 2 2
After:  [0, 1, 1, 0]

Before: [1, 1, 2, 2]
2 0 2 0
After:  [0, 1, 2, 2]

Before: [2, 1, 2, 3]
0 1 2 1
After:  [2, 0, 2, 3]

Before: [1, 3, 2, 3]
1 3 2 2
After:  [1, 3, 2, 3]

Before: [0, 1, 2, 1]
0 1 2 0
After:  [0, 1, 2, 1]

Before: [1, 0, 2, 2]
2 0 2 0
After:  [0, 0, 2, 2]

Before: [1, 1, 2, 0]
0 1 2 1
After:  [1, 0, 2, 0]

Before: [1, 1, 0, 3]
8 0 3 1
After:  [1, 1, 0, 3]

Before: [1, 3, 1, 3]
8 2 3 1
After:  [1, 1, 1, 3]

Before: [3, 2, 2, 3]
1 0 2 3
After:  [3, 2, 2, 2]

Before: [2, 1, 0, 1]
6 1 3 2
After:  [2, 1, 1, 1]

Before: [2, 3, 2, 1]
1 1 2 3
After:  [2, 3, 2, 2]

Before: [3, 0, 1, 2]
4 2 3 2
After:  [3, 0, 1, 2]

Before: [1, 1, 2, 3]
2 0 2 1
After:  [1, 0, 2, 3]

Before: [3, 2, 0, 3]
3 3 3 2
After:  [3, 2, 3, 3]

Before: [2, 3, 2, 0]
3 2 2 1
After:  [2, 2, 2, 0]

Before: [1, 1, 1, 0]
9 2 0 2
After:  [1, 1, 2, 0]

Before: [0, 1, 2, 2]
0 1 2 0
After:  [0, 1, 2, 2]

Before: [2, 1, 1, 2]
14 3 2 0
After:  [0, 1, 1, 2]

Before: [1, 2, 0, 3]
15 0 2 2
After:  [1, 2, 0, 3]

Before: [3, 2, 3, 3]
8 1 3 3
After:  [3, 2, 3, 2]

Before: [1, 2, 2, 2]
2 0 2 3
After:  [1, 2, 2, 0]

Before: [1, 1, 2, 3]
1 3 2 1
After:  [1, 2, 2, 3]

Before: [0, 1, 3, 1]
13 2 1 2
After:  [0, 1, 1, 1]

Before: [1, 2, 1, 2]
4 2 3 0
After:  [1, 2, 1, 2]

Before: [2, 2, 2, 3]
1 3 2 1
After:  [2, 2, 2, 3]

Before: [1, 2, 1, 3]
8 0 3 3
After:  [1, 2, 1, 1]

Before: [2, 3, 2, 0]
1 1 2 0
After:  [2, 3, 2, 0]

Before: [2, 0, 1, 3]
8 0 3 1
After:  [2, 2, 1, 3]

Before: [0, 3, 1, 1]
7 0 0 0
After:  [0, 3, 1, 1]

Before: [3, 2, 1, 3]
8 1 3 3
After:  [3, 2, 1, 2]

Before: [1, 1, 2, 0]
11 1 0 2
After:  [1, 1, 1, 0]

Before: [0, 0, 0, 3]
7 0 0 0
After:  [0, 0, 0, 3]

Before: [0, 1, 2, 3]
1 3 2 0
After:  [2, 1, 2, 3]

Before: [1, 2, 0, 0]
10 3 3 1
After:  [1, 1, 0, 0]

Before: [1, 3, 0, 1]
15 0 2 0
After:  [0, 3, 0, 1]

Before: [1, 1, 0, 1]
11 1 0 3
After:  [1, 1, 0, 1]

Before: [0, 0, 1, 2]
4 2 3 1
After:  [0, 1, 1, 2]

Before: [0, 1, 3, 1]
4 3 2 3
After:  [0, 1, 3, 1]

Before: [3, 1, 3, 1]
6 1 3 3
After:  [3, 1, 3, 1]

Before: [2, 1, 2, 2]
0 1 2 1
After:  [2, 0, 2, 2]

Before: [3, 2, 1, 3]
8 2 3 0
After:  [1, 2, 1, 3]

Before: [0, 3, 2, 2]
1 1 2 3
After:  [0, 3, 2, 2]

Before: [2, 3, 3, 3]
5 3 0 3
After:  [2, 3, 3, 2]

Before: [0, 3, 2, 1]
12 3 2 2
After:  [0, 3, 1, 1]

Before: [0, 2, 2, 3]
7 0 0 2
After:  [0, 2, 0, 3]

Before: [2, 0, 1, 3]
5 3 0 1
After:  [2, 2, 1, 3]

Before: [2, 2, 3, 3]
8 0 3 2
After:  [2, 2, 2, 3]

Before: [2, 0, 2, 1]
12 3 2 0
After:  [1, 0, 2, 1]

Before: [0, 2, 3, 3]
7 0 0 2
After:  [0, 2, 0, 3]

Before: [0, 1, 2, 1]
12 3 2 1
After:  [0, 1, 2, 1]

Before: [0, 2, 1, 0]
7 0 0 0
After:  [0, 2, 1, 0]

Before: [2, 1, 3, 1]
4 3 2 0
After:  [1, 1, 3, 1]

Before: [2, 3, 3, 1]
4 3 2 1
After:  [2, 1, 3, 1]

Before: [1, 1, 2, 1]
12 3 2 2
After:  [1, 1, 1, 1]

Before: [0, 3, 3, 1]
7 0 0 1
After:  [0, 0, 3, 1]

Before: [2, 1, 2, 0]
10 3 3 0
After:  [1, 1, 2, 0]

Before: [1, 0, 2, 0]
2 0 2 2
After:  [1, 0, 0, 0]

Before: [3, 1, 1, 3]
8 2 3 3
After:  [3, 1, 1, 1]

Before: [1, 1, 2, 3]
13 3 1 3
After:  [1, 1, 2, 1]

Before: [2, 1, 1, 2]
14 3 2 1
After:  [2, 0, 1, 2]

Before: [1, 2, 2, 0]
2 0 2 1
After:  [1, 0, 2, 0]

Before: [0, 1, 2, 0]
0 1 2 0
After:  [0, 1, 2, 0]

Before: [2, 0, 3, 3]
8 0 3 2
After:  [2, 0, 2, 3]

Before: [1, 1, 0, 2]
15 0 2 2
After:  [1, 1, 0, 2]

Before: [1, 1, 0, 0]
15 0 2 1
After:  [1, 0, 0, 0]

Before: [2, 0, 3, 1]
4 3 2 2
After:  [2, 0, 1, 1]

Before: [3, 0, 2, 1]
12 3 2 3
After:  [3, 0, 2, 1]

Before: [1, 3, 2, 0]
2 0 2 2
After:  [1, 3, 0, 0]

Before: [2, 1, 2, 0]
0 1 2 0
After:  [0, 1, 2, 0]

Before: [2, 2, 3, 3]
5 3 1 2
After:  [2, 2, 2, 3]

Before: [2, 2, 0, 3]
8 1 3 1
After:  [2, 2, 0, 3]

Before: [0, 2, 1, 1]
7 0 0 3
After:  [0, 2, 1, 0]

Before: [1, 3, 2, 2]
2 0 2 0
After:  [0, 3, 2, 2]

Before: [2, 1, 2, 0]
0 1 2 2
After:  [2, 1, 0, 0]

Before: [0, 0, 0, 2]
10 3 3 1
After:  [0, 1, 0, 2]

Before: [2, 3, 1, 2]
9 3 0 0
After:  [4, 3, 1, 2]

Before: [1, 2, 2, 3]
8 0 3 3
After:  [1, 2, 2, 1]

Before: [0, 2, 2, 1]
12 3 2 1
After:  [0, 1, 2, 1]

Before: [1, 3, 3, 1]
4 3 2 0
After:  [1, 3, 3, 1]

Before: [2, 0, 3, 3]
8 0 3 3
After:  [2, 0, 3, 2]

Before: [2, 1, 3, 2]
9 0 0 0
After:  [4, 1, 3, 2]

Before: [2, 2, 1, 2]
14 1 2 2
After:  [2, 2, 0, 2]

Before: [3, 3, 2, 2]
14 1 3 0
After:  [0, 3, 2, 2]

Before: [3, 0, 0, 2]
10 3 3 3
After:  [3, 0, 0, 1]

Before: [0, 2, 1, 3]
8 2 3 1
After:  [0, 1, 1, 3]

Before: [2, 3, 3, 1]
4 3 2 2
After:  [2, 3, 1, 1]

Before: [3, 1, 0, 3]
13 3 1 1
After:  [3, 1, 0, 3]

Before: [1, 0, 0, 3]
15 0 2 2
After:  [1, 0, 0, 3]

Before: [2, 1, 0, 1]
6 1 3 3
After:  [2, 1, 0, 1]

Before: [1, 3, 1, 0]
9 2 0 3
After:  [1, 3, 1, 2]

Before: [0, 3, 2, 1]
12 3 2 1
After:  [0, 1, 2, 1]

Before: [1, 1, 1, 1]
9 2 0 0
After:  [2, 1, 1, 1]

Before: [0, 2, 2, 1]
7 0 0 1
After:  [0, 0, 2, 1]

Before: [2, 0, 3, 1]
4 3 2 1
After:  [2, 1, 3, 1]

Before: [3, 2, 3, 2]
13 1 2 3
After:  [3, 2, 3, 0]

Before: [1, 1, 1, 3]
3 3 3 3
After:  [1, 1, 1, 3]

Before: [0, 2, 3, 1]
4 3 2 3
After:  [0, 2, 3, 1]

Before: [2, 0, 1, 2]
4 2 3 3
After:  [2, 0, 1, 1]

Before: [1, 1, 2, 1]
6 1 3 3
After:  [1, 1, 2, 1]

Before: [0, 2, 2, 0]
9 1 1 3
After:  [0, 2, 2, 4]

Before: [3, 1, 2, 3]
0 1 2 2
After:  [3, 1, 0, 3]

Before: [2, 1, 3, 1]
13 2 1 1
After:  [2, 1, 3, 1]

Before: [0, 1, 0, 0]
10 3 2 0
After:  [1, 1, 0, 0]

Before: [1, 1, 3, 1]
11 1 0 1
After:  [1, 1, 3, 1]

Before: [2, 3, 1, 3]
14 3 1 1
After:  [2, 1, 1, 3]

Before: [0, 2, 2, 1]
9 2 1 0
After:  [4, 2, 2, 1]

Before: [0, 1, 3, 3]
13 3 1 1
After:  [0, 1, 3, 3]

Before: [1, 0, 2, 1]
12 3 2 2
After:  [1, 0, 1, 1]

Before: [1, 0, 0, 1]
15 0 2 0
After:  [0, 0, 0, 1]

Before: [3, 1, 2, 3]
0 1 2 1
After:  [3, 0, 2, 3]

Before: [1, 1, 2, 2]
2 0 2 3
After:  [1, 1, 2, 0]

Before: [3, 3, 0, 3]
14 3 1 0
After:  [1, 3, 0, 3]

Before: [0, 1, 0, 2]
7 0 0 0
After:  [0, 1, 0, 2]

Before: [0, 3, 1, 3]
14 3 1 1
After:  [0, 1, 1, 3]

Before: [3, 0, 1, 2]
5 0 3 1
After:  [3, 2, 1, 2]

Before: [2, 2, 1, 1]
13 2 1 0
After:  [0, 2, 1, 1]

Before: [3, 1, 2, 1]
0 1 2 2
After:  [3, 1, 0, 1]

Before: [0, 1, 3, 2]
7 0 0 3
After:  [0, 1, 3, 0]

Before: [3, 1, 1, 1]
6 1 3 3
After:  [3, 1, 1, 1]

Before: [3, 2, 3, 0]
5 0 1 1
After:  [3, 2, 3, 0]

Before: [0, 3, 2, 3]
1 3 2 1
After:  [0, 2, 2, 3]

Before: [2, 1, 1, 2]
9 0 0 1
After:  [2, 4, 1, 2]

Before: [2, 2, 0, 3]
8 0 3 0
After:  [2, 2, 0, 3]

Before: [0, 1, 1, 1]
6 1 3 2
After:  [0, 1, 1, 1]

Before: [1, 3, 3, 2]
5 1 3 3
After:  [1, 3, 3, 2]

Before: [1, 1, 0, 0]
11 1 0 1
After:  [1, 1, 0, 0]

Before: [3, 3, 1, 3]
13 2 1 0
After:  [0, 3, 1, 3]

Before: [1, 0, 1, 3]
8 0 3 1
After:  [1, 1, 1, 3]

Before: [0, 1, 2, 1]
6 1 3 1
After:  [0, 1, 2, 1]

Before: [0, 0, 3, 1]
7 0 0 2
After:  [0, 0, 0, 1]

Before: [3, 1, 2, 1]
12 3 2 2
After:  [3, 1, 1, 1]

Before: [3, 0, 0, 2]
5 0 3 3
After:  [3, 0, 0, 2]

Before: [1, 3, 1, 2]
4 2 3 2
After:  [1, 3, 1, 2]

Before: [1, 1, 1, 1]
11 1 0 1
After:  [1, 1, 1, 1]

Before: [0, 3, 0, 2]
14 1 3 3
After:  [0, 3, 0, 0]

Before: [0, 3, 2, 1]
1 1 2 2
After:  [0, 3, 2, 1]

Before: [0, 2, 1, 2]
4 2 3 2
After:  [0, 2, 1, 2]

Before: [1, 1, 3, 3]
3 3 3 2
After:  [1, 1, 3, 3]

Before: [0, 2, 0, 0]
7 0 0 3
After:  [0, 2, 0, 0]

Before: [1, 1, 0, 3]
15 0 2 2
After:  [1, 1, 0, 3]

Before: [1, 1, 2, 1]
0 1 2 3
After:  [1, 1, 2, 0]

Before: [3, 0, 1, 2]
14 3 2 2
After:  [3, 0, 0, 2]

Before: [1, 3, 2, 2]
14 1 3 3
After:  [1, 3, 2, 0]

Before: [1, 1, 2, 1]
11 1 0 1
After:  [1, 1, 2, 1]

Before: [1, 1, 1, 1]
11 1 0 2
After:  [1, 1, 1, 1]

Before: [0, 0, 2, 3]
1 3 2 0
After:  [2, 0, 2, 3]

Before: [2, 3, 2, 3]
3 3 3 2
After:  [2, 3, 3, 3]

Before: [1, 0, 0, 0]
10 3 2 1
After:  [1, 1, 0, 0]

Before: [2, 2, 2, 3]
9 0 1 3
After:  [2, 2, 2, 4]

Before: [1, 0, 0, 1]
15 0 2 3
After:  [1, 0, 0, 0]

Before: [1, 0, 2, 1]
2 0 2 1
After:  [1, 0, 2, 1]

Before: [1, 3, 2, 3]
2 0 2 0
After:  [0, 3, 2, 3]

Before: [3, 2, 3, 1]
13 1 2 1
After:  [3, 0, 3, 1]

Before: [0, 1, 1, 3]
8 2 3 3
After:  [0, 1, 1, 1]

Before: [1, 3, 2, 3]
8 0 3 0
After:  [1, 3, 2, 3]

Before: [1, 3, 2, 2]
2 0 2 2
After:  [1, 3, 0, 2]

Before: [0, 0, 2, 1]
12 3 2 2
After:  [0, 0, 1, 1]

Before: [1, 3, 0, 3]
14 3 1 1
After:  [1, 1, 0, 3]

Before: [0, 0, 2, 1]
12 3 2 0
After:  [1, 0, 2, 1]

Before: [1, 2, 0, 0]
15 0 2 0
After:  [0, 2, 0, 0]

Before: [1, 1, 0, 3]
11 1 0 0
After:  [1, 1, 0, 3]

Before: [1, 1, 2, 0]
2 0 2 0
After:  [0, 1, 2, 0]

Before: [2, 2, 2, 1]
12 3 2 3
After:  [2, 2, 2, 1]

Before: [3, 1, 2, 3]
13 3 1 2
After:  [3, 1, 1, 3]

Before: [3, 1, 2, 0]
1 0 2 1
After:  [3, 2, 2, 0]

Before: [0, 2, 1, 2]
14 1 2 3
After:  [0, 2, 1, 0]

Before: [3, 3, 1, 2]
5 1 3 3
After:  [3, 3, 1, 2]

Before: [2, 2, 3, 1]
9 1 0 3
After:  [2, 2, 3, 4]

Before: [1, 3, 3, 2]
14 1 3 2
After:  [1, 3, 0, 2]

Before: [1, 1, 2, 1]
0 1 2 1
After:  [1, 0, 2, 1]

Before: [1, 3, 2, 1]
12 3 2 3
After:  [1, 3, 2, 1]

Before: [1, 1, 3, 2]
11 1 0 0
After:  [1, 1, 3, 2]

Before: [2, 1, 0, 3]
3 3 3 2
After:  [2, 1, 3, 3]

Before: [1, 0, 3, 3]
3 3 3 0
After:  [3, 0, 3, 3]

Before: [1, 2, 2, 3]
1 3 2 3
After:  [1, 2, 2, 2]

Before: [0, 1, 2, 1]
0 1 2 2
After:  [0, 1, 0, 1]

Before: [3, 1, 1, 2]
5 0 3 1
After:  [3, 2, 1, 2]

Before: [3, 2, 2, 1]
12 3 2 2
After:  [3, 2, 1, 1]

Before: [1, 1, 1, 0]
11 1 0 2
After:  [1, 1, 1, 0]

Before: [2, 3, 2, 3]
8 0 3 3
After:  [2, 3, 2, 2]

Before: [1, 3, 2, 1]
2 0 2 1
After:  [1, 0, 2, 1]

Before: [2, 1, 2, 1]
12 3 2 0
After:  [1, 1, 2, 1]

Before: [3, 0, 2, 3]
1 3 2 2
After:  [3, 0, 2, 3]

Before: [3, 2, 0, 3]
5 0 1 0
After:  [2, 2, 0, 3]

Before: [1, 1, 2, 2]
9 3 3 3
After:  [1, 1, 2, 4]

Before: [1, 1, 0, 1]
11 1 0 0
After:  [1, 1, 0, 1]

Before: [1, 2, 3, 0]
13 1 2 0
After:  [0, 2, 3, 0]

Before: [3, 2, 0, 1]
10 2 2 3
After:  [3, 2, 0, 1]

Before: [3, 3, 2, 1]
12 3 2 2
After:  [3, 3, 1, 1]

Before: [1, 3, 2, 1]
2 0 2 0
After:  [0, 3, 2, 1]

Before: [1, 2, 2, 3]
8 1 3 3
After:  [1, 2, 2, 2]

Before: [2, 1, 2, 3]
8 0 3 2
After:  [2, 1, 2, 3]

Before: [2, 2, 2, 3]
1 3 2 2
After:  [2, 2, 2, 3]

Before: [1, 1, 1, 0]
11 1 0 3
After:  [1, 1, 1, 1]

Before: [2, 2, 0, 3]
5 3 1 2
After:  [2, 2, 2, 3]

Before: [3, 3, 3, 3]
14 3 1 2
After:  [3, 3, 1, 3]

Before: [3, 2, 2, 0]
3 2 2 1
After:  [3, 2, 2, 0]

Before: [1, 3, 1, 3]
3 3 3 3
After:  [1, 3, 1, 3]

Before: [0, 1, 2, 3]
0 1 2 0
After:  [0, 1, 2, 3]

Before: [1, 0, 3, 1]
4 3 2 3
After:  [1, 0, 3, 1]

Before: [1, 3, 3, 1]
4 3 2 1
After:  [1, 1, 3, 1]

Before: [3, 3, 1, 2]
14 3 2 0
After:  [0, 3, 1, 2]

Before: [3, 2, 2, 1]
1 0 2 2
After:  [3, 2, 2, 1]

Before: [2, 1, 0, 1]
6 1 3 1
After:  [2, 1, 0, 1]

Before: [2, 0, 3, 3]
3 3 3 2
After:  [2, 0, 3, 3]

Before: [3, 1, 2, 1]
12 3 2 3
After:  [3, 1, 2, 1]

Before: [0, 3, 2, 1]
12 3 2 0
After:  [1, 3, 2, 1]

Before: [1, 0, 2, 3]
2 0 2 1
After:  [1, 0, 2, 3]

Before: [2, 0, 1, 2]
4 2 3 1
After:  [2, 1, 1, 2]

Before: [2, 2, 3, 3]
9 1 1 3
After:  [2, 2, 3, 4]

Before: [0, 3, 0, 3]
14 3 1 2
After:  [0, 3, 1, 3]

Before: [3, 1, 2, 1]
0 1 2 1
After:  [3, 0, 2, 1]

Before: [0, 3, 0, 1]
7 0 0 1
After:  [0, 0, 0, 1]

Before: [0, 2, 3, 1]
4 3 2 1
After:  [0, 1, 3, 1]

Before: [1, 1, 2, 0]
11 1 0 3
After:  [1, 1, 2, 1]

Before: [1, 3, 2, 2]
1 1 2 1
After:  [1, 2, 2, 2]

Before: [1, 1, 2, 2]
11 1 0 0
After:  [1, 1, 2, 2]

Before: [0, 3, 1, 3]
13 2 1 1
After:  [0, 0, 1, 3]

Before: [2, 3, 0, 2]
5 1 0 2
After:  [2, 3, 2, 2]

Before: [2, 2, 1, 2]
13 2 1 2
After:  [2, 2, 0, 2]

Before: [1, 2, 3, 3]
8 0 3 0
After:  [1, 2, 3, 3]

Before: [1, 3, 0, 1]
15 0 2 2
After:  [1, 3, 0, 1]

Before: [1, 1, 2, 3]
11 1 0 0
After:  [1, 1, 2, 3]

Before: [2, 3, 0, 0]
5 1 0 1
After:  [2, 2, 0, 0]

Before: [1, 2, 2, 1]
12 3 2 3
After:  [1, 2, 2, 1]

Before: [0, 1, 2, 1]
6 1 3 3
After:  [0, 1, 2, 1]

Before: [1, 2, 1, 3]
3 3 3 2
After:  [1, 2, 3, 3]

Before: [1, 0, 0, 1]
15 0 2 2
After:  [1, 0, 0, 1]

Before: [0, 1, 3, 1]
6 1 3 2
After:  [0, 1, 1, 1]

Before: [3, 2, 2, 1]
12 3 2 3
After:  [3, 2, 2, 1]

Before: [1, 0, 2, 1]
12 3 2 1
After:  [1, 1, 2, 1]

Before: [1, 3, 0, 3]
15 0 2 3
After:  [1, 3, 0, 0]

Before: [2, 1, 2, 1]
12 3 2 3
After:  [2, 1, 2, 1]

Before: [2, 2, 3, 2]
9 1 3 3
After:  [2, 2, 3, 4]

Before: [2, 2, 0, 3]
5 3 0 0
After:  [2, 2, 0, 3]

Before: [3, 1, 0, 0]
10 2 2 1
After:  [3, 1, 0, 0]

Before: [1, 2, 1, 3]
8 2 3 3
After:  [1, 2, 1, 1]

Before: [1, 1, 3, 1]
6 1 3 0
After:  [1, 1, 3, 1]

Before: [0, 2, 2, 1]
12 3 2 3
After:  [0, 2, 2, 1]

Before: [1, 1, 2, 3]
2 0 2 0
After:  [0, 1, 2, 3]

Before: [2, 3, 1, 2]
4 2 3 1
After:  [2, 1, 1, 2]

Before: [1, 0, 2, 1]
12 3 2 3
After:  [1, 0, 2, 1]

Before: [1, 3, 1, 2]
14 3 2 2
After:  [1, 3, 0, 2]

Before: [3, 1, 2, 1]
6 1 3 3
After:  [3, 1, 2, 1]

Before: [3, 0, 2, 2]
9 3 3 3
After:  [3, 0, 2, 4]

Before: [0, 2, 2, 0]
3 2 2 2
After:  [0, 2, 2, 0]

Before: [1, 1, 0, 0]
11 1 0 2
After:  [1, 1, 1, 0]

Before: [1, 3, 2, 2]
14 1 3 0
After:  [0, 3, 2, 2]

Before: [1, 1, 0, 3]
8 0 3 0
After:  [1, 1, 0, 3]

Before: [2, 2, 1, 0]
14 1 2 1
After:  [2, 0, 1, 0]

Before: [3, 2, 3, 1]
4 3 2 3
After:  [3, 2, 3, 1]

Before: [0, 2, 0, 0]
10 2 2 3
After:  [0, 2, 0, 1]

Before: [2, 2, 1, 2]
4 2 3 2
After:  [2, 2, 1, 2]

Before: [1, 3, 0, 3]
15 0 2 1
After:  [1, 0, 0, 3]

Before: [1, 0, 3, 1]
4 3 2 1
After:  [1, 1, 3, 1]

Before: [1, 0, 2, 3]
8 0 3 3
After:  [1, 0, 2, 1]

Before: [3, 0, 0, 0]
10 2 2 0
After:  [1, 0, 0, 0]

Before: [1, 1, 3, 1]
6 1 3 1
After:  [1, 1, 3, 1]

Before: [0, 2, 0, 0]
10 3 3 1
After:  [0, 1, 0, 0]

Before: [2, 1, 0, 1]
6 1 3 0
After:  [1, 1, 0, 1]

Before: [0, 1, 0, 1]
6 1 3 3
After:  [0, 1, 0, 1]

Before: [0, 3, 0, 3]
7 0 0 2
After:  [0, 3, 0, 3]

Before: [1, 3, 0, 0]
15 0 2 1
After:  [1, 0, 0, 0]

Before: [2, 1, 1, 1]
6 1 3 0
After:  [1, 1, 1, 1]

Before: [1, 2, 3, 1]
4 3 2 1
After:  [1, 1, 3, 1]

Before: [1, 2, 0, 2]
9 3 3 1
After:  [1, 4, 0, 2]

Before: [1, 2, 2, 3]
2 0 2 3
After:  [1, 2, 2, 0]

Before: [0, 2, 1, 3]
8 1 3 0
After:  [2, 2, 1, 3]

Before: [3, 2, 2, 0]
1 0 2 2
After:  [3, 2, 2, 0]

Before: [0, 1, 2, 3]
0 1 2 3
After:  [0, 1, 2, 0]

Before: [2, 2, 2, 1]
12 3 2 2
After:  [2, 2, 1, 1]

Before: [1, 2, 1, 2]
9 3 1 3
After:  [1, 2, 1, 4]

Before: [1, 1, 1, 1]
11 1 0 3
After:  [1, 1, 1, 1]

Before: [1, 1, 0, 3]
15 0 2 0
After:  [0, 1, 0, 3]

Before: [0, 1, 1, 1]
6 1 3 3
After:  [0, 1, 1, 1]

Before: [2, 3, 1, 3]
3 3 3 0
After:  [3, 3, 1, 3]

Before: [3, 3, 2, 1]
12 3 2 1
After:  [3, 1, 2, 1]

Before: [3, 2, 2, 3]
5 3 1 3
After:  [3, 2, 2, 2]

Before: [1, 1, 2, 3]
0 1 2 3
After:  [1, 1, 2, 0]

Before: [0, 3, 0, 3]
14 3 1 3
After:  [0, 3, 0, 1]

Before: [3, 2, 1, 3]
9 1 1 2
After:  [3, 2, 4, 3]

Before: [2, 3, 2, 3]
1 1 2 0
After:  [2, 3, 2, 3]

Before: [0, 3, 2, 3]
7 0 0 3
After:  [0, 3, 2, 0]

Before: [0, 2, 1, 3]
8 2 3 3
After:  [0, 2, 1, 1]

Before: [0, 1, 2, 2]
3 2 2 2
After:  [0, 1, 2, 2]

Before: [3, 2, 2, 3]
8 1 3 0
After:  [2, 2, 2, 3]

Before: [0, 1, 1, 1]
6 1 3 0
After:  [1, 1, 1, 1]

Before: [2, 2, 1, 2]
9 3 0 0
After:  [4, 2, 1, 2]

Before: [0, 0, 1, 2]
4 2 3 2
After:  [0, 0, 1, 2]

Before: [1, 0, 0, 2]
15 0 2 3
After:  [1, 0, 0, 0]

Before: [2, 1, 2, 3]
0 1 2 0
After:  [0, 1, 2, 3]

Before: [2, 0, 0, 0]
10 3 2 0
After:  [1, 0, 0, 0]

Before: [0, 1, 3, 1]
6 1 3 0
After:  [1, 1, 3, 1]

Before: [2, 2, 0, 2]
9 1 3 2
After:  [2, 2, 4, 2]

Before: [1, 0, 2, 1]
2 0 2 2
After:  [1, 0, 0, 1]

Before: [3, 1, 1, 1]
6 1 3 1
After:  [3, 1, 1, 1]

Before: [1, 0, 2, 2]
2 0 2 1
After:  [1, 0, 2, 2]

Before: [3, 2, 2, 3]
1 0 2 1
After:  [3, 2, 2, 3]

Before: [0, 3, 2, 3]
1 3 2 3
After:  [0, 3, 2, 2]

Before: [1, 0, 2, 3]
1 3 2 1
After:  [1, 2, 2, 3]

Before: [2, 2, 1, 2]
4 2 3 3
After:  [2, 2, 1, 1]

Before: [1, 1, 1, 2]
14 3 2 3
After:  [1, 1, 1, 0]

Before: [2, 3, 1, 2]
4 2 3 0
After:  [1, 3, 1, 2]

Before: [2, 3, 0, 3]
9 0 0 3
After:  [2, 3, 0, 4]

Before: [2, 0, 2, 3]
3 3 3 2
After:  [2, 0, 3, 3]

Before: [1, 1, 1, 2]
4 2 3 0
After:  [1, 1, 1, 2]

Before: [3, 2, 3, 3]
5 0 1 0
After:  [2, 2, 3, 3]

Before: [1, 1, 2, 0]
11 1 0 0
After:  [1, 1, 2, 0]

Before: [3, 2, 3, 0]
13 1 2 1
After:  [3, 0, 3, 0]

Before: [1, 1, 0, 2]
15 0 2 0
After:  [0, 1, 0, 2]

Before: [1, 0, 2, 2]
2 0 2 3
After:  [1, 0, 2, 0]

Before: [1, 2, 1, 1]
13 2 1 3
After:  [1, 2, 1, 0]

Before: [3, 0, 2, 1]
1 0 2 2
After:  [3, 0, 2, 1]

Before: [2, 2, 1, 3]
8 0 3 0
After:  [2, 2, 1, 3]

Before: [2, 2, 2, 2]
9 2 1 3
After:  [2, 2, 2, 4]

Before: [0, 0, 1, 0]
7 0 0 0
After:  [0, 0, 1, 0]

Before: [2, 3, 1, 1]
9 2 3 0
After:  [2, 3, 1, 1]

Before: [1, 0, 1, 2]
4 2 3 3
After:  [1, 0, 1, 1]

Before: [3, 1, 1, 3]
13 3 1 3
After:  [3, 1, 1, 1]

Before: [3, 2, 2, 3]
3 3 3 2
After:  [3, 2, 3, 3]

Before: [2, 1, 2, 3]
0 1 2 2
After:  [2, 1, 0, 3]

Before: [1, 2, 2, 1]
2 0 2 1
After:  [1, 0, 2, 1]

Before: [0, 2, 2, 1]
12 3 2 0
After:  [1, 2, 2, 1]

Before: [3, 2, 0, 0]
5 0 1 2
After:  [3, 2, 2, 0]

Before: [0, 1, 1, 2]
4 2 3 1
After:  [0, 1, 1, 2]

Before: [3, 1, 2, 0]
3 2 2 2
After:  [3, 1, 2, 0]

Before: [1, 1, 0, 3]
15 0 2 1
After:  [1, 0, 0, 3]

Before: [0, 3, 2, 3]
1 1 2 1
After:  [0, 2, 2, 3]

Before: [1, 1, 0, 0]
10 3 3 2
After:  [1, 1, 1, 0]

Before: [1, 1, 2, 2]
2 0 2 2
After:  [1, 1, 0, 2]

Before: [1, 1, 2, 0]
0 1 2 0
After:  [0, 1, 2, 0]

Before: [3, 2, 2, 2]
5 0 3 3
After:  [3, 2, 2, 2]

Before: [3, 1, 2, 1]
0 1 2 3
After:  [3, 1, 2, 0]

Before: [2, 0, 2, 0]
3 2 2 1
After:  [2, 2, 2, 0]

Before: [0, 1, 0, 1]
6 1 3 1
After:  [0, 1, 0, 1]

Before: [3, 2, 2, 0]
10 3 3 0
After:  [1, 2, 2, 0]

Before: [1, 1, 1, 1]
6 1 3 2
After:  [1, 1, 1, 1]

Before: [3, 3, 2, 2]
1 0 2 0
After:  [2, 3, 2, 2]

Before: [1, 1, 3, 1]
11 1 0 3
After:  [1, 1, 3, 1]

Before: [0, 2, 1, 2]
7 0 0 3
After:  [0, 2, 1, 0]

Before: [1, 3, 2, 1]
12 3 2 1
After:  [1, 1, 2, 1]

Before: [1, 3, 1, 3]
8 0 3 1
After:  [1, 1, 1, 3]

Before: [2, 2, 0, 2]
9 0 3 0
After:  [4, 2, 0, 2]

Before: [1, 1, 1, 1]
11 1 0 0
After:  [1, 1, 1, 1]

Before: [0, 2, 2, 1]
12 3 2 2
After:  [0, 2, 1, 1]

Before: [1, 1, 3, 1]
13 2 1 3
After:  [1, 1, 3, 1]

Before: [3, 1, 1, 2]
9 3 3 3
After:  [3, 1, 1, 4]

Before: [0, 1, 3, 1]
7 0 0 0
After:  [0, 1, 3, 1]

Before: [1, 1, 3, 1]
6 1 3 2
After:  [1, 1, 1, 1]

Before: [1, 2, 0, 1]
15 0 2 1
After:  [1, 0, 0, 1]

Before: [1, 1, 2, 1]
12 3 2 0
After:  [1, 1, 2, 1]

Before: [1, 0, 1, 1]
9 2 0 1
After:  [1, 2, 1, 1]

Before: [2, 1, 0, 3]
8 0 3 0
After:  [2, 1, 0, 3]

Before: [3, 1, 2, 2]
0 1 2 1
After:  [3, 0, 2, 2]

Before: [1, 3, 1, 0]
13 2 1 3
After:  [1, 3, 1, 0]

Before: [2, 0, 3, 3]
3 3 3 1
After:  [2, 3, 3, 3]

Before: [1, 1, 2, 1]
11 1 0 0
After:  [1, 1, 2, 1]

Before: [0, 3, 2, 1]
12 3 2 3
After:  [0, 3, 2, 1]

Before: [3, 2, 1, 2]
4 2 3 1
After:  [3, 1, 1, 2]

Before: [1, 1, 2, 1]
6 1 3 1
After:  [1, 1, 2, 1]

Before: [3, 3, 2, 1]
12 3 2 0
After:  [1, 3, 2, 1]

Before: [1, 1, 3, 3]
11 1 0 3
After:  [1, 1, 3, 1]

Before: [2, 3, 2, 0]
1 1 2 3
After:  [2, 3, 2, 2]

Before: [3, 1, 2, 0]
0 1 2 0
After:  [0, 1, 2, 0]

Before: [2, 2, 3, 3]
13 1 2 1
After:  [2, 0, 3, 3]

Before: [0, 0, 2, 1]
12 3 2 1
After:  [0, 1, 2, 1]

Before: [1, 3, 3, 3]
8 0 3 0
After:  [1, 3, 3, 3]

Before: [2, 3, 2, 2]
3 2 2 3
After:  [2, 3, 2, 2]

Before: [3, 2, 1, 3]
5 3 1 2
After:  [3, 2, 2, 3]

Before: [0, 3, 0, 0]
10 3 3 1
After:  [0, 1, 0, 0]

Before: [2, 1, 2, 3]
1 3 2 3
After:  [2, 1, 2, 2]

Before: [1, 3, 2, 3]
8 0 3 2
After:  [1, 3, 1, 3]

Before: [2, 1, 2, 2]
9 0 0 0
After:  [4, 1, 2, 2]

Before: [3, 3, 0, 2]
5 1 3 1
After:  [3, 2, 0, 2]

Before: [3, 2, 1, 3]
8 2 3 1
After:  [3, 1, 1, 3]

Before: [2, 3, 3, 3]
9 0 0 3
After:  [2, 3, 3, 4]

Before: [3, 0, 2, 1]
12 3 2 0
After:  [1, 0, 2, 1]

Before: [2, 1, 2, 2]
0 1 2 3
After:  [2, 1, 2, 0]

Before: [2, 1, 0, 2]
10 2 2 2
After:  [2, 1, 1, 2]

Before: [2, 1, 0, 3]
5 3 0 1
After:  [2, 2, 0, 3]

Before: [1, 1, 2, 1]
12 3 2 1
After:  [1, 1, 2, 1]

Before: [2, 3, 2, 2]
1 1 2 3
After:  [2, 3, 2, 2]

Before: [0, 2, 1, 2]
13 2 1 0
After:  [0, 2, 1, 2]

Before: [1, 2, 3, 3]
8 0 3 3
After:  [1, 2, 3, 1]

Before: [1, 0, 2, 1]
2 0 2 3
After:  [1, 0, 2, 0]

Before: [1, 0, 0, 3]
15 0 2 3
After:  [1, 0, 0, 0]

Before: [1, 1, 1, 3]
11 1 0 0
After:  [1, 1, 1, 3]

Before: [3, 1, 3, 3]
13 2 1 1
After:  [3, 1, 3, 3]

Before: [3, 2, 2, 1]
12 3 2 1
After:  [3, 1, 2, 1]

Before: [3, 2, 1, 2]
5 0 3 3
After:  [3, 2, 1, 2]

Before: [2, 2, 2, 2]
9 2 1 0
After:  [4, 2, 2, 2]

Before: [0, 2, 3, 2]
9 1 3 3
After:  [0, 2, 3, 4]

Before: [3, 2, 2, 3]
1 3 2 1
After:  [3, 2, 2, 3]

Before: [0, 3, 2, 3]
1 3 2 2
After:  [0, 3, 2, 3]

Before: [1, 1, 2, 2]
11 1 0 2
After:  [1, 1, 1, 2]

Before: [3, 1, 1, 2]
4 2 3 0
After:  [1, 1, 1, 2]

Before: [1, 1, 2, 0]
0 1 2 3
After:  [1, 1, 2, 0]

Before: [0, 3, 1, 1]
13 2 1 1
After:  [0, 0, 1, 1]

Before: [2, 3, 2, 3]
1 1 2 2
After:  [2, 3, 2, 3]

Before: [3, 2, 0, 1]
5 0 1 1
After:  [3, 2, 0, 1]

Before: [2, 0, 3, 0]
10 3 3 2
After:  [2, 0, 1, 0]

Before: [0, 0, 1, 2]
14 3 2 3
After:  [0, 0, 1, 0]

Before: [1, 1, 1, 3]
11 1 0 2
After:  [1, 1, 1, 3]

Before: [0, 3, 2, 2]
5 1 3 1
After:  [0, 2, 2, 2]

Before: [1, 2, 2, 3]
8 0 3 2
After:  [1, 2, 1, 3]

Before: [0, 0, 1, 2]
4 2 3 0
After:  [1, 0, 1, 2]

Before: [0, 2, 1, 2]
4 2 3 3
After:  [0, 2, 1, 1]

Before: [0, 2, 0, 3]
3 3 3 2
After:  [0, 2, 3, 3]

Before: [1, 1, 2, 1]
0 1 2 0
After:  [0, 1, 2, 1]

Before: [1, 1, 0, 1]
15 0 2 1
After:  [1, 0, 0, 1]

Before: [1, 2, 0, 2]
15 0 2 0
After:  [0, 2, 0, 2]

Before: [1, 0, 0, 3]
15 0 2 0
After:  [0, 0, 0, 3]

Before: [0, 1, 2, 3]
1 3 2 1
After:  [0, 2, 2, 3]

Before: [1, 3, 2, 1]
12 3 2 0
After:  [1, 3, 2, 1]

Before: [3, 3, 2, 2]
5 1 3 2
After:  [3, 3, 2, 2]

Before: [1, 1, 0, 1]
6 1 3 0
After:  [1, 1, 0, 1]

Before: [3, 3, 3, 3]
3 3 3 3
After:  [3, 3, 3, 3]

Before: [1, 1, 2, 1]
0 1 2 2
After:  [1, 1, 0, 1]

Before: [3, 1, 3, 1]
6 1 3 1
After:  [3, 1, 3, 1]

Before: [3, 2, 1, 0]
13 2 1 1
After:  [3, 0, 1, 0]

Before: [0, 2, 3, 0]
7 0 0 2
After:  [0, 2, 0, 0]

Before: [3, 3, 1, 3]
8 2 3 2
After:  [3, 3, 1, 3]

Before: [2, 1, 2, 1]
6 1 3 2
After:  [2, 1, 1, 1]

Before: [1, 3, 2, 0]
2 0 2 0
After:  [0, 3, 2, 0]

Before: [0, 3, 1, 2]
10 3 3 0
After:  [1, 3, 1, 2]

Before: [1, 2, 0, 0]
15 0 2 2
After:  [1, 2, 0, 0]

Before: [1, 3, 0, 0]
15 0 2 2
After:  [1, 3, 0, 0]

Before: [2, 2, 2, 1]
12 3 2 0
After:  [1, 2, 2, 1]

Before: [1, 1, 0, 2]
11 1 0 3
After:  [1, 1, 0, 1]

Before: [2, 1, 2, 1]
0 1 2 0
After:  [0, 1, 2, 1]

Before: [3, 2, 1, 1]
9 1 1 2
After:  [3, 2, 4, 1]

Before: [1, 0, 0, 0]
15 0 2 0
After:  [0, 0, 0, 0]

Before: [2, 3, 0, 2]
5 1 3 3
After:  [2, 3, 0, 2]

Before: [1, 3, 2, 2]
1 1 2 3
After:  [1, 3, 2, 2]

Before: [2, 3, 3, 0]
5 1 0 1
After:  [2, 2, 3, 0]

Before: [1, 3, 2, 3]
2 0 2 1
After:  [1, 0, 2, 3]

Before: [1, 2, 0, 1]
15 0 2 0
After:  [0, 2, 0, 1]

Before: [3, 2, 3, 2]
13 1 2 2
After:  [3, 2, 0, 2]

Before: [3, 2, 3, 3]
13 1 2 1
After:  [3, 0, 3, 3]

Before: [3, 1, 0, 1]
6 1 3 2
After:  [3, 1, 1, 1]

Before: [1, 1, 1, 2]
11 1 0 1
After:  [1, 1, 1, 2]

Before: [1, 2, 2, 1]
12 3 2 0
After:  [1, 2, 2, 1]

Before: [2, 2, 3, 3]
9 1 0 0
After:  [4, 2, 3, 3]

Before: [0, 1, 0, 1]
6 1 3 0
After:  [1, 1, 0, 1]

Before: [1, 0, 3, 1]
4 3 2 0
After:  [1, 0, 3, 1]

Before: [0, 1, 3, 1]
6 1 3 1
After:  [0, 1, 3, 1]

Before: [3, 2, 3, 1]
13 3 1 1
After:  [3, 0, 3, 1]

Before: [1, 0, 1, 3]
8 2 3 1
After:  [1, 1, 1, 3]

Before: [2, 0, 2, 0]
10 3 3 3
After:  [2, 0, 2, 1]

Before: [3, 2, 2, 2]
5 0 3 2
After:  [3, 2, 2, 2]

Before: [1, 2, 0, 3]
15 0 2 1
After:  [1, 0, 0, 3]

Before: [0, 3, 1, 3]
8 2 3 1
After:  [0, 1, 1, 3]

Before: [0, 3, 2, 2]
5 1 3 2
After:  [0, 3, 2, 2]

Before: [1, 1, 0, 3]
11 1 0 3
After:  [1, 1, 0, 1]

Before: [1, 2, 0, 2]
15 0 2 2
After:  [1, 2, 0, 2]

Before: [1, 1, 2, 1]
6 1 3 0
After:  [1, 1, 2, 1]

Before: [1, 0, 2, 2]
3 2 2 2
After:  [1, 0, 2, 2]

Before: [2, 1, 2, 3]
8 0 3 3
After:  [2, 1, 2, 2]

Before: [1, 3, 0, 0]
15 0 2 3
After:  [1, 3, 0, 0]

Before: [2, 2, 2, 3]
1 3 2 0
After:  [2, 2, 2, 3]

Before: [3, 2, 2, 3]
1 3 2 2
After:  [3, 2, 2, 3]

Before: [3, 1, 3, 1]
4 3 2 2
After:  [3, 1, 1, 1]

Before: [1, 3, 2, 2]
2 0 2 3
After:  [1, 3, 2, 0]

Before: [1, 1, 3, 0]
11 1 0 2
After:  [1, 1, 1, 0]

Before: [2, 3, 2, 2]
5 1 0 2
After:  [2, 3, 2, 2]

Before: [1, 1, 2, 1]
12 3 2 3
After:  [1, 1, 2, 1]

Before: [0, 0, 2, 2]
7 0 0 3
After:  [0, 0, 2, 0]

Before: [3, 1, 1, 3]
13 3 1 2
After:  [3, 1, 1, 3]

Before: [1, 1, 0, 3]
11 1 0 2
After:  [1, 1, 1, 3]

Before: [3, 2, 1, 2]
5 0 3 2
After:  [3, 2, 2, 2]

Before: [0, 2, 2, 2]
10 3 3 0
After:  [1, 2, 2, 2]

Before: [3, 2, 1, 1]
14 1 2 3
After:  [3, 2, 1, 0]

Before: [1, 2, 1, 2]
13 2 1 2
After:  [1, 2, 0, 2]

Before: [0, 0, 3, 1]
4 3 2 1
After:  [0, 1, 3, 1]

Before: [2, 1, 2, 1]
0 1 2 3
After:  [2, 1, 2, 0]

Before: [3, 0, 2, 2]
3 2 2 1
After:  [3, 2, 2, 2]

Before: [1, 1, 3, 0]
11 1 0 0
After:  [1, 1, 3, 0]

Before: [2, 3, 1, 0]
13 2 1 2
After:  [2, 3, 0, 0]

Before: [2, 1, 2, 3]
1 3 2 0
After:  [2, 1, 2, 3]

Before: [1, 3, 1, 2]
4 2 3 0
After:  [1, 3, 1, 2]

Before: [0, 1, 0, 0]
7 0 0 2
After:  [0, 1, 0, 0]

Before: [3, 1, 1, 3]
3 3 3 2
After:  [3, 1, 3, 3]

Before: [1, 1, 2, 1]
2 0 2 2
After:  [1, 1, 0, 1]

Before: [1, 2, 3, 0]
10 3 3 0
After:  [1, 2, 3, 0]

Before: [0, 3, 2, 1]
1 1 2 1
After:  [0, 2, 2, 1]

Before: [0, 3, 3, 1]
7 0 0 3
After:  [0, 3, 3, 0]

Before: [1, 2, 2, 0]
3 2 2 2
After:  [1, 2, 2, 0]

Before: [1, 1, 0, 1]
11 1 0 2
After:  [1, 1, 1, 1]

Before: [2, 1, 3, 3]
13 3 1 0
After:  [1, 1, 3, 3]

Before: [3, 2, 2, 1]
5 0 1 2
After:  [3, 2, 2, 1]

Before: [2, 1, 0, 3]
5 3 0 3
After:  [2, 1, 0, 2]

Before: [1, 1, 1, 2]
4 2 3 2
After:  [1, 1, 1, 2]

Before: [2, 1, 2, 1]
12 3 2 2
After:  [2, 1, 1, 1]

Before: [3, 1, 2, 2]
9 3 3 1
After:  [3, 4, 2, 2]

Before: [1, 3, 2, 2]
9 3 3 0
After:  [4, 3, 2, 2]

Before: [1, 2, 0, 3]
5 3 1 0
After:  [2, 2, 0, 3]

Before: [1, 2, 2, 0]
2 0 2 2
After:  [1, 2, 0, 0]

Before: [3, 2, 3, 1]
13 3 1 0
After:  [0, 2, 3, 1]

Before: [0, 3, 3, 2]
14 1 3 0
After:  [0, 3, 3, 2]

Before: [0, 3, 1, 1]
9 2 3 2
After:  [0, 3, 2, 1]

Before: [2, 1, 2, 3]
5 3 0 3
After:  [2, 1, 2, 2]

Before: [2, 2, 2, 1]
12 3 2 1
After:  [2, 1, 2, 1]

Before: [2, 1, 2, 3]
0 1 2 3
After:  [2, 1, 2, 0]

Before: [0, 2, 0, 3]
8 1 3 1
After:  [0, 2, 0, 3]

Before: [1, 1, 2, 2]
2 0 2 1
After:  [1, 0, 2, 2]

Before: [2, 3, 2, 1]
1 1 2 2
After:  [2, 3, 2, 1]

Before: [0, 3, 0, 3]
3 3 3 0
After:  [3, 3, 0, 3]

Before: [1, 3, 0, 2]
15 0 2 3
After:  [1, 3, 0, 0]

Before: [3, 0, 2, 3]
1 0 2 3
After:  [3, 0, 2, 2]

Before: [0, 2, 0, 1]
7 0 0 2
After:  [0, 2, 0, 1]

Before: [1, 2, 2, 1]
2 0 2 2
After:  [1, 2, 0, 1]

Before: [0, 0, 2, 2]
7 0 0 1
After:  [0, 0, 2, 2]

Before: [3, 0, 2, 1]
12 3 2 2
After:  [3, 0, 1, 1]

Before: [2, 2, 1, 1]
13 3 1 0
After:  [0, 2, 1, 1]

Before: [3, 1, 0, 1]
6 1 3 1
After:  [3, 1, 0, 1]

Before: [3, 3, 2, 0]
1 1 2 0
After:  [2, 3, 2, 0]

Before: [2, 2, 1, 2]
9 1 1 3
After:  [2, 2, 1, 4]

Before: [3, 2, 3, 0]
5 0 1 3
After:  [3, 2, 3, 2]

Before: [1, 0, 2, 3]
2 0 2 3
After:  [1, 0, 2, 0]

Before: [1, 1, 2, 3]
0 1 2 1
After:  [1, 0, 2, 3]

Before: [2, 2, 2, 2]
9 3 3 1
After:  [2, 4, 2, 2]

Before: [1, 2, 2, 0]
2 0 2 0
After:  [0, 2, 2, 0]

Before: [1, 0, 0, 1]
10 2 2 1
After:  [1, 1, 0, 1]

Before: [1, 1, 2, 3]
11 1 0 2
After:  [1, 1, 1, 3]

Before: [2, 2, 0, 2]
9 1 3 3
After:  [2, 2, 0, 4]

Before: [2, 2, 1, 2]
4 2 3 1
After:  [2, 1, 1, 2]

Before: [1, 2, 2, 2]
3 2 2 2
After:  [1, 2, 2, 2]

Before: [2, 0, 1, 3]
8 0 3 2
After:  [2, 0, 2, 3]

Before: [3, 3, 0, 2]
10 3 3 2
After:  [3, 3, 1, 2]

Before: [1, 2, 2, 3]
2 0 2 0
After:  [0, 2, 2, 3]

Before: [0, 2, 1, 3]
14 1 2 1
After:  [0, 0, 1, 3]

Before: [3, 1, 1, 2]
4 2 3 2
After:  [3, 1, 1, 2]

Before: [2, 3, 2, 3]
14 3 1 1
After:  [2, 1, 2, 3]

Before: [1, 1, 0, 0]
11 1 0 0
After:  [1, 1, 0, 0]

Before: [2, 3, 1, 3]
8 2 3 3
After:  [2, 3, 1, 1]

Before: [3, 3, 2, 1]
12 3 2 3
After:  [3, 3, 2, 1]

Before: [0, 1, 0, 3]
7 0 0 0
After:  [0, 1, 0, 3]

Before: [3, 3, 3, 1]
4 3 2 2
After:  [3, 3, 1, 1]

Before: [2, 2, 3, 3]
8 0 3 0
After:  [2, 2, 3, 3]

Before: [2, 2, 0, 0]
10 3 3 2
After:  [2, 2, 1, 0]

Before: [1, 1, 1, 1]
6 1 3 3
After:  [1, 1, 1, 1]

Before: [2, 3, 3, 2]
10 3 3 3
After:  [2, 3, 3, 1]

Before: [2, 1, 3, 1]
6 1 3 0
After:  [1, 1, 3, 1]

Before: [1, 0, 0, 3]
8 0 3 3
After:  [1, 0, 0, 1]

Before: [1, 0, 0, 3]
15 0 2 1
After:  [1, 0, 0, 3]

Before: [2, 2, 0, 2]
9 3 3 3
After:  [2, 2, 0, 4]

Before: [3, 2, 0, 3]
8 1 3 0
After:  [2, 2, 0, 3]

Before: [0, 2, 2, 0]
3 2 2 3
After:  [0, 2, 2, 2]

Before: [3, 1, 3, 1]
6 1 3 0
After:  [1, 1, 3, 1]

Before: [1, 0, 2, 0]
2 0 2 1
After:  [1, 0, 2, 0]

Before: [2, 3, 0, 3]
3 3 3 1
After:  [2, 3, 0, 3]

Before: [0, 1, 2, 0]
10 3 3 0
After:  [1, 1, 2, 0]

Before: [1, 3, 0, 0]
15 0 2 0
After:  [0, 3, 0, 0]

Before: [1, 1, 0, 2]
11 1 0 0
After:  [1, 1, 0, 2]

Before: [0, 2, 2, 2]
7 0 0 1
After:  [0, 0, 2, 2]

Before: [2, 3, 1, 2]
14 1 3 1
After:  [2, 0, 1, 2]

Before: [2, 2, 1, 3]
8 0 3 2
After:  [2, 2, 2, 3]

Before: [3, 3, 2, 3]
1 3 2 3
After:  [3, 3, 2, 2]

Before: [2, 3, 2, 3]
1 3 2 1
After:  [2, 2, 2, 3]

Before: [1, 1, 2, 2]
0 1 2 3
After:  [1, 1, 2, 0]

Before: [0, 1, 1, 3]
7 0 0 1
After:  [0, 0, 1, 3]

Before: [1, 1, 1, 2]
11 1 0 2
After:  [1, 1, 1, 2]

Before: [1, 0, 1, 2]
4 2 3 2
After:  [1, 0, 1, 2]

Before: [0, 2, 3, 1]
4 3 2 2
After:  [0, 2, 1, 1]

Before: [1, 1, 1, 3]
11 1 0 1
After:  [1, 1, 1, 3]

Before: [1, 1, 0, 2]
15 0 2 1
After:  [1, 0, 0, 2]

Before: [0, 2, 1, 2]
14 1 2 1
After:  [0, 0, 1, 2]

Before: [1, 2, 1, 1]
13 3 1 2
After:  [1, 2, 0, 1]

Before: [1, 3, 0, 2]
15 0 2 2
After:  [1, 3, 0, 2]

Before: [0, 3, 3, 2]
14 1 3 3
After:  [0, 3, 3, 0]

Before: [2, 0, 1, 1]
9 0 0 3
After:  [2, 0, 1, 4]

Before: [1, 1, 0, 1]
6 1 3 1
After:  [1, 1, 0, 1]

Before: [3, 3, 2, 2]
9 2 3 0
After:  [4, 3, 2, 2]

Before: [2, 1, 2, 3]
5 3 0 0
After:  [2, 1, 2, 3]

Before: [2, 1, 2, 2]
9 3 3 2
After:  [2, 1, 4, 2]

Before: [0, 1, 2, 2]
0 1 2 1
After:  [0, 0, 2, 2]

Before: [2, 2, 3, 1]
4 3 2 3
After:  [2, 2, 3, 1]

Before: [3, 2, 3, 0]
10 3 3 3
After:  [3, 2, 3, 1]

Before: [3, 1, 2, 0]
1 0 2 0
After:  [2, 1, 2, 0]

Before: [1, 3, 2, 3]
2 0 2 3
After:  [1, 3, 2, 0]

Before: [1, 0, 0, 0]
15 0 2 2
After:  [1, 0, 0, 0]

Before: [1, 3, 2, 1]
1 1 2 3
After:  [1, 3, 2, 2]

Before: [3, 2, 2, 3]
5 3 1 1
After:  [3, 2, 2, 3]

Before: [2, 1, 2, 1]
0 1 2 2
After:  [2, 1, 0, 1]

Before: [2, 2, 1, 3]
9 1 1 1
After:  [2, 4, 1, 3]

Before: [1, 2, 2, 0]
9 2 1 2
After:  [1, 2, 4, 0]

Before: [3, 1, 2, 3]
0 1 2 0
After:  [0, 1, 2, 3]

Before: [1, 2, 2, 1]
2 0 2 3
After:  [1, 2, 2, 0]

Before: [0, 2, 2, 1]
9 1 1 2
After:  [0, 2, 4, 1]

Before: [2, 2, 2, 2]
9 2 3 1
After:  [2, 4, 2, 2]

Before: [2, 2, 2, 0]
3 2 2 0
After:  [2, 2, 2, 0]

Before: [1, 1, 3, 1]
11 1 0 2
After:  [1, 1, 1, 1]

Before: [2, 0, 3, 1]
9 0 0 1
After:  [2, 4, 3, 1]

Before: [1, 0, 2, 0]
2 0 2 0
After:  [0, 0, 2, 0]

Before: [2, 3, 0, 3]
10 2 2 0
After:  [1, 3, 0, 3]

Before: [3, 1, 3, 2]
13 2 1 1
After:  [3, 1, 3, 2]

Before: [3, 2, 0, 2]
10 3 3 1
After:  [3, 1, 0, 2]

Before: [3, 1, 1, 2]
14 3 2 1
After:  [3, 0, 1, 2]

Before: [0, 1, 2, 1]
3 2 2 2
After:  [0, 1, 2, 1]

Before: [0, 1, 2, 1]
7 0 0 3
After:  [0, 1, 2, 0]

Before: [1, 1, 1, 2]
11 1 0 3
After:  [1, 1, 1, 1]

Before: [3, 2, 2, 3]
5 3 1 2
After:  [3, 2, 2, 3]

Before: [3, 0, 2, 3]
1 0 2 0
After:  [2, 0, 2, 3]

Before: [1, 1, 2, 2]
0 1 2 2
After:  [1, 1, 0, 2]

Before: [1, 1, 0, 3]
11 1 0 1
After:  [1, 1, 0, 3]

Before: [3, 1, 2, 0]
0 1 2 1
After:  [3, 0, 2, 0]

Before: [1, 1, 0, 1]
11 1 0 1
After:  [1, 1, 0, 1]

Before: [2, 3, 2, 1]
12 3 2 1
After:  [2, 1, 2, 1]

Before: [0, 1, 3, 1]
4 3 2 1
After:  [0, 1, 3, 1]

Before: [1, 3, 2, 0]
2 0 2 1
After:  [1, 0, 2, 0]

Before: [0, 1, 3, 3]
7 0 0 2
After:  [0, 1, 0, 3]

Before: [3, 1, 3, 1]
6 1 3 2
After:  [3, 1, 1, 1]

Before: [1, 2, 3, 1]
4 3 2 0
After:  [1, 2, 3, 1]

Before: [3, 2, 2, 3]
3 3 3 1
After:  [3, 3, 2, 3]

Before: [2, 1, 2, 1]
6 1 3 0
After:  [1, 1, 2, 1]

Before: [1, 1, 2, 3]
11 1 0 3
After:  [1, 1, 2, 1]

Before: [0, 0, 1, 3]
7 0 0 0
After:  [0, 0, 1, 3]

Before: [2, 2, 1, 2]
9 3 3 0
After:  [4, 2, 1, 2]

Before: [0, 2, 1, 3]
7 0 0 1
After:  [0, 0, 1, 3]

Before: [1, 1, 1, 0]
11 1 0 0
After:  [1, 1, 1, 0]

Before: [0, 1, 2, 1]
6 1 3 0
After:  [1, 1, 2, 1]

Before: [0, 3, 3, 2]
7 0 0 0
After:  [0, 3, 3, 2]

Before: [3, 1, 2, 2]
0 1 2 3
After:  [3, 1, 2, 0]

Before: [3, 1, 2, 0]
0 1 2 3
After:  [3, 1, 2, 0]

Before: [3, 1, 2, 0]
3 2 2 3
After:  [3, 1, 2, 2]

Before: [2, 2, 1, 3]
8 1 3 2
After:  [2, 2, 2, 3]

Before: [1, 2, 1, 3]
9 2 0 3
After:  [1, 2, 1, 2]

Before: [3, 2, 2, 1]
12 3 2 0
After:  [1, 2, 2, 1]

Before: [2, 3, 2, 3]
8 0 3 1
After:  [2, 2, 2, 3]

Before: [1, 1, 1, 3]
13 3 1 1
After:  [1, 1, 1, 3]

Before: [0, 0, 2, 1]
12 3 2 3
After:  [0, 0, 2, 1]

Before: [1, 0, 0, 2]
10 3 3 3
After:  [1, 0, 0, 1]

Before: [3, 2, 3, 1]
4 3 2 1
After:  [3, 1, 3, 1]

Before: [3, 3, 2, 1]
1 1 2 2
After:  [3, 3, 2, 1]

Before: [3, 2, 2, 3]
5 0 1 2
After:  [3, 2, 2, 3]

Before: [1, 1, 0, 0]
15 0 2 0
After:  [0, 1, 0, 0]

Before: [2, 3, 3, 2]
9 3 0 3
After:  [2, 3, 3, 4]

Before: [2, 3, 2, 1]
12 3 2 0
After:  [1, 3, 2, 1]

Before: [0, 1, 1, 3]
3 3 3 0
After:  [3, 1, 1, 3]

Before: [1, 1, 0, 0]
15 0 2 2
After:  [1, 1, 0, 0]

Before: [2, 3, 2, 1]
5 1 0 1
After:  [2, 2, 2, 1]

Before: [2, 1, 1, 1]
6 1 3 1
After:  [2, 1, 1, 1]

Before: [3, 1, 2, 1]
1 0 2 0
After:  [2, 1, 2, 1]

Before: [2, 0, 1, 2]
9 3 0 3
After:  [2, 0, 1, 4]

Before: [2, 1, 1, 1]
6 1 3 2
After:  [2, 1, 1, 1]

Before: [1, 1, 2, 2]
0 1 2 0
After:  [0, 1, 2, 2]

Before: [2, 3, 1, 3]
14 3 1 0
After:  [1, 3, 1, 3]

Before: [3, 3, 3, 2]
5 0 3 0
After:  [2, 3, 3, 2]

Before: [3, 3, 2, 3]
3 2 2 1
After:  [3, 2, 2, 3]

Before: [1, 2, 3, 3]
13 1 2 1
After:  [1, 0, 3, 3]

Before: [2, 1, 0, 3]
13 3 1 2
After:  [2, 1, 1, 3]

Before: [0, 0, 3, 1]
4 3 2 3
After:  [0, 0, 3, 1]

Before: [0, 2, 3, 1]
4 3 2 0
After:  [1, 2, 3, 1]

Before: [0, 1, 3, 2]
7 0 0 0
After:  [0, 1, 3, 2]

Before: [1, 3, 2, 1]
2 0 2 2
After:  [1, 3, 0, 1]

Before: [1, 2, 0, 1]
15 0 2 3
After:  [1, 2, 0, 0]

Before: [2, 0, 2, 1]
12 3 2 2
After:  [2, 0, 1, 1]

Before: [2, 1, 1, 3]
8 2 3 1
After:  [2, 1, 1, 3]

Before: [2, 3, 2, 0]
1 1 2 2
After:  [2, 3, 2, 0]

Before: [1, 3, 2, 2]
9 2 3 0
After:  [4, 3, 2, 2]

Before: [3, 3, 1, 2]
14 3 2 2
After:  [3, 3, 0, 2]

Before: [0, 0, 2, 0]
7 0 0 1
After:  [0, 0, 2, 0]

Before: [2, 1, 2, 3]
3 2 2 2
After:  [2, 1, 2, 3]

Before: [3, 2, 1, 1]
14 1 2 2
After:  [3, 2, 0, 1]

Before: [1, 0, 2, 2]
10 3 3 0
After:  [1, 0, 2, 2]

Before: [2, 2, 3, 0]
10 3 3 2
After:  [2, 2, 1, 0]

Before: [3, 2, 3, 0]
10 3 3 0
After:  [1, 2, 3, 0]

Before: [1, 1, 3, 1]
6 1 3 3
After:  [1, 1, 3, 1]

Before: [3, 3, 3, 1]
4 3 2 0
After:  [1, 3, 3, 1]

Before: [0, 3, 3, 3]
14 3 1 2
After:  [0, 3, 1, 3]

Before: [3, 2, 1, 2]
4 2 3 0
After:  [1, 2, 1, 2]

Before: [2, 1, 2, 1]
9 2 0 3
After:  [2, 1, 2, 4]

Before: [0, 1, 2, 3]
7 0 0 1
After:  [0, 0, 2, 3]

Before: [3, 0, 1, 2]
4 2 3 3
After:  [3, 0, 1, 1]

Before: [2, 2, 0, 3]
8 0 3 2
After:  [2, 2, 2, 3]

Before: [0, 1, 2, 1]
12 3 2 0
After:  [1, 1, 2, 1]

Before: [1, 1, 3, 3]
11 1 0 1
After:  [1, 1, 3, 3]

Before: [0, 1, 2, 2]
3 2 2 1
After:  [0, 2, 2, 2]`


let testInput = `7 2 0 0
11 0 2 0
2 1 1 3
7 0 0 2
11 2 2 2
13 0 3 2
7 2 1 2
9 1 2 1
8 1 0 2
2 3 1 3
2 3 1 1
14 0 1 3
7 3 2 3
7 3 1 3
9 3 2 2
8 2 0 0
7 1 0 2
11 2 2 2
2 0 2 1
2 0 0 3
2 3 1 2
7 2 1 2
9 0 2 0
8 0 2 1
2 2 3 0
2 3 2 3
2 3 2 2
0 0 2 2
7 2 1 2
7 2 2 2
9 1 2 1
8 1 3 0
2 2 1 3
2 1 2 1
2 2 3 2
15 1 3 3
7 3 3 3
9 3 0 0
8 0 3 2
2 3 1 1
2 2 0 3
2 1 3 0
15 0 3 0
7 0 2 0
7 0 3 0
9 2 0 2
8 2 2 3
2 2 1 0
2 3 2 2
7 1 0 1
11 1 1 1
0 0 2 1
7 1 2 1
9 1 3 3
8 3 2 1
7 1 0 3
11 3 1 3
13 0 3 3
7 3 3 3
9 1 3 1
8 1 1 3
7 0 0 2
11 2 2 2
2 3 1 0
2 0 3 1
14 2 0 0
7 0 1 0
9 0 3 3
8 3 2 1
2 1 2 0
2 2 2 3
2 0 2 2
7 0 2 3
7 3 3 3
9 3 1 1
8 1 1 0
2 0 2 1
7 1 0 3
11 3 1 3
11 3 1 1
7 1 3 1
9 1 0 0
8 0 3 2
2 1 2 0
7 3 0 1
11 1 0 1
2 2 1 3
11 0 1 1
7 1 1 1
7 1 1 1
9 1 2 2
7 1 0 0
11 0 3 0
2 1 3 1
15 1 3 3
7 3 1 3
9 2 3 2
8 2 3 3
2 0 3 2
1 0 2 2
7 2 2 2
7 2 2 2
9 2 3 3
2 2 3 0
2 3 0 2
2 2 2 1
0 0 2 2
7 2 2 2
9 3 2 3
7 3 0 0
11 0 3 0
7 2 0 2
11 2 0 2
0 2 0 0
7 0 2 0
9 3 0 3
2 3 2 0
2 3 3 1
0 2 0 1
7 1 2 1
9 1 3 3
8 3 3 1
2 3 3 2
2 3 0 3
1 3 2 3
7 3 3 3
9 3 1 1
2 1 3 3
2 0 1 2
9 3 3 2
7 2 1 2
9 2 1 1
8 1 3 0
7 2 0 3
11 3 0 3
7 1 0 2
11 2 2 2
2 2 1 1
12 3 2 3
7 3 3 3
9 3 0 0
8 0 2 2
2 0 3 1
7 1 0 0
11 0 1 0
2 1 1 3
11 3 1 1
7 1 3 1
9 2 1 2
7 0 0 0
11 0 2 0
2 3 2 1
13 0 3 0
7 0 2 0
7 0 1 0
9 2 0 2
8 2 0 0
2 1 2 1
7 0 0 2
11 2 2 2
9 1 3 1
7 1 2 1
9 1 0 0
8 0 1 1
2 1 0 2
2 2 2 3
2 2 1 0
10 0 3 2
7 2 3 2
7 2 1 2
9 1 2 1
8 1 3 2
2 3 1 1
2 3 2 3
5 1 0 3
7 3 3 3
7 3 1 3
9 2 3 2
2 2 1 1
2 2 0 3
10 0 3 0
7 0 3 0
9 2 0 2
8 2 3 0
2 0 3 1
2 2 0 2
7 1 0 3
11 3 0 3
12 3 2 1
7 1 2 1
9 0 1 0
8 0 3 1
2 3 0 2
2 2 2 0
2 2 3 3
6 0 2 3
7 3 2 3
9 3 1 1
8 1 3 0
2 3 1 3
2 0 1 1
1 3 2 1
7 1 1 1
9 1 0 0
7 0 0 3
11 3 0 3
2 0 3 2
2 3 2 1
1 1 2 2
7 2 1 2
7 2 3 2
9 2 0 0
2 2 0 3
2 0 0 1
2 0 3 2
4 2 3 3
7 3 1 3
9 3 0 0
8 0 1 1
2 2 3 2
2 1 3 0
2 0 1 3
12 3 2 3
7 3 3 3
9 1 3 1
8 1 3 3
2 3 2 1
2 3 1 0
6 2 0 2
7 2 3 2
7 2 1 2
9 3 2 3
8 3 2 2
2 1 3 3
2 1 3 0
9 0 0 1
7 1 2 1
7 1 3 1
9 1 2 2
2 2 2 0
2 1 0 1
2 0 0 3
15 1 0 3
7 3 3 3
9 3 2 2
8 2 1 1
2 0 2 0
7 0 0 3
11 3 2 3
7 0 0 2
11 2 2 2
2 3 2 2
7 2 3 2
9 1 2 1
2 2 0 2
7 2 0 3
11 3 0 3
2 3 2 0
12 3 2 2
7 2 3 2
9 2 1 1
8 1 0 0
2 2 1 2
7 3 0 1
11 1 2 1
12 3 2 1
7 1 2 1
7 1 1 1
9 0 1 0
8 0 0 1
2 0 2 0
12 3 2 2
7 2 3 2
7 2 3 2
9 1 2 1
2 1 1 2
7 0 0 3
11 3 2 3
2 3 2 0
1 0 2 3
7 3 2 3
9 1 3 1
8 1 1 3
2 3 2 2
2 2 0 0
2 3 1 1
14 0 1 2
7 2 3 2
9 3 2 3
8 3 0 1
7 0 0 3
11 3 0 3
2 1 3 0
7 3 0 2
11 2 3 2
4 3 2 0
7 0 3 0
9 0 1 1
8 1 1 0
2 2 2 3
2 3 3 1
1 1 2 2
7 2 1 2
9 2 0 0
8 0 0 1
2 3 1 2
2 1 0 3
2 3 1 0
7 3 2 2
7 2 1 2
7 2 1 2
9 2 1 1
8 1 1 3
2 1 3 0
2 2 1 2
2 2 2 1
8 0 2 0
7 0 2 0
9 3 0 3
8 3 1 0
2 2 2 3
2 1 2 1
15 1 3 2
7 2 2 2
9 0 2 0
2 3 1 2
2 3 1 1
5 1 3 1
7 1 3 1
9 0 1 0
8 0 3 1
2 0 3 2
2 2 2 0
10 0 3 3
7 3 1 3
7 3 1 3
9 3 1 1
8 1 3 0
7 3 0 3
11 3 0 3
2 1 1 1
2 2 2 2
12 3 2 1
7 1 1 1
9 1 0 0
8 0 3 2
2 1 0 0
2 3 1 3
2 3 3 1
9 0 0 0
7 0 1 0
9 0 2 2
8 2 2 3
2 2 0 1
2 3 3 2
2 2 2 0
6 1 2 1
7 1 3 1
9 1 3 3
2 1 3 0
2 1 3 1
7 1 2 2
7 2 2 2
9 3 2 3
8 3 3 0
2 0 2 3
2 2 1 2
3 2 3 2
7 2 3 2
7 2 2 2
9 2 0 0
8 0 3 1
2 1 3 2
7 3 0 3
11 3 2 3
2 2 0 0
10 0 3 3
7 3 3 3
9 3 1 1
8 1 1 3
2 2 0 1
7 0 0 2
11 2 3 2
2 1 1 0
6 1 2 2
7 2 1 2
7 2 2 2
9 2 3 3
7 1 0 2
11 2 0 2
2 1 2 1
7 0 2 2
7 2 3 2
9 2 3 3
8 3 0 2
2 1 1 3
9 3 0 1
7 1 3 1
9 1 2 2
2 2 2 3
2 2 0 1
7 1 0 0
11 0 2 0
3 1 3 1
7 1 2 1
7 1 1 1
9 1 2 2
8 2 2 0
7 3 0 2
11 2 2 2
2 0 3 3
2 3 2 1
12 3 2 1
7 1 1 1
9 1 0 0
8 0 2 3
2 2 1 0
2 3 0 2
2 3 0 1
2 2 1 0
7 0 1 0
9 3 0 3
8 3 0 1
7 1 0 2
11 2 2 2
2 0 2 0
2 0 0 3
12 3 2 3
7 3 3 3
9 3 1 1
8 1 0 3
2 1 1 0
2 0 2 1
8 0 2 0
7 0 2 0
9 0 3 3
2 2 0 0
2 1 2 1
2 1 1 2
15 1 0 2
7 2 3 2
9 2 3 3
8 3 0 0
7 0 0 1
11 1 3 1
2 3 2 3
7 0 0 2
11 2 1 2
1 3 2 3
7 3 3 3
7 3 1 3
9 0 3 0
8 0 3 2
2 0 2 1
2 1 2 0
7 3 0 3
11 3 1 3
11 0 1 1
7 1 2 1
9 1 2 2
8 2 3 3
2 3 3 1
7 0 0 0
11 0 0 0
2 0 3 2
2 2 1 1
7 1 3 1
9 1 3 3
7 2 0 1
11 1 3 1
2 1 2 2
1 1 2 2
7 2 3 2
9 2 3 3
8 3 1 1
7 3 0 0
11 0 3 0
2 2 3 2
2 2 0 3
3 2 3 2
7 2 1 2
9 1 2 1
8 1 3 3
2 2 2 0
2 2 3 1
2 3 2 2
6 0 2 1
7 1 3 1
7 1 2 1
9 3 1 3
8 3 0 1
2 3 3 3
2 0 1 2
2 0 1 0
1 3 2 0
7 0 1 0
9 1 0 1
7 0 0 0
11 0 0 0
2 1 2 3
2 2 3 0
7 0 2 0
9 1 0 1
2 2 0 0
2 2 0 3
2 1 2 2
2 3 0 0
7 0 2 0
7 0 2 0
9 0 1 1
8 1 0 0
2 1 2 3
7 1 0 1
11 1 1 1
2 0 1 2
9 3 3 1
7 1 3 1
7 1 3 1
9 0 1 0
7 2 0 2
11 2 1 2
7 2 0 1
11 1 1 1
7 0 0 3
11 3 0 3
2 3 1 3
7 3 3 3
9 3 0 0
8 0 3 1
2 0 0 3
2 3 2 0
2 3 2 2
4 3 2 2
7 2 1 2
9 2 1 1
8 1 0 3
2 0 0 2
7 3 0 1
11 1 2 1
7 3 0 0
11 0 1 0
7 0 2 0
7 0 2 0
9 0 3 3
2 3 1 2
2 2 3 0
6 1 2 0
7 0 1 0
7 0 3 0
9 0 3 3
2 0 2 1
2 1 1 0
7 3 0 2
11 2 2 2
11 0 1 2
7 2 3 2
9 3 2 3
8 3 2 1
2 0 3 2
2 2 0 3
15 0 3 3
7 3 3 3
7 3 3 3
9 1 3 1
2 2 1 2
2 0 1 3
2 0 2 0
3 2 3 0
7 0 2 0
9 0 1 1
2 2 1 0
7 2 0 2
11 2 0 2
2 1 2 3
13 0 3 0
7 0 2 0
7 0 1 0
9 1 0 1
2 2 2 0
2 3 3 2
6 0 2 0
7 0 2 0
9 0 1 1
8 1 3 3
2 2 2 1
2 0 3 2
2 1 2 0
7 0 2 1
7 1 3 1
9 3 1 3
8 3 3 2
2 3 3 3
7 3 0 0
11 0 3 0
2 2 0 1
6 1 0 3
7 3 1 3
9 3 2 2
8 2 3 1
2 2 2 3
2 2 2 2
2 1 2 0
15 0 3 0
7 0 1 0
9 1 0 1
8 1 1 2
2 1 0 1
2 1 0 3
2 2 3 0
15 3 0 0
7 0 2 0
9 2 0 2
8 2 3 0
2 2 0 3
2 0 1 2
7 1 2 2
7 2 1 2
9 2 0 0
8 0 0 1
2 3 2 2
7 1 0 0
11 0 1 0
7 0 2 0
7 0 3 0
9 1 0 1
8 1 2 0
7 3 0 3
11 3 0 3
2 3 3 1
4 3 2 1
7 1 3 1
9 0 1 0
2 1 3 3
2 0 3 2
2 1 1 1
9 1 3 3
7 3 2 3
9 3 0 0
8 0 2 2
2 2 1 0
7 2 0 1
11 1 3 1
2 2 1 3
14 0 1 3
7 3 2 3
7 3 2 3
9 3 2 2
8 2 0 1
2 3 2 3
2 3 2 2
5 3 0 2
7 2 3 2
7 2 3 2
9 1 2 1
7 0 0 0
11 0 1 0
2 2 1 2
7 3 0 3
11 3 2 3
3 2 3 2
7 2 3 2
9 2 1 1
8 1 1 2
2 1 1 3
2 0 0 1
9 3 0 1
7 1 3 1
9 1 2 2
8 2 0 1
2 2 3 2
7 0 0 3
11 3 2 3
3 2 3 0
7 0 3 0
9 1 0 1
2 0 1 3
2 2 0 0
3 2 3 0
7 0 1 0
9 0 1 1
8 1 3 0
2 3 3 2
2 2 0 1
2 3 3 3
6 1 2 3
7 3 3 3
9 0 3 0
8 0 0 1
2 0 0 3
2 0 3 0
4 3 2 3
7 3 3 3
7 3 1 3
9 1 3 1
8 1 2 3
2 2 1 1
2 3 3 0
6 1 2 2
7 2 3 2
9 2 3 3
2 2 0 2
7 1 0 0
11 0 1 0
2 1 0 1
9 1 0 1
7 1 2 1
7 1 1 1
9 1 3 3
8 3 3 2
2 1 3 3
2 1 3 1
7 3 0 0
11 0 3 0
2 3 1 0
7 0 1 0
9 0 2 2
8 2 0 1
7 3 0 0
11 0 2 0
2 1 2 2
13 0 3 0
7 0 2 0
7 0 1 0
9 1 0 1
8 1 0 0
7 1 0 1
11 1 1 1
2 0 0 3
2 2 1 2
12 3 2 2
7 2 3 2
9 0 2 0
8 0 0 1
2 3 1 2
2 3 1 3
2 1 2 0
9 0 0 0
7 0 3 0
9 1 0 1
2 1 0 3
2 2 1 0
2 2 3 2
13 0 3 3
7 3 1 3
7 3 2 3
9 1 3 1
8 1 0 3
2 0 2 1
2 3 1 2
0 0 2 0
7 0 3 0
7 0 2 0
9 0 3 3
8 3 0 2
2 1 0 3
2 0 0 0
2 1 3 1
2 3 1 1
7 1 1 1
9 2 1 2
8 2 0 0
2 3 1 2
7 2 0 1
11 1 1 1
7 3 2 1
7 1 1 1
9 1 0 0
8 0 1 2
7 1 0 1
11 1 3 1
2 2 3 0
2 0 1 3
2 3 0 0
7 0 1 0
9 0 2 2
8 2 2 1
2 1 2 0
7 2 0 3
11 3 1 3
2 1 1 2
9 3 0 3
7 3 3 3
7 3 1 3
9 1 3 1
7 3 0 3
11 3 0 3
2 0 0 2
2 3 3 0
0 2 0 2
7 2 2 2
7 2 3 2
9 1 2 1
8 1 3 0
2 3 3 2
2 0 0 1
7 2 0 3
11 3 1 3
11 3 1 1
7 1 3 1
7 1 3 1
9 1 0 0
7 2 0 3
11 3 2 3
2 3 0 1
7 2 0 2
11 2 2 2
14 2 1 1
7 1 1 1
9 1 0 0
8 0 2 1
7 0 0 0
11 0 2 0
2 3 3 2
2 1 2 3
7 3 2 2
7 2 2 2
9 2 1 1
8 1 0 0
2 1 3 1
2 3 3 2
2 2 3 3
15 1 3 1
7 1 3 1
9 0 1 0
8 0 1 1
2 0 1 2
2 2 0 0
10 0 3 2
7 2 2 2
9 2 1 1
8 1 1 2
7 2 0 0
11 0 3 0
2 0 2 3
7 1 0 1
11 1 2 1
6 1 0 3
7 3 2 3
9 2 3 2
2 1 3 0
2 1 1 1
7 2 0 3
11 3 2 3
15 1 3 3
7 3 3 3
7 3 1 3
9 3 2 2
8 2 2 3
7 2 0 2
11 2 0 2
2 0 3 1
7 0 2 2
7 2 1 2
9 2 3 3
8 3 1 2
7 3 0 0
11 0 2 0
2 0 1 3
3 0 3 1
7 1 1 1
9 2 1 2
8 2 0 1
2 1 2 3
2 2 2 2
13 0 3 0
7 0 2 0
9 1 0 1
2 0 0 2
2 3 3 0
2 2 2 3
4 2 3 3
7 3 1 3
9 3 1 1
8 1 2 2
2 0 3 1
2 1 0 0
2 0 2 3
11 0 1 1
7 1 2 1
9 2 1 2
8 2 2 1
7 1 0 2
11 2 0 2
2 2 3 3
4 2 3 0
7 0 3 0
9 0 1 1
8 1 2 0
7 3 0 1
11 1 3 1
7 0 0 3
11 3 1 3
11 3 1 2
7 2 2 2
7 2 3 2
9 2 0 0
8 0 2 1
2 1 0 0
7 3 0 2
11 2 2 2
2 0 1 3
8 0 2 0
7 0 3 0
9 0 1 1
8 1 0 0
7 2 0 1
11 1 2 1
12 3 2 2
7 2 3 2
9 0 2 0
7 2 0 1
11 1 1 1
2 3 1 2
2 2 1 3
7 1 2 2
7 2 3 2
7 2 2 2
9 0 2 0
2 0 2 3
2 2 3 1
2 3 2 2
4 3 2 3
7 3 3 3
7 3 1 3
9 0 3 0
8 0 1 1
2 0 1 2
2 3 1 3
2 2 3 0
5 3 0 3
7 3 3 3
9 3 1 1
8 1 3 3
2 1 3 0
2 1 3 1
7 1 0 2
11 2 2 2
8 0 2 2
7 2 3 2
9 3 2 3
8 3 1 1
2 1 2 3
2 3 0 2
9 3 0 3
7 3 2 3
9 3 1 1
2 0 3 3
2 2 2 0
6 0 2 0
7 0 2 0
9 1 0 1
2 3 3 0
2 2 3 3
7 3 1 3
9 1 3 1
8 1 0 0`

const opcodeFunctions = {
  addr: function (reg, a, b, c) {
    reg[c] = reg[a] + reg[b]
  },
  addi: function (reg, a, b, c) {
    reg[c] = reg[a] + b
  },
  mulr: function (reg, a, b, c) {
    reg[c] = reg[a] * reg[b]
  },
  muli: function (reg, a, b, c) {
    reg[c] = reg[a] * b
  },
  banr: function (reg, a, b, c) {
    reg[c] = reg[a] & reg[b]
  },
  bani: function (reg, a, b, c) {
    reg[c] = reg[a] & b
  },
  borr: function (reg, a, b, c) {
    reg[c] = reg[a] | reg[b]
  },
  bori: function (reg, a, b, c) {
    reg[c] = reg[a] | b
  },
  setr: function (reg, a, b, c) {
    reg[c] = reg[a]
  },
  seti: function (reg, a, b, c) {
    reg[c] = a
  },
  gtir: function (reg, a, b, c) {
    reg[c] = a > reg[b] ? 1 : 0
  },
  gtri: function (reg, a, b, c) {
    reg[c] = reg[a] > b ? 1 : 0
  },
  gtrr: function (reg, a, b, c) {
    reg[c] = reg[a] > reg[b] ? 1 : 0
  },
  eqir: function (reg, a, b, c) {
    reg[c] = a === reg[b] ? 1 : 0
  },
  eqri: function (reg, a, b, c) {
    reg[c] = reg[a] === b ? 1 : 0
  },
  eqrr: function (reg, a, b, c) {
    reg[c] = reg[a] === reg[b] ? 1 : 0
  }
}

const samples = _.chunk(input.split('\n'), 4).map(lines => {
  return {
    before: eval(lines[0]),
    after: eval(lines[2]),
    instruction: lines[1].split(' ').map(n => parseInt(n))
  }
})

function matchingOpcodeFunctions (sample) {
  return Object.keys(opcodeFunctions).filter(name => {
    const reg = _.clone(sample.before)
    opcodeFunctions[name](reg, ...sample.instruction.slice(1, 4))
    return reg.toString() === sample.after.toString()
  })
}

let opcodes = new Array(16)
for (const sample of samples) {
  const matches = matchingOpcodeFunctions(sample)
  const opcodeNumber = sample.instruction[0]
  if (!opcodes[opcodeNumber]) {
    opcodes[opcodeNumber] = matches
  } else {
    opcodes[opcodeNumber] = _.intersection(opcodes[opcodeNumber], matches)
  }
}

opcodes = opcodes.map(candidates => new Set(candidates))
while (opcodes.find(candidates => candidates.size > 1)) {
  for (let i = 0; i < 16; i++) {
    if (opcodes[i].size === 1) {
      const opcode = [...opcodes[i]][0]
      for (let j = 0; j < 16; j++) {
        if (j === i) {
          continue
        }
        opcodes[j].delete(opcode)
      }
    }
  }
}
opcodes = opcodes.map(candidates => [...candidates][0])
console.log(opcodes)

const reg = [0, 0, 0, 0]
const program = testInput.split('\n').map(line => line.split(' ').map(n => parseInt(n)))
for (const instruction of program) {
  const opcodeNumber = instruction[0]
  const opcodeName = opcodes[opcodeNumber]
  const opcodeFunction = opcodeFunctions[opcodeName]
  opcodeFunction(reg, ...instruction.slice(1, 4))
}
console.log(reg[0])
