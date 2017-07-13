import { expect } from 'chai';
import mergeSort from '../scripts/mergeSort.js'
import generateRandomNumber from '../scripts/randomNumber.js';

describe('Merge Sort', () => {

  it ('should be a function', () => {
  expect(mergeSort).be.function;
  });

  it ('should sort an array of alphanumeric values', () => {
    let alphabetArray = ['Y', 'B', 'H', 'A', 'S'];

    expect(mergeSort(alphabetArray)).to.deep.equal(['A', 'B', 'H', 'S', 'Y']);
  });

  it ('should sort an array of numbers', () => {
    let numberArray = [23, 67, 8, 12, 2];

    expect(mergeSort(numberArray)).to.deep.equal([2, 8, 12, 23, 67]);
  });

  it ('should sort a large data set', () => {
    let randomNumberArray = generateRandomNumber(10000);

    let sortedArray = [ ...randomNumberArray ].sort( (a, b) => a - b );

    expect(mergeSort(randomNumberArray)).to.be.deep.equal(sortedArray);
  })
});
