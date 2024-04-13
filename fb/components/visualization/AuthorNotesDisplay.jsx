'use client'

import { useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, BarElement } from "chart.js";

ChartJS.register(
  ArcElement, Tooltip, Legend, CategoryScale, LinearScale, Title, BarElement
);

const AuthorNotesDisplay = ({ authorsNotes }) => {

  let categoryCount = authorsNotes.map(note => {
    let countObj = { musing: 0, character: 0, plot: 0, setting: 0 };
    if (note.noteCategory === 'Musings') {
      return countObj['musing'] += 1;
    };
    if (note.noteCategory === 'Character') {
      return countObj['character'] += 1;
    };
    if (note.noteCategory === 'Plot') {
      return countObj['plot'] += 1;
    };
    if (note.noteCategory === 'Setting') {
      return countObj['setting'] += 1;
    };
  });

  console.log(categoryCount);

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Sales $',
          data: [1812, 9876, 8987, 3987, 8765, 9263, 1234],
          borderColor: 'rgb(54,162,235)',
          backgroundColor: 'rgb(53,162,235,0.4)',
        }
      ]
    })
  }, [])

  return (
    <>
      <div>Author Notes Display</div>
      {/* options={chartOptions} */}
      <Bar className="" data={chartData} />
    </>
  )
}
export default AuthorNotesDisplay;