import React from 'react'

function Row({ data }) {
  return (
    <div className="d-flex justify-content-center">
      {data.map((piece, i) => (
        <Cell piece={piece} key={`cell-${i}`} />
      ))}
    </div>
  )
}

function Cell({ piece }) {
  return (
    <div
      className="bg-secondary border"
      style={{ width: 100, height: 100, padding: 10 }}
    >
      <div
        className={`border ${
          { '0': 'bg-white', '1': 'bg-danger', '2': 'bg-primary' }[piece]
        }`}
        style={{ borderRadius: '50%', width: 80, height: 80 }}
      />
    </div>
  )
}

export default Row
