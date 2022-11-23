import React from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJs } from 'chart.js/auto';

const BarChart = () => {
  return (
    <Bar
      options={{
        scales: {
          x: {
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      }}
      data={{
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'Mei',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Des',
        ],
        datasets: [
          {
            label: 'Customer',
            data: [12, 13, 45, 11, 11, 11, 11, 11, 4, 5, 15, 87],
            backgroundColor: '#0D6AEC',
          },
        ],
      }}
    />
  );
};

export default BarChart;
