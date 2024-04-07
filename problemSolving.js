// 1.  Explain the concept of prime numbers and write a function to check if a given number is prime.

Definition: "The given number which is only divisible by 1 or itself & gives the remainder as 0.";

function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i = i + 2) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
let n = 127;
console.log(isPrime(n)); // output true

// 2. Write a function to find the largest element in an array.

// using inbuild function
const arr1 = [10, 0, 20, 50, 40, 80, 100, 90, 120, 200];
console.log(Math.max(...arr1)); // output 200

// using without inbuild function
function largestNum(arr) {
  if (arr.length == 0) return null;
  let largestElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      largestElement = arr[i];
    }
  }
  return largestElement;
}
console.log(largestNum([-10, -3, -5, -7])); // output -3

// 3. Write a function to find the second largest element in an array.

function secondLargestNum(a2) {
  let firstLargestNum = Math.max(...a2);
  let index = a2.indexOf(firstLargestNum);
  a2.splice(index, 1);
  return Math.max(...a2);
}
const arr2 = [10, 20, 30, 40, 50, 60, 90, 100, 500];
console.log(secondLargestNum(arr2)); // output 100

// 4. Write a function to find the nth Fibonacci number using iteration.

function fibonacciSeries(num) {
  let a = 0;
  let b = 1;
  let res = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 0; j < i; j++) {
      res += " " + b;
      let temp = a + b;
      a = b;
      b = temp;
    }
    res += "\n";
  }
  return res;
}
let num = 4;
console.log(fibonacciSeries(num));

//output
//  1
//  1 2
//  3 5 8
//  13 21 34 55

// 5. Write a function to calculate the factorial of a number using iteration.

function factorialSeries(num) {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res *= i;
  }
  return res;
}
let factorial = 5;
console.log(factorialSeries(factorial)); // output 120
