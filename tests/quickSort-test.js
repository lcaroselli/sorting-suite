import { expect } from 'chai';
import quickSort from '../scripts/quickSort.js'
import generateRandomNumber from '../scripts/randomNumber.js';

describe('Quick Sort', () => {

  it ('should be a function', () => {
  expect(quickSort).be.function;
  });

  it ('should sort an array of alphanumeric values', () => {
    let alphabetArray = ['Y', 'B', 'H', 'A', 'S'];

    expect(quickSort(alphabetArray)).to.deep.equal(['A', 'B', 'H', 'S', 'Y']);
  });

  it ('should sort an array of numbers', () => {
    let numberArray = [23, 67, 8, 12, 2];

    expect(quickSort(numberArray)).to.deep.equal([2, 8, 12, 23, 67]);
  });

  it ('should sort a large data set', () => {
    let randomNumberArray = generateRandomNumber(1000);

    let sortedArray = [ ...randomNumberArray ].sort( (a, b) => a - b );

    expect(quickSort(randomNumberArray)).to.be.deep.equal(sortedArray);
  })
});
