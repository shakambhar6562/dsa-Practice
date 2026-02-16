const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
};

export default fibonacci;

// 0 1 1 2

/*
fibonacci(4)
1 -> fibonacci(3)


*/
