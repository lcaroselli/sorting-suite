function mergeSort (array) {
  if (array.length === 1) {
    return array;
  } else {
    var midpoint = (array.length/2);

    var array1 = array.slice(0, midpoint);

    var array2 = array.slice(midpoint);

    return mergeArrays(mergeSort(array1), mergeSort(array2));
  }
}

function mergeArrays(array1, array2) {
  let sortedArray = [];

  while (array1.length > 0 && array2.length > 0)
    if (array1[0] <= array2[0]) {
      sortedArray.push(array1[0]);
      array1.shift();
    } else if (array2[0] <= array1[0]){
      sortedArray.push(array2[0]);
      array2.shift();
    }
    sortedArray.push(...array1, ...array2);
    return sortedArray;
}

export default mergeSort;
