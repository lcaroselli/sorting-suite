var chai = require('chai');
var expect = chai.expect;

let letters = ['d', 'b', 'a', 'c'];

const bubbleSort = (array) => {

  let bubbleArray = array;

  bubbleArray.forEach(function(val, i, array) {
    for (let j = 0; j < bubbleArray.length - 1; j++ ) {
      bubbleArray[j] > bubbleArray[j + 1] ? [bubbleArray[j], bubbleArray[j + 1]] = [bubbleArray[j + 1], bubbleArray[j]] : [];
    }
  })

  return bubbleArray;
}

bubbleSort(letters);

export default bubbleSort;
