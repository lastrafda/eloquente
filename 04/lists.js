function arrayToList(array) {
  const { length } = array;
  let list = null;
  for (let i = length - 1; i >= 0; i--) {
    const element = array[i];
    list = { value: element, rest: list };
  }
  return list;
}

function listToArray(list) {
  let output = [];
  for (let node = list; node; node = node.rest) {
    output.push(node.value);
  }
  return output;
}

function prepend(value, rest) {
  return { value, rest };
}

function nth(list, index) {
  //return listToArray(list)[index];
  if (list === null) {
    return undefined;
  }
  if (index === 0) {
    return list.value;
  }
  return nth(list.rest, index - 1);
}

console.log(arrayToList([10, 20, 30]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 0));
// → 20
