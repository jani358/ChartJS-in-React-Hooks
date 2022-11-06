import './App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,

}from "chart.js";
import { Bar} from "react-chartjs-2";
import React, {useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

const [chartOptions, setChartOptions] = useState({});

useEffect(() => {
  setChartData({
    labels: ["Janindu","Chathura","Ravindu","Kamal"],
    datasets: [
      {
        label: "Whom'st let the dogs out",
        data: [500,450,700,120,720],
        borderColor: "rgb(53,162,235)",
        backgroundColor: "black",
      },
    ],
  });
  setChartOptions({
    responsive: true,
    Plugins: {
      Legend: {
        position: "top"
      },
      title: {
        display: true,
        color: "red",
        text: "Whom'st let the dogs out",
      },
    },
  });
}, []);


  return (
    <div className="App">
      <Bar options={chartOptions} data={chartData}/>
  
    </div>
  );
}

export default App;
