const chai = require('chai');
const expect = chai.expect;

let letters = ["d", "b", "a", "c"];

const insertionSort = (array) => {
  let insertionArray = array;

  for (var i = 1; i < insertionArray.length; i++) {
    var currentElement = insertionArray[i]; //Starting at index 1, inspect and store a copy of the current element, looping through all indexes starting at 1 in the array
        //Next, check through the sorted part of your array (starting at index 0) and compare it with the current element value, going from the right-most index to the left.
        //If the right-most element is larger than the current element, shift the right-most element (starting at index 0) to the right and store the current element being evaluated in the correct place
    for (var j = i - 1; j >= 0 && (insertionArray[j] > currentElement); j--) { //j will be equal to the current element you are evaluating minus 1 because you start at the right-most part of the "sorted" half of the array
        //If this right-most value (j) is greater or equal to 0, and it is greater than the current element you are evaluating, then...
        insertionArray[j + 1] = insertionArray[j]; //...Shift the number -- assign j to the the next index above j, because it is larger than the current element being evaluated
            // j+1 is the new index value of j element (the one that is larger than current element)
    }
    insertionArray[j + 1] = currentElement; //assign that space to the current element
  }
  return insertionArray;
}

insertionSort(letters);

export default insertionSort;
