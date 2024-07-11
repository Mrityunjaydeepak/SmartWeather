import React, { useEffect, useRef, useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Description, Visibility } from "@mui/icons-material";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { BsCloudHaze2Fill } from "react-icons/bs";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import WeatherIcon from "../Icons/WeatherIcons";
import Chart from "../Chart/Chart";
import LineChart from "../Chart/LineChart";
import { SearchRounded } from "@mui/icons-material";
import TempAreaChart from "../Chart/TempAreaChart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Forecast() {
  const inputRef = useRef();
  const [forecastData, setForcastData] = useState(false);
  const search1 = async (cityName) => {
    try {
      const url1 = `http://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_APP_ID2
      }&q=${cityName}&days=7`;

      const response2 = await fetch(url1);
      const dataForecast = await response2.json();
      console.log(forecastData);

      setForcastData({
        name: dataForecast.location.name,
        avgTempC1: dataForecast.forecast.forecastday[0].day.avgtemp_c,
        avgTempC2: dataForecast.forecast.forecastday[1].day.avgtemp_c,
        avgTempC3: dataForecast.forecast.forecastday[2].day.avgtemp_c,
        avgTempC4: dataForecast.forecast.forecastday[3].day.avgtemp_c,
        avgTempC5: dataForecast.forecast.forecastday[4].day.avgtemp_c,
        avgTempC6: dataForecast.forecast.forecastday[5].day.avgtemp_c,
        avgTempC7: dataForecast.forecast.forecastday[6].day.avgtemp_c,
        weathercondition:
          dataForecast.forecast.forecastday[0].day.condition.text,
        Uv: dataForecast.forecast.forecastday[0].day.uv,
        windSpeed: dataForecast.current.wind_kph,
        humidity1: dataForecast.current.humidity,
        humidity2: dataForecast.forecast.forecastday[1].hour[0].humidity,
        humidity3: dataForecast.forecast.forecastday[2].hour[0].humidity,
        humidity4: dataForecast.forecast.forecastday[3].hour[0].humidity,
        humidity5: dataForecast.forecast.forecastday[4].hour[0].humidity,
        pressure: dataForecast.current.pressure_mb,
        feelsLike: dataForecast.current.feelslike_c,
        headIndex: dataForecast.current.heatindex_c,
        visibility: dataForecast.current.vis_km,
        date1: dataForecast.forecast.forecastday[0].date,
        date2: dataForecast.forecast.forecastday[1].date,
        date3: dataForecast.forecast.forecastday[2].date,
        date4: dataForecast.forecast.forecastday[3].date,
        date5: dataForecast.forecast.forecastday[4].date,
        currTime: dataForecast.location.localtime,
        sunrise: dataForecast.forecast.forecastday[0].astro.sunrise,
        sunset: dataForecast.forecast.forecastday[0].astro.sunset,
      });

      // Create a new Date object from the localtime string
      const dateObj = new Date(forecastData.currTime);

      // Get hours and minutes from the date object
      const hours = dateObj.getHours();
      const minutes = dateObj.getMinutes();

      // Format hours and minutes to ensure they are always two digits
      const formattedHours = hours.toString().padStart(2, "0");
      const formattedMinutes = minutes.toString().padStart(2, "0");

      // Construct the time string in HH:mm format
      forecastData.currTime = `${formattedHours}:${formattedMinutes}`;
    } catch (error) {}
  };
  const dataArray = [
    {
      date: "Day 1",
      avgTempC: forecastData.avgTempC1,
    },
    {
      date: "Day 2",
      avgTempC: forecastData.avgTempC2,
    },
    {
      date: "Day 3",
      avgTempC: forecastData.avgTempC3,
    },
    {
      date: "Day 4",
      avgTempC: forecastData.avgTempC4,
    },
    {
      date: "Day 5",
      avgTempC: forecastData.avgTempC5,
    },
  ];
  const HumiddataArray = [
    {
      date: "Day 1",
      avgTempC: forecastData.humidity1,
    },
    {
      date: "Day 2",
      avgTempC: forecastData.humidity2,
    },
    {
      date: "Day 3",
      avgTempC: forecastData.humidity3,
    },
    {
      date: "Day 4",
      avgTempC: forecastData.humidity4,
    },
    {
      date: "Day 5",
      avgTempC: forecastData.humidity5,
    },
  ];

  useEffect(() => {
    search1("Haridwar");
  }, []);
  const WeatherBox = ({ children, bgColor, height, width }) => (
    <Box
      height={height}
      width={width}
      my={4}
      backgroundColor={bgColor}
      gap={2}
      p={2}
      sx={{
        border: "2px solid grey",
        boxShadow: 9,
        borderRadius: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  );
  const ForecastCard = ({ date, avgTempC, iconCondition }) => (
    <WeatherBox bgColor="#1B1B1D" height={350} width={150}>
      <div className="w-full text-center border-b-2 border-white">
        <h1 className="text-white text-xl mb-1 font-bold">{date}</h1>
      </div>
      <div className="flex justify-center items-center text-center my-1">
        <WeatherIcon condition={iconCondition} />
      </div>
      <div className="text-4xl font-bold text-white">{avgTempC}°C</div>
    </WeatherBox>
  );
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="min-h-screen bg-blue-200">
      <div className="flex justify-center items-center pt-3 border mx-8 mb-2  pb-3 rounded-full">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search City"
          className="rounded-full text-center w-96 h-9 text-gray-400 font-extrabold "
          autoComplete="true"
        />
        <button
          className="rounded-full p-1 mx-2 bg-white border w-16"
          onClick={() => search1(inputRef.current.value)}
        >
          <SearchRounded />
        </button>
      </div>

      <div className="flex  lg:justify-between lg:mx-10 md:justify-center md:mx-18 sm:items-center gap-4">
        <div className="flex justify-start items-start text-black ">
          <Box
            height={350}
            width={450}
            my={2}
            backgroundColor="#BBD7EC"
            p={2}
            sx={{
              border: "2px solid grey",
              boxShadow: 9,
              borderRadius: "40px",
            }}
          >
            <div className="flex flex-col">
              <div className="text-4xl flex flex-col">
                <div className="mb-4 font-bold text-center">
                  {forecastData.name}
                </div>
                <div className="flex justify-between">
                  <div>{forecastData.weathercondition}</div>
                </div>
              </div>
              <div className="text-xl font-bold">
                <h1 className="text-4xl grid grid-rows-1 grid-cols-2 gap-5">
                  <div>{forecastData.avgTempC1} °C</div>
                  <div>
                    <WeatherIcon condition="Sunny" />
                  </div>
                </h1>
              </div>
              <div className="text-xl grid grid-cols-2 grid-rows-2">
                <span className="flex">
                  Feels Like:
                  <span className="flex font-bold">
                    {forecastData.feelsLike}°C
                  </span>
                </span>
                <span>
                  Pressure:
                  <span className="font-bold">{forecastData.pressure}MB</span>
                </span>
                <span className="flex">
                  Sunrise:
                  <span className="flex font-bold">{forecastData.sunrise}</span>
                </span>
                <span className="flex">
                  Sunset:
                  <span className="flex font-bold">{forecastData.sunset}</span>
                </span>
              </div>
            </div>
          </Box>
        </div>

        <div className="grid grid-cols-5 gap-x-8">
          {[1, 2, 3, 4, 5].map((day) => (
            <Box
              key={day}
              height={350}
              width={150}
              my={2}
              backgroundColor="#1B1B1D"
              p={2}
              sx={{
                border: "2px solid grey",
                boxShadow: 9,
                borderRadius: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className="w-full text-center border-b-2 border-white">
                <h1 className="text-white text-xl mb-1 font-bold">
                  {forecastData[`date${day}`]}
                </h1>
              </div>
              <div className="flex justify-center items-center text-center my-2">
                <WeatherIcon condition="Sunny" />
              </div>
              <div className="text-4xl font-bold text-white">
                {forecastData[`avgTempC${day}`]}°C
              </div>
            </Box>
          ))}
        </div>

        <div>
          <Box
            height={400}
            width={700}
            my={4}
            mx={1}
            backgroundColor="#1B1B1D"
            p={2}
            sx={{
              border: "2px solid grey",
              boxShadow: 9,
              borderRadius: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Chart chartdata={dataArray} />
          </Box>
        </div>
      </div>

      <div className="flex justify-between mx-16 mt-1 ">
        <div className="grid grid-cols-2 grid-rows-2 gap-x-3 mb-8">
          {[
            {
              label: "Humidity",
              icon: "Humidity",
              value: `${forecastData.humidity2}%`,
              color: "text-blue-600",
            },
            {
              label: "Visibility",
              icon: "Haze",
              value: `${forecastData.visibility} Km`,
              color: "text-gray-400",
            },
            {
              label: "Wind Status",
              icon: "Wind",
              value: `${forecastData.windSpeed} Km/h`,
              color: "text-gray-400",
            },
            {
              label: "UV Index",
              icon: "Uv",
              value: `${forecastData.Uv} UV`,
              color: "text-gray-400",
            },
          ].map((item) => (
            <Box
              key={item.label}
              height={250}
              width={350}
              my={0}
              backgroundColor="#1B1B1D"
              p={2}
              sx={{
                border: "2px solid grey",
                boxShadow: 9,
                borderRadius: "40px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 className="text-2xl text-white">{item.label}</h1>
              <div className={`text-9xl ${item.color}`}>
                <WeatherIcon condition={item.icon} />
              </div>
              <div className="text-3xl text-white mt-4">{item.value}</div>
            </Box>
          ))}
        </div>

        <div className="flex">
          <Box
            height={480}
            width={700}
            my={4}
            backgroundColor="#1B1B1D"
            p={1}
            pt={6}
            sx={{
              border: "2px solid grey",
              boxShadow: 9,
              borderRadius: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <LineChart chartData={HumiddataArray} />
          </Box>
        </div>
        <div
          className="flex
         items-center"
        >
          <Box
            height={280}
            width={500}
            my={4}
            backgroundColor="#1B1B1D"
            p={1}
            pt={6}
            sx={{
              border: "2px solid grey",
              boxShadow: 9,
              borderRadius: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TempAreaChart data={dataArray} />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Forecast;
