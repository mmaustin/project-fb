'use client'

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button className="btn btn-square btn-error" onClick={() => reset()}>Try again</button>
    </div>
  )
};