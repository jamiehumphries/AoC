d = a;
c = 14;
b = 182;
d += b * c; b = 0; c = 0;




a = d;

b = a;
a = 0;
c = 2;
if (b) jump(2);
jump(6);
b--;
c--;
if (c) jump(-4);
a++;
jump(-7);
b = 2;
b -= c; c = 0;





out(b);
if (a) jump(-19);
jump(-21);