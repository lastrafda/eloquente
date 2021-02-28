function countBs(text) {
  return countChar(text, "B");
}

function countChar(text, target) {
  let targetCount = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === target) {
      targetCount++;
    }
  }
  return targetCount;
}

console.log(countBs("BBC")); // 2
console.log(countChar("kakkerlak", "k")); // 4
