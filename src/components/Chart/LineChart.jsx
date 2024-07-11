import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required elements and plugins
ChartJS.register(LineElement, PointElement, Title, Tooltip, Legend);

const LineChart = ({ chartData }) => {
  const labels = chartData.map((day) => day.date);
  const humidityValues = chartData.map((day) => day.avgTempC);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Average Humidity (%)",
        data: humidityValues,
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "5-Day Humidity Forecast",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Humidity",
        },
      },
      x: {
        title: {
          display: true,
          text: "Days",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
