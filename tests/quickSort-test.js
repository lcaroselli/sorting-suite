import { expect } from 'chai';
import quickSort from '../scripts/quickSort.js'

describe('Quick Sort with filter', () => {

  it.skip  ('should be a function', () => {
  expect(quickSort).be.function;
});

  it.skip  ('should sort an array of alphanumeric values', () => {
    let alphabetArray = ['Y', 'B', 'H', 'A', 'S'];

    expect(quickSort(alphabetArray)).to.deep.equal(['A', 'B', 'H', 'S', 'Y']);
  });

  it.skip  ('should sort an array of numbers', () => {
    let numberArray = [23, 67, 8, 12, 2];

    expect(quickSort(numberArray)).to.deep.equal([2, 8, 12, 23, 67]);
    });

  it.skip ('should sort a large data set of numbers', () => {
    let randomNumber = generateRandomNumber();
    let sorted = quickSort(randomNumber);

    expect(sorted).to.deep.equal(randomNumber.sort());
  })
});
