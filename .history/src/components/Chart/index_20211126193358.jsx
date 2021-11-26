import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React, {useEffect} from 'react'

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Options = {
  plugins: {
    tooltip: {
      enabled: false,
    }
  },
  cutout: '90%',
  responsive: true,
  maintainAspectRatio: false,
}

export const data = {
  labels: [],
  datasets: [
    {
      label: '',
      data: [12],
      backgroundColor: [
        'rgba(21, 163, 156,1)',
        'rgba(255, 255, 255, 0.2)',
        
      ],
      borderColor: [
        
      ],
      borderWidth: 1,
    },
  ],
};

export default function Chart() {
 return (
      <Doughnut data={data} options={Options} />
 )
}