/**
 * Sum array of numbers without considering the repeated numbers
 * @param {number[]} numbers - The array of numbers that will be used in the ∑* summation
 * @returns {number} - ∑* (sum of distinct values) of the input array
 *
 * @example
 * const numbers = [1, 2, 2, 3, 3, 4, 4, 5];
 * const result = distinctSum(numbers);
 * console.log(result); // Output will be 15 (∑* of [1, 2, 3, 4, 5])
 */
const distinctSum = (numbers) => {
  let sum = 0
  let seen = new Set()

  for (let number of numbers) {
    if (seen.has(number)) {
      sum += number
    } else {
      seen.add(number)
    }
  }

  return sum
}

module.exports = distinctSum
