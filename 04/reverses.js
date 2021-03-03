// Your code here.

function reverseArray(array) {
  let result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

function reverseArrayInPlace(array) {
  const { length } = array;
  for (let i = length - 1; i >= length / 2; i--) {
    const firstIndex = length - 1 - i;
    const aux = array[firstIndex];
    array[firstIndex] = array[i];
    array[i] = aux;
  }
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
