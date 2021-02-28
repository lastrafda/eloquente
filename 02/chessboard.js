const generateBoard = (length) => {
  let output = "";
  const isEven = (n) => n % 2 === 0;
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= length; j++) {
      if (isEven(i + j)) {
        output += " ";
      } else {
        output += "#";
      }
    }
    output += "\n";
  }
  return output;
};

console.log(generateBoard(8));
