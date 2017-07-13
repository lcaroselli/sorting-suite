const chai = require('chai');
const expect = chai.expect;

let letters = ["d", "b", "a", "c"];

const insertionSort = (array) => {
  let insertionArray = array;

  for (var i = 1; i < insertionArray.length; i++) {
    var currentElement = insertionArray[i];
    for (var j = i - 1; j >= 0 && (insertionArray[j] > currentElement); j--) {
        insertionArray[j + 1] = insertionArray[j];
    }
    insertionArray[j + 1] = currentElement;
  }
  return insertionArray;
}

insertionSort(letters);

export default insertionSort;
