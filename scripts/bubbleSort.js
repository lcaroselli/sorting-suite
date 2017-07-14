const bubbleSort = (array) => {

  let bubbleArray = array;

  bubbleArray.forEach(function(val, i, array) {
    for (let j = 0; j < bubbleArray.length - 1; j++ ) {
      if (bubbleArray[j] > bubbleArray[j + 1]) {
        [bubbleArray[j], bubbleArray[j + 1]] = [bubbleArray[j + 1], bubbleArray[j]]
      }
    }
  })
  return bubbleArray;
}

export default bubbleSort;
