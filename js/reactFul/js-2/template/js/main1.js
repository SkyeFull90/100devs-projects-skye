// write pseudocode here
// 0 -> 32
// just for console now
const readline = require('readline');

// Create interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Function to convert Celsius to Kelvin
function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

// Function to convert Kelvin to Celsius
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

// Function to convert Fahrenheit to Kelvin
function fahrenheitToKelvin(fahrenheit) {
  return (fahrenheit + 459.67) * 5/9;
}

// Function to convert Kelvin to Fahrenheit
function kelvinToFahrenheit(kelvin) {
  return (kelvin * 9/5) - 459.67;
}

// Function to ask for user input and perform temperature conversion
function convertTemperature() {
  rl.question("Enter the temperature: ", temperature => {
    const parsedTemperature = parseFloat(temperature);

    if (isNaN(parsedTemperature)) {
      console.log("Invalid input. Please enter a valid number.");
      rl.close();
      return;
    }

    rl.question("Enter the unit of the temperature (C, F, K): ", unit => {
      const fromUnit = unit.toUpperCase();

      let convertedTemperature;

      if (fromUnit === "C") {
        convertedTemperature = {
          Fahrenheit: celsiusToFahrenheit(parsedTemperature),
          Kelvin: celsiusToKelvin(parsedTemperature)
        };
      } else if (fromUnit === "F") {
        convertedTemperature = {
          Celsius: fahrenheitToCelsius(parsedTemperature),
          Kelvin: fahrenheitToKelvin(parsedTemperature)
        };
      } else if (fromUnit === "K") {
        convertedTemperature = {
          Celsius: kelvinToCelsius(parsedTemperature),
          Fahrenheit: kelvinToFahrenheit(parsedTemperature)
        };
      } else {
        console.log("Invalid unit. Please enter C, F, or K.");
        rl.close();
        return;
      }

      console.log(parsedTemperature + " " + fromUnit + " is equal to:");
      for (let unit in convertedTemperature) {
        console.log(convertedTemperature[unit] + " " + unit);
      }

      rl.close();
    });
  });
}

// Call the function to start the temperature conversion
module.exports = convertTemperature();




