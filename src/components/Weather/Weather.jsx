import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Description, Visibility } from "@mui/icons-material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { BsCloudHaze2Fill } from "react-icons/bs";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Weather() {
  const [weatherData, setWeatherData] = useState(false);

  // const allIcons = {
  //   // "01d":clear_icon,
  //   // "01n":clear_icon,
  //   // "02d":cloud_icon,
  // };
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;

      const response = await fetch(url);
      const data = await response.json();

      console.log(data);

      //   const icon = allIcons[data.weather[0].icon] || clear_icon;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        temperatureMin: Math.floor(data.main.temp_min),
        temperatureMax: Math.floor(data.main.temp_max),
        dt: data.dt,
        location: data.name,
        pressure: data.main.pressure,
        description: data.weather[0].description,
        visibility: data.visibility,
        time: data.timezone,
        icon: data.icon,
      });
    } catch (error) {}
  };

  useEffect(() => {
    search("haridwar");
  }, []);
  const time = weatherData.time;
  return (
    <>
      <div className="h-screen bg-backg">
        {/* <WeatherWidget /> */}
        <div className="flex lg:justify-start lg:mx-16 md:justify-center md:mx-18 sm:items-center gap-4">
          <div className="flex justify-start items-start text-black">
            <Box
              height={350}
              width={350}
              my={4}
              display="flex"
              alignItems="center"
              backgroundColor="#BBD7EC"
              gap={4}
              p={2}
              sx={{
                border: "2px solid grey",
                boxShadow: 9,
                borderRadius: "40px",
              }}
            >
              <div className="flex flex-col">
                <div className="text-3xl flex flex-col">
                  <div>{weatherData.time}</div>
                  <div>{weatherData.location} </div>{" "}
                  <div>{weatherData.description}</div>
                </div>
                <div className="texl-xl flex font-bold justify-center ">
                  <h1 className="text-8xl">{weatherData.temperature}°C</h1>
                </div>
                <div className="text-xl flex flex-col justify-between">
                  <span className="flex">
                    Humidity:
                    <span className="flex">{weatherData.humidity}%</span>
                  </span>

                  <span>
                    Pressure: <span>{weatherData.pressure}MB</span>
                  </span>
                </div>
              </div>
            </Box>
          </div>
          {/* Forecast data */}
          <div className="">
            <Box
              height={350}
              width={350}
              my={4}
              display="flex"
              alignItems="center"
              backgroundColor="#BBD7EC"
              gap={4}
              p={2}
              sx={{
                border: "2px solid grey",
                boxShadow: 9,
                borderRadius: "40px",
              }}
            ></Box>
          </div>
        </div>
        <div className="flex justify-start mx-16">
          <div className=" grid grid-cols-2 grid-rows-2 gap-x-3 gap-y-2 ">
            <div className="flex flex-col">
              <Box
                height={250}
                width={350}
                my={0}
                display=""
                backgroundColor="#1B1B1D"
                alignItems=""
                gap={4}
                p={2}
                sx={{
                  border: "2px solid grey",
                  boxShadow: 9,
                  borderRadius: "40px",
                }}
              >
                <div className="flex flex-col justify-center items-center text-center">
                  <h1 className="text-2xl text-white ">Humidity</h1>
                  <div className="flex text-9xl text-blue-600 justify-center items-center">
                    <WiHumidity />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex text-white ">
                      {weatherData.humidity}%{" "}
                    </div>
                    <div className="flex"></div>
                  </div>
                </div>
              </Box>
            </div>
            <div>
              <Box
                height={250}
                width={350}
                my={0}
                display=""
                alignItems=""
                backgroundColor="#1B1B1D"
                gap={4}
                p={2}
                sx={{
                  border: "2px solid grey ",
                  boxShadow: 9,
                  borderRadius: "40px",
                }}
              >
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="flex justify-start">
                    <h1 className="text-2xl text-white ">Visibility</h1>
                  </div>
                  <div className="flex items-center justify-center text-9xl text-gray-400 text-bluecloud ">
                    {/* icon */}
                    <BsCloudHaze2Fill />
                  </div>
                </div>
                <div className="flex justify-between text-xl text-white ">
                  <h1>
                    {" "}
                    {weatherData.visibility} {" Km"}
                  </h1>
                </div>
              </Box>
            </div>
            <div>
              <Box
                height={250}
                width={350}
                my={0}
                display=""
                alignItems=""
                backgroundColor="#1B1B1D"
                gap={4}
                p={2}
                sx={{
                  border: "2px solid grey",
                  boxShadow: 9,
                  borderRadius: "40px",
                }}
              >
                <div className="flex flex-col justify-center items-center text-center">
                  <div className="flex justify-start">
                    <h1 className="text-2xl text-white ">Wind Status</h1>
                  </div>
                  <div className="text-9xl text-gray-400">
                    <FaWind />
                  </div>
                  <div className="texl-xl">
                    <h1 className="text-3xl text-white ">
                      {weatherData.windSpeed} Km/h{" "}
                    </h1>{" "}
                  </div>
                </div>
              </Box>
            </div>
            <div>
              <Box
                height={250}
                width={350}
                my={0}
                display="flex"
                alignItems="center"
                backgroundColor="#1B1B1D"
                gap={4}
                p={2}
                sx={{
                  border: "2px solid grey",
                  boxShadow: 9,
                  borderRadius: "40px",
                }}
              ></Box>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;
