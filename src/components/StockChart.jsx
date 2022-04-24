import React from 'react';
import { Chart,Bar} from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import randomColor from "randomcolor";
const StockChart = (props) => {
    const data = []
    var today = new Date()
    var label = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(); 
    Object.entries(props.stocks).map(([key,value]) => {
        let color = randomColor();
        data.push({
            label: key,
            data: value,
            backgroundColor: color
        })
    })
    const chartData = {
        labels: [label],
        datasets:data,
    }
    return (
    <div>
    {data[0] &&
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Stock Prices Over time"
            },
            legend: {
              display: true,
              position: "bottom",
           },
          }
        }}
      />}
    </div>
    );
};

export default StockChart;