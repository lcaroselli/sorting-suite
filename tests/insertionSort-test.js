import { expect } from 'chai';
import insertionSort from '../scripts/insertionSort.js'

describe('Insertion Sort with filter', () => {

  it.skip ('should be a function', () => {
  expect(insertionSort).be.function;
});

  it.skip ('should sort an array of alphanumeric values', () => {
    let alphabetArray = ['Y', 'B', 'H', 'A', 'S'];

    expect(insertionSort(alphabetArray)).to.deep.equal(['A', 'B', 'H', 'S', 'Y']);
  });

  it.skip ('should sort an array of numbers', () => {
    let numberArray = [23, 67, 8, 12, 2];

    expect(insertionSort(numberArray)).to.deep.equal([2, 8, 12, 23, 67]);
    });

  it.skip ('should sort a large data set of numbers', () => {
    let randomNumber = generateRandomNumber();
    let sorted = insertionSort(randomNumber);

    expect(sorted).to.deep.equal(randomNumber.sort());
  })
});
