'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';

const DemoBarChartContainer = ({ allNotes }) => {

  if (!notesObj || notesObj.length < 1) return <p>There Are No Notes To Chart.</p>;

  return (
    <div>DemoBarChartContainer</div>
  )
}
export default DemoBarChartContainer;