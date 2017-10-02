function bubbleSort(array) {
  var length = array.length;

  do {
    for (var i = 0; i < length -1; i++) {
      if (array[i] > array[i + 1]) {
        var swapped = array[i];
        array[i] = array[i + 1];
        array[i + 1] = swapped;
      }
    }
  } while (length--);

  return array;
}

module.exports = bubbleSort
