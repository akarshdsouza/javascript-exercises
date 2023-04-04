const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * 5 / 9;
  const rounded = (value, precision) => {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
  return rounded(celsius, 1);
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp * (9 / 5)) + 32;
  const rounded = (value, precision) => {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
  return rounded(fahrenheit, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
