import React from 'react'

function DropButton({ col, player, drop, disabled }) {
  return (
    <div style={{ width: 100 }} className="text-center">
      <button
        disabled={disabled}
        className={`btn btn-outline-${player === 2 ? 'primary' : 'danger'}`}
        onClick={() => drop(col)}
      >
        Drop
      </button>
    </div>
  )
}

export default DropButton
