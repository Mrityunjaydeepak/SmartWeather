# Smart Weather app

This project is a responsive weather dashboard built using React and Tailwind CSS. It fetches weather data from the WeatherAPI and displays the forecast for the next seven days, along with other relevant weather information.

## Project Structure

- **public/**: Contains static assets such as `index.html`.
- **src/**: Contains the source code for the application.
  - **components/**: Contains React components.
    - **Chart/**: Contains chart components for displaying weather data.
    - **Forecast/**: Contains the main `Forecast` component.
    - **Icons/**: Contains weather icon components.
  - **App.jsx**: The main application component.
  - **index.css**: Global CSS file.
  - **main.jsx**: Entry point for the React application.
- **.env**: Environment variables file.
- **package.json**: Contains project dependencies and scripts.
- **postcss.config.js**: Configuration for PostCSS.
- **tailwind.config.js**: Configuration for Tailwind CSS.
- **vite.config.js**: Configuration for Vite.

## Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard


2. **Install dependencies:**
Make sure you have Node.js and npm installed. Then, run: 'npm install'

3. **Set up Environment Varaibles**
Create a .env file in the root of the project and add your WeatherAPI key: VITE_APP_ID2=your_weatherapi_key


4. **Run the Dev Server**
npm run dev

This will start the application on http://localhost:5173.


 Additional Notes
Responsive Design: The application uses Tailwind CSS to ensure that the layout is responsive and works well on various screen sizes.
Weather API: The application fetches weather data from the WeatherAPI. Make sure you have a valid API key and include it in the .env file.
Charts: The application includes charts for displaying temperature and humidity trends over the forecast period.



```
