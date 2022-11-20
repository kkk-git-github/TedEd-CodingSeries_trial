/* eslint-disable require-jsdoc */

function fillArray(value, len) {
  // Create an array with 99 values that are false
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(value);
  }
  return arr;
}

fillArray(false, 99);
arr[99] = true;

function breakLock(array) {
  array[0];
  while (array[i] = false) {
    array[i] ++;
  }
  return array[i] = true;
}

console.log(breakLock(arr));
