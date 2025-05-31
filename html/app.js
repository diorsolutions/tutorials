function forPlus(a, b) { return a + b }
function forMinus(a, b) { return a - b }
function forMultiply(a, b) { return a * b }
function forDivide(a, b) { return a / b }

//fix this problem: 9 + 2 / 6 - 1 * 4

console.log(forPlus(9, forDivide(2, forMinus(6, forMultiply(1, 4)))));

// fix this problem: 9 + 2 / 9 - 1 * 4 + 3

console.log(forPlus(9, forDivide(2, forMinus(9, forMultiply(1, 4)))))
