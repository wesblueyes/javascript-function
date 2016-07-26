'use strict'

/*
 * Write a function that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

const sum = () => {
  // YOUR CODE HERE
}

console.assert(sum(8, 11) === 19)
console.assert(sum(4, 100) === 104)

/*
 * Write a function that calculates the sum of all the numbers in an array
 */

const sumOfArray = (arr) => {
  var sum = 0
  // YOUR CODE HERE
  return sum
}

console.assert(sumOfArray([1, 2]) === 3)
console.assert(sumOfArray([]) === 0)
console.assert(sumOfArray([1, 2, 3]) === 6)
console.assert(sumOfArray([10, 9, 8]) === 27)

/**
 * Part 1
 *
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 * Hint: You can access the indivdual characters
 * of a string like an array: `str[0]`
 */

const reverse = (str) => {
  // YOUR CODE HERE
}

console.assert(reverse('books') === 'skoob')
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")

/*
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 * Hint: Strings have a function called: `split()`, look it up on MDN
 */

const findLongestWord = (sentence) => {
  // YOUR CODE HERE
}

console.assert(findLongestWord('book dogs') === 'book')
console.assert(findLongestWord("don't mess with Texas") === 'Texas')

/*
 * --- ADVENTURE MODE ---
 */

/*
 * Write a function that finds the Greatest Common Denominator of two numbers
 * - if no GCD exists, return 1
 */

const GCD = (a, b) => {
  // YOUR CODE HERE
}

console.assert(GCD(5, 1) === 1)
console.assert(GCD(15, 3) === 3)
console.assert(GCD(15, 5) === 5)
console.assert(GCD(50, 20) === 10)

/*
 * Write a function that prints out the Least Common Multiple of two numbers
 */

const LCM = (a, b) => {
  // YOUR CODE HERE
}

console.assert(LCM(10, 10) === 10)
console.assert(LCM(2, 5) === 10)
console.assert(LCM(3, 6) === 6)
console.assert(LCM(0, 1) === 1)
