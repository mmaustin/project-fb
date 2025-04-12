'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';


function BarChartContainer({ notesObj }) {


  if (!notesObj || notesObj.length < 1) return null;

  return (
    <section className='mt-16'>
      <h1 className='text-2xl font-serif text-center'>
        Monthly Notes <span className='font-semibold text-sm'>(last six months)</span>
      </h1>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={notesObj} margin={{ top: 50 }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey='count' fill='#2563eb' barSize={75} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}
export default BarChartContainer;