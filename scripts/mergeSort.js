var chai = require('chai');
var expect = chai.expect;

let letters = ["d", "b", "a", "c"];

function mergeSort (array) {
  if (array.length === 1) {
    return array;
  } else {
    var midpoint = (array.length/2);

    var array1 = array.slice(0, midpoint); //The slice() method returns a shallow copy of a portion of an array into a new array object -- Zero-based index at which to begin extraction. Start at 0 and slice to the midpoint

    var array2 = array.slice(midpoint); //slice from the midpoint to the end - begin at the midpoint to the end

    return mergeArrays(mergeSort(array1), mergeSort(array2));
      //slice does not alter the original array. It returns a shallow copy of elements from the original array. Elements of the original array are copied into the returned array
      //mergeArrays is returning a sortedArray - so the copies will be placed in there
  }
}

function mergeArrays(array1, array2) {
  let sortedArray = [];

  while (array1.length > 0 && array2.length > 0) { //while both array's have at least 1 element...
    if (array1[0] <= array2[0]) { //if array1's partition is less than or equal to array 2's partition, then...
      sortedArray.push(array1[0]); //push array1's partition into the sorted array, and...
      array1.shift(); //shift the element out of array1 so a new element can be 'copied'
    } else if (array2[0] <= array1[0]){ //same logic as above, but for the case that array 2's partition is less than or equal to array 1's partition
      sortedArray.push(array2[0]);
      array2.shift();
    }
  }
    sortedArray.push(...array1, ...array2); //WHAT IS THIS PART DOING? PUSHING THE REST IN?
    return sortedArray;
}

mergeSort(letters);

export default mergeSort;
