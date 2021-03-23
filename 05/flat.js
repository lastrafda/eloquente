let arrays = [[1, 2, 3], [4, 5], [6]];

const a = arrays.reduce((acc, curr) => acc.concat(curr), []);
console.log(a);
