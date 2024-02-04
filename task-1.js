//  Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(celsiusNumber) {
  let f = celsiusNumber * (9 / 5) + 32;
  return f;
}

let fahrenheitResult = celsiusToFahrenheit(10);
console.log(fahrenheitResult);
