const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let total = 0;
  array.forEach( x => {
    total += x;
  });
  return total;
};

const multiply = function(array) {
  let total = 1;
  array.forEach( x => {
    total *= x;
  });
  return total;
};

const power = function(base, power) {
  let total = 1;
	for (let i = 1; i <= power; i++) {
    total *= base;
  }
  return total;
};

const factorial = function(num) {
  let fact = 1;
  for(i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
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
