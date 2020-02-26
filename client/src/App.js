import React, { Component } from 'react'
import Row from './components/Row.js'
import DropButton from './components/DropButton.js'
import Modal from './components/Modal.js'
import _ from 'lodash'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      player: 1,
      grid: createGrid(),
      modal: false
    }
    this.toggle = this.toggle.bind(this)
    this.drop = this.drop.bind(this)
    this.reset = this.reset.bind(this)
  }

  toggle(row, col) {
    const grid = _.cloneDeep(this.state.grid)
    grid[row][col] = this.state.player
    this.setState({ grid }, () => {
      if (this.check(row, col)) return this.win()
      this.setState({ player: this.state.player === 1 ? 2 : 1 })
    })
  }

  drop(col) {
    for (let i = 5; i >= 0; i--) {
      if (this.state.grid[i][col] === 0) {
        return this.toggle(i, col)
        break
      }
    }
  }

  reset() {
    this.setState({
      player: 1,
      grid: createGrid(),
      modal: false
    })
  }

  win() {
    this.setState({
      modal: true
    })
  }

  check(row, col) {
    if (
      this.checkHorizontal(row) ||
      this.checkVertical(col) ||
      this.checkDiagUp(row, col) ||
      this.checkDiagDown(row, col)
    ) {
      return true
    }
  }

  checkHorizontal(row) {
    let count = 0
    const grid = this.state.grid
    for (let col = 0; col < 7; col++) {
      if (grid[row][col] === this.state.player) count++
      else count = 0
      if (count === 4) return true
    }
  }

  checkVertical(col) {
    let count = 0
    const grid = this.state.grid
    for (let row = 0; row < 6; row++) {
      if (grid[row][col] === this.state.player) count++
      else count = 0
      if (count === 4) return true
    }
  }

  checkDiagUp(row, col) {
    const grid = this.state.grid
    let count = 0
    while (row !== 5 && col !== 0) {
      row++
      col--
    }
    while (row > -1 && col < 7) {
      if (grid[row][col] === this.state.player) count++
      else count = 0
      if (count === 4) return true
      row--
      col++
    }
  }

  checkDiagDown(row, col) {
    const grid = this.state.grid
    let count = 0
    while (row !== 0 && col !== 0) {
      row--
      col--
    }
    while (row < 6 && col < 7) {
      if (grid[row][col] === this.state.player) count++
      else count = 0
      if (count === 4) return true
      row++
      col++
    }
  }

  render() {
    return (
      <div className="my-4">
        <div className="text-center my-3">
          <div className="display-4 my-3">Connect Four</div>
          <div>
            Current Turn: <strong>Player {this.state.player}</strong>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          {this.state.grid[0].map((none, i) => (
            <DropButton
              key={`dropButton-${i}`}
              col={i}
              disabled={this.state.grid[0][i] !== 0}
              player={this.state.player}
              drop={this.drop}
            />
          ))}
        </div>
        <div className="my-4">
          {this.state.grid.map((data, i) => (
            <Row data={data} key={`row-${i}`} />
          ))}
        </div>
        <Modal
          player={this.state.player}
          reset={this.reset}
          display={this.state.modal}
        />
      </div>
    )
  }
}

function createGrid() {
  const graph = []
  for (let i = 0; i < 6; i++) {
    const row = []
    for (let i = 0; i < 7; i++) {
      row[i] = 0
    }
    graph.push(row)
  }
  return graph
}

export default App
