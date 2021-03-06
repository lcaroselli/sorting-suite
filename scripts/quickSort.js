const quickSort = (array) => {

  if (array.length < 2) {
    return array;
  } else {
    var pivot = array[array.length - 1];

    var left = [];

    var right = [];

    for ( var i = 0; i < array.length - 1; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

export default quickSort;
