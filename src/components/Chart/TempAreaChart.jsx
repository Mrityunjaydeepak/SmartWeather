// TempAreaChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function TempAreaChart({ data }) {
  const chartData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Average Temperature (°C)",
        data: data.map((item) => item.avgTempC),
        fill: true,
        backgroundColor: "rgba(255,154,0,0.2)",
        borderColor: "rgba(255,83,73,1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Temperature (°C)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default TempAreaChart;
