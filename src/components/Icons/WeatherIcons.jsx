import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import cloudy from "./final/cloudy.png";
import haze from "./final/Haze.png";
import humidity from "./final/humidity.png";
import wind from "./final/wind.png";
import uv from "./final/UV.png";
import { Avatar } from "@mui/material";

// Define your weather icons object

const weatherIcons = {
  Sunny: (
    <div>
      <img
        src={cloudy}
        width="150" // Set your desired width
        height="500"
      />
    </div>
  ),
  Sunny2: (
    <div>
      <img src={cloudy} />
    </div>
  ),
  Moderate: "https://example.com/rainy-icon.png",
  Haze: (
    <div>
      <img
        src={haze}
        width="150" // Set your desired width
        height="500"
      />
    </div>
  ),
  Humidity: (
    <img
      src={humidity}
      width="100" // Set your desired width
      height="500"
    />
  ),
  Wind: (
    <img
      src={wind}
      width="150" // Set your desired width
      height="500"
    />
  ),
  Uv: (
    <img
      src={uv}
      width="240" // Set your desired width
      height="550"
    />
  ),

  // Add more weather conditions as needed
};

const WeatherIcon = ({ condition }) => {
  // Determine which icon to use based on weather condition
  const getWeatherIcon = (condition) => {
    const icon = weatherIcons[condition];
    if (!icon) {
      // Default icon if condition not found
      return (
        <Avatar alt="Weather" src="https://example.com/default-icon.png" />
      );
    }
    if (typeof icon === "string") {
      // URL-based icon
      return <Avatar alt={condition} src={icon} />;
    }
    // React component-based icon
    return icon;
  };

  return getWeatherIcon(condition);
};

export default WeatherIcon;
