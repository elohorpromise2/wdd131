// Footer dates
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values matching displayed content
const temperature = 25; // °C
const windSpeed = 10; // km/h

function calculateWindChill(temp, wind) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

let windChillDisplay = document.getElementById("windChill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChillDisplay.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`;
} else {
  windChillDisplay.textContent = "N/A";
}
