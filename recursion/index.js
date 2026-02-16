import sumOfNumbers from "./sumOfNNumbers.js";
import factorialOfNNumber from "./findFactorial.js";
import printNumbersNinReverseOrder from "./printNNumbersInReverseusingRec.js";
import fibonacci from "./fibonacci.js";
import fun1 from "./practiceSets.js";
import sumOfArr from "./sumOfArr.js";
import reverseAString from "./reverseAString.js";
import decimalToBinary from "./decimalToBinary.js";
import sumOfDigits from "./sumOfDigits.js";

console.log("sumOfNumbers(3)", sumOfNumbers(3));

console.log("findFactorial(3)", factorialOfNNumber(5));

console.log(
  "Print Numbers in reverseOrder (4)",
  printNumbersNinReverseOrder(4)
);

console.log("fibonacci(4)", fibonacci(4));

console.log("fun1(4,3)", fun1(5, 2));

console.log("sum of arr", sumOfArr([1, 2, 3]));

console.log("sum of arr", reverseAString("Geeks for Geeks"));

console.log("Decimal To binary", decimalToBinary(10));

console.log("sumOfDigits", sumOfDigits(222));