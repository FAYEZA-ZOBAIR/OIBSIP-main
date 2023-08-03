function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelect = document.getElementById('unitSelect').value;
    let convertedTemperature = '';
  
    if (isNaN(temperatureInput)) {
      alert('Please enter a valid number for temperature.');
      return;
    }
  
    const temperature = parseFloat(temperatureInput);
  
    switch (unitSelect) {
      case 'celsius':
        convertedTemperature = `${temperature} °C = ${celsiusToFahrenheit(temperature)} °F / ${celsiusToKelvin(temperature)} K`;
        break;
      case 'fahrenheit':
        convertedTemperature = `${temperature} °F = ${fahrenheitToCelsius(temperature)} °C / ${fahrenheitToKelvin(temperature)} K`;
        break;
      case 'kelvin':
        convertedTemperature = `${temperature} K = ${kelvinToFahrenheit(temperature)} °F / ${kelvinToCelsius(temperature)} °C`;
        break;
      default:
        break;
    }
  
    document.getElementById('resultContainer').innerText = convertedTemperature;
  }
  
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }
  
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
  }
  
  function kelvinToFahrenheit(kelvin) {
    return (kelvin * 9/5) - 459.67;
  }
  
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  