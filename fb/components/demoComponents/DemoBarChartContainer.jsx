'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, } from 'recharts';

const DemoBarChartContainer = ({ allNotes }) => {

  if (!allNotes || allNotes.length < 1) return <p className='capitalize font-serif text-xl font-bold text-center'>create some notes, writer!</p>;

  return (
    <section className='mt-16'>
      <h1 className='text-2xl font-serif text-center'>
        Monthly Notes <span className='font-semibold text-sm'>(last two months)</span>
      </h1>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={allNotes} margin={{ top: 50 }}>
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
export default DemoBarChartContainer;