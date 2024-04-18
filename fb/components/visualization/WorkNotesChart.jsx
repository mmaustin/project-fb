'use client'

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, DoughnutController } from "chart.js";

ChartJS.register(
  ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, DoughnutController
);

const WorkNotesChart = ({ notesToChart }) => {

  const countObj = { musing: 0, character: 0, plot: 0, setting: 0 };

  notesToChart.map(note => {
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

  return (
    <div className="w-80 lg:w-96 carousel rounded-box mt-4 mb-4 shadow-2xl flex justify-center items-center">
      <Doughnut className="" data={noteData} />
    </div>
  )
}
export default WorkNotesChart;