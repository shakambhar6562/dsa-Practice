function fun1(x, y) {
  if (x == 0) return y;
  else return fun1(x - 1, x + y);
}

/*
x-> 4
y-> 3

fun1(3,7)
fun1(2,10)
fun1(1.12)
fun1(0,13)

*/

export default fun1;
