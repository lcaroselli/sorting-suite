var chai = require('chai');
var expect = chai.expect;

let letters = ["d", "b", "a", "c"];

const quickSort = (array) => {

  if (array.length < 2) {
    return array;
  } else {

  var pivot = array[array.length - 1];
  var left = [];
  var right = [];

  for ( var i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
}
  return [...quickSort(left), pivot, ...quickSort(right)];
}

quickSort(letters);


export default quickSort;
