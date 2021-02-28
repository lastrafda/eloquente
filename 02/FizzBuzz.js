const fizzBuzz = (limit) => {
  const divisibleBy = (n) => (ni) => ni % n === 0;
  // es COMPLETAMENTE innecesario pero quería ser fancy
  const divisibleByThree = divisibleBy(3);
  const divisibleByFive = divisibleBy(5);
  for (let n = 1; n <= limit; n++) {
    let output = "";
    if (divisibleByThree(n)) {
      output += "Fizz";
    }
    if (divisibleByFive(n)) {
      output += "Buzz";
    }
    console.log(output || n);
  }
};
fizzBuzz(15);
