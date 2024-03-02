'use client'

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button className="btn btn-circle btn-warning btn-sm" onClick={() => reset()}>Try again</button>
    </div>
  )
};