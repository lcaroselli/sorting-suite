import { expect } from 'chai';
import bubbleSort from '../scripts/bubbleSort.js';
import generateRandomNumber from '../scripts/randomNumber.js';

describe('Bubble Sort', () => {

  it ('should be a function', () => {
  expect(bubbleSort).be.function;
});

  it ('should sort an array of alphanumeric values', () => {
    let alphabetArray = ['Y', 'B', 'H', 'A', 'S'];

    expect(bubbleSort(alphabetArray)).to.deep.equal(['A', 'B', 'H', 'S', 'Y']);
  });

  it ('should sort an array of numbers', () => {
    let numberArray = [23, 67, 8, 12, 2];

    expect(bubbleSort(numberArray)).to.deep.equal([2, 8, 12, 23, 67]);
    });

  it ('should sort a large data set of numbers', () => {
    let randomNumberArray = generateRandomNumber(4000);

    let sortedArray = [ ...randomNumberArray ].sort( (a, b) => a - b );

    expect(bubbleSort(randomNumberArray)).to.be.deep.equal(sortedArray);
  })
});
