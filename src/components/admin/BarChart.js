import React from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJs } from 'chart.js/auto';
import { useGetUsersStatisticsQuery } from '../../store/users/usersApiSlice';

const BarChart = () => {
  const { data: statistics, error: errors } = useGetUsersStatisticsQuery();
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
        labels: statistics?.data?.map((stat) => stat.month).reverse(),
        datasets: [
          {
            label: 'Customer',
            data: statistics?.data?.map((stat) => stat.total).reverse(),
            backgroundColor: '#0D6AEC',
          },
        ],
      }}
    />
  );
};

export default BarChart;
