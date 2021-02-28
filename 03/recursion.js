function isEven(n) {
  if (n === 0) {
    return true;
  }
  if (n === 1 || n === -1) {
    return false;
  }
  return n > 0 ? isEven(n - 2) : isEven(n + 2);
}

console.log(isEven(3)); // false
console.log(isEven(50)); // true
console.log(isEven(75)); //false
console.log(isEven(-1)); //false
console.log(isEven(-2)); //true
console.log(isEven(-54)); //true
console.log(isEven(-13)); //false
