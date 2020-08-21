function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(leftArr, rightArr) {
  let sorted = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sorted.push(findMinAndRemoveSorted(leftArr));
    } else {
      sorted.push(findMinAndRemoveSorted(rightArr));
    }
  }
  return [...sorted, ...leftArr, ...rightArr];
}

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let midpoint = Math.floor(array.length / 2);
  let leftArr = array.slice(0, midpoint);
  let rightArr = array.slice(midpoint);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
