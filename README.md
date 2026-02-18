# 🌤️ WeatherApp

A responsive web application that delivers real-time weather data for any city worldwide using the OpenWeather API, featuring interactive charts and statistical analysis.

---

## 📖 About

WeatherApp uses **AJAX** to send asynchronous POST requests with the user's input city name to the OpenWeather API. The response mode is set to **XML** and units to **Metric** for Celsius-based readings. The XML response — structured with `<location>`, `<meta>`, and `<forecast>` as main tags — is parsed to extract key weather information, which is then displayed in a well-structured, interactive layout. The app also leverages **Chart.js** to visualize parsed weather data through **line and bar graphs**, providing statistical analysis of weather trends.

---

## ✨ Features

- **Real-Time Weather Data** — Get current weather conditions for any city worldwide
- **AJAX Requests** — Asynchronous POST requests for a smooth, non-blocking user experience
- **XML Parsing** — Extracts useful data from structured XML response (`<location>`, `<meta>`, `<forecast>`)
- **Metric Units** — Displays temperature in Celsius
- **Interactive Charts** — Line and bar graphs powered by Chart.js for statistical weather analysis
- **Responsive Design** — Mobile-friendly layout built with Bootstrap

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Page structure and layout |
| **CSS3** | Custom styling |
| **JavaScript** | Core logic, AJAX requests, and XML parsing |
| **Bootstrap** | Responsive design and UI components |
| **Chart.js** | Data visualization (line and bar graphs) |
| **OpenWeather API** | Weather data source (XML response) |

---

## 🚀 How It Works

1. User enters a **city name** in the search input
2. An **AJAX POST request** is sent to the OpenWeather API with `mode=xml` and `units=metric`
3. The API returns an **XML response** containing `<location>`, `<meta>`, and `<forecast>` tags
4. The app **parses the XML** and extracts relevant weather information (temperature, humidity, wind speed, etc.)
5. Weather data is displayed in a **clean, interactive layout**
6. **Chart.js** renders line and bar graphs for statistical analysis of the weather data

---

## 📂 Project Structure

```
WeatherApp/
├── bootstrap/
│   └── css/            # Bootstrap stylesheets
├── css/                # Custom CSS styles
├── img/                # Image assets
├── js/                 # JavaScript files (AJAX, XML parsing, Chart.js)
├── index.html          # Main HTML file
└── README.md
```

---

## 📊 Charts & Visualization

The app uses **Chart.js** to display weather statistics:

- **Line Graph** — Visualizes temperature trends and weather patterns
- **Bar Graph** — Compares weather metrics for easy statistical analysis

---

## 🏁 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Gurkaran2/WeatherApp.git
   ```
2. Open `index.html` in your browser
3. Enter a city name and explore the weather data!

---

## 📝 License

This project is open source and available for personal and educational use.
