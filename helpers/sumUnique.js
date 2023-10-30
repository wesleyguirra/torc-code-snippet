/**
 * Calculates the sum of unique (non-repeated) values in an array.
 *
 * @param {number[]} nums - An array of numbers to be used for unique summation.
 * @returns {number} The sum of unique (non-repeated) values in the input array.
 *
 * @example
 * const numbers = [1, 2, 2, 3, 3, 4, 4, 5];
 * const result = sumUnique(numbers);
 * console.log(result); // Output will be 6 (sum of unique values [1, 5])
 */
const sumUnique = (nums) => {
  let sum = 0
  let repeated = {}

  for (let num of nums) {
    if (repeated[num]) {
      repeated[num] += 1
    } else {
      repeated[num] = 1
    }
    sum += num
  }

  for (let key of Object.keys(repeated)) {
    if (repeated[key] > 1) {
      sum -= repeated[key] * key
    }
  }

  return sum;
}

module.exports = sumUnique
