import React from 'react'

function Modal({ player, reset, display }) {
  const color = player === 2 ? 'primary' : 'danger'
  return (
    <div
      style={{
        display: display ? 'initial' : 'none' /* Hidden by default */,
        position: 'fixed' /* Stay in place */,
        zIndex: 1 /* Sit on top */,
        left: 0,
        top: 0,
        width: '100%' /* Full width */,
        height: '100%' /* Full height */,
        overflow: 'auto' /* Enable scroll if needed */,
        backgroundColor: 'rgb(0,0,0)' /* Fallback color */,
        backgroundColor: 'rgba(0,0,0,0.4)' /* Black w/ opacity */
      }}
    >
      <div className="d-flex h-100 align-items-center justify-content-center">
        <div
          style={{ fontSize: '1.7rem' }}
          className="bg-white rounded-lg border shadow p-4"
        >
          <div className={`bg-${color} text-white p-4 rounded text-center`}>
            <div>Player {player} Wins!!</div>
            <div className="mt-1" style={{ fontSize: '.1rem' }}>
              Player {player === 1 ? 2 : 1} is a NOOB!!!
            </div>
          </div>
          <div>
            <button
              className={`btn btn-outline-${color} btn-block mt-4`}
              onClick={reset}
            >
              Reset Game
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
