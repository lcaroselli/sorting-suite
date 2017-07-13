const chai = require('chai');
const expect = chai.expect;

let letters = ["d", "b", "a", "c"];

const quickSort = (array) => {

  if (array.length < 2) {
    return array;
  } else {
    var pivot = array[array.length - 1]; //choosing the right-most element in the array, so that index

    var left = [];

    var right = [];

    for ( var i = 0; i < array.length - 1; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

quickSort(letters);

export default quickSort;
