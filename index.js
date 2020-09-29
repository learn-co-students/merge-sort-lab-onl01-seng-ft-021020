function findMinAndRemoveSorted(array){
  //find min and remove
   let min = array[0];
    let minIndex = 0;
    array.forEach((item, index) => {
        if (item < min){
            min = item;
            minIndex = index;
        }
    });
    array.splice(minIndex, 1);
    return min;
}

function merge(array1, array2) {
  //combine two sorted arrays into one sorted array
  let sorted = [];
    while(array1.length !== 0 && array2.length !== 0){
        if (array1[0] < array2[0]){
            sorted.push(array1[0]);
            array1.shift();
        } else {
            sorted.push(array2[0]);
            array2.shift();
        }
    }
    return sorted.concat(array1).concat(array2);
}

function mergeSort(array) {
  //implement previous functions, sort combined array
  let newArray = []

  while (array.length !== 0) {
    newArray.push(findMinAndRemoveSorted(array))
  }
  return newArray
}
