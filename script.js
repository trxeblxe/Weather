async function getWeather() {
  const location = document.getElementById("locationInput").value.trim();
  const apiKey = "0fafaa02035f409b8c7141035252204";
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

  const resultBox = document.getElementById("weatherResult");
  resultBox.innerHTML = "⏳ Loading...";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      resultBox.innerHTML = `❌ Error: ${data.error.message}`;
    } else {
      const temp = data.current.temp_c;
      const condition = data.current.condition.text;
      resultBox.innerHTML = `
        🌍 <strong>${data.location.name}</strong><br/>
        🌡️ <strong>${temp}°C</strong><br/>
        🌥️ <strong>${condition}</strong>
      `;
    }
  } catch (error) {
    resultBox.innerHTML = "❌ Unable to fetch data. Try again.";
  }
}
