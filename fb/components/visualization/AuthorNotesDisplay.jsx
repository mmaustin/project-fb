'use client'

import { useState, useEffect } from "react";
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, BarElement, DoughnutController } from "chart.js";

ChartJS.register(
  ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, BarElement, DoughnutController
);

const AuthorNotesDisplay = ({ authorsNotes }) => {

  const countObj = { musing: 0, character: 0, plot: 0, setting: 0 };

  authorsNotes.map(note => {
    if (note.noteCategory === 'Musings') {
      countObj['musing'] += 1;
    };
    if (note.noteCategory === 'Character') {
      countObj['character'] += 1;
    };
    if (note.noteCategory === 'Plot') {
      countObj['plot'] += 1;
    };
    if (note.noteCategory === 'Setting') {
      countObj['setting'] += 1;
    };
  });

  //console.log(countObj);

  const noteData = {
    labels: [
      'Musing',
      'Character',
      'Plot',
      'Setting'
    ],
    datasets: [{
      label: 'Category Count',
      data: [countObj.musing, countObj.character, countObj.plot, countObj.setting],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)',
        'rgb(160,32,240)'
      ],
      hoverOffset: 4,
    }]
  };

  // const [chartData, setChartData] = useState({
  //   datasets: [],
  // });

  // const [chartOptions, setChartOptions] = useState({});

  // useEffect(() => {
  //   setChartData({
  //     labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  //     datasets: [
  //       {
  //         label: 'Sales $',
  //         data: [1812, 9876, 8987, 3987, 8765, 9263, 1234],
  //         borderColor: 'rgb(54,162,235)',
  //         backgroundColor: 'rgb(53,162,235,0.4)',
  //       }
  //     ]
  //   })
  // }, [])

  return (
    <div className="w-1/2 h-1/2">
      <div>Author Notes Display</div>
      {/* options={chartOptions} */}
      <Doughnut className="" data={noteData} />
    </div>
  )
}
export default AuthorNotesDisplay;