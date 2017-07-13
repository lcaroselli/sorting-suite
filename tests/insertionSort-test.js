import { expect } from 'chai';
import insertionSort from '../scripts/insertionSort.js'
import generateRandomNumber from '../scripts/randomNumber.js';

describe('Insertion Sort', () => {

  it ('should be a function', () => {
  expect(insertionSort).be.function;
  });

  it ('should sort an array of alphanumeric values', () => {
    let alphabetArray = ['Y', 'B', 'H', 'A', 'S'];

    expect(insertionSort(alphabetArray)).to.deep.equal(['A', 'B', 'H', 'S', 'Y']);
  });

  it ('should sort an array of numbers', () => {
    let numberArray = [23, 67, 8, 12, 2];

    expect(insertionSort(numberArray)).to.deep.equal([2, 8, 12, 23, 67]);
  });

  it ('should sort a large data set', () => {
    let randomNumberArray = generateRandomNumber(10000);

    let sortedArray = [ ...randomNumberArray ].sort( (a, b) => a - b );

    expect(insertionSort(randomNumberArray)).to.be.deep.equal(sortedArray);
  })
});
