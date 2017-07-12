import { expect } from 'chai';
import mergeSort from '../scripts/mergeSort.js'

describe('Merge Sort with filter', () => {

  it.skip  ('should be a function', () => {
  expect(mergeSort).be.function;
});

  it.skip  ('should sort an array of alphanumeric values', () => {
    let alphabetArray = ['Y', 'B', 'H', 'A', 'S'];

    expect(mergeSort(alphabetArray)).to.deep.equal(['A', 'B', 'H', 'S', 'Y']);
  });

  it.skip  ('should sort an array of numbers', () => {
    let numberArray = [23, 67, 8, 12, 2];

    expect(mergeSort(numberArray)).to.deep.equal([2, 8, 12, 23, 67]);
    });

  it.skip ('should sort a large data set of numbers', () => {
    let randomNumber = generateRandomNumber();
    let sorted = mergeSort(randomNumber);

    expect(sorted).to.deep.equal(randomNumber.sort());
  })
});
