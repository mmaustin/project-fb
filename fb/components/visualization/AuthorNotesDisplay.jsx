'use client'

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, BarElement, DoughnutController } from "chart.js";

ChartJS.register(
  ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, BarElement, DoughnutController
);

const AuthorNotesDisplay = ({ notesToChart }) => {

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
    <div className="w-52 sm:w-80">
      <Doughnut className='mb-4 pb-2 bg-gray-light' data={noteData} />
    </div>
  )
}
export default AuthorNotesDisplay;