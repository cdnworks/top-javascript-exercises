const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
	let sum = 0;
  numbers.forEach(number => sum += number);
  return sum;
};

const multiply = function(numbers) {
  let product = 1;
  numbers.forEach(number => product *= number);
  return product;

};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	let product = 1;
  for(let i = 1; i <= number; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
