const SCRIPTS = require("./script");

function filter(array, test) {
  let passed = [];
  for (const element of array) {
    if (test(element)) {
      passed.push(element);
    }
  }
  return passed;
}
console.log(filter(SCRIPTS, (script) => script.living)[0]);

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let rtlScripts = SCRIPTS.filter((s) => s.direction == "rtl");
console.log(map(rtlScripts, (s) => s.name).slice(0, 2));
// → ["Adlam", "Arabic", "Imperial Aramaic", …]

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 1));
// → 10
// obtiene la cantidad de caracteres de un item script
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}
// obtiene el script con mayor cantidad de caracteres
console.log(
  SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  })
);
// → {name: "Han", …}

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(
  Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
);
// → 1165
console.log(
  Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
);
// → 204
