var chai = require('chai');
var expect = chai.expect;

let letters = ['D', 'A', 'F', 'J', 'C', 'B'];

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
console.log (letters);


export default bubbleSort;


// if (bubbleArray[j] > bubbleArray[j + 1]) {
//   [bubbleArray[j], bubbleArray[j + 1]] = [bubbleArray[j + 1], bubbleArray[j]];
