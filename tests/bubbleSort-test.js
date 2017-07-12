import { expect } from 'chai';
import bubbleSort from '../scripts/bubbleSort.js';
import generateRandomNumber from '../scripts/randomNumber.js';

describe('Bubble Sort with filter', () => {

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
    let randomNumber = generateRandomNumber(800);
    let sorted = bubbleSort(randomNumber);

    expect(sorted).to.deep.equal(randomNumber);
  })

});
