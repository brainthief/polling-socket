import React from 'react'

export default class Header extends React.Component {
 state = {
  name: ''
 }

 updateJoinName(name) {
  this.setState({ name: name })
 }

 render() {
  const { updateJoinName, emit } = this.props

  return (
   <div className="form-group">
    <label htmlFor="nameInput1">Vartotojo vardas</label>
    <input type="text" className="form-control" id="nameInput1" placeholder="Įveskite vardą" value={this.state.name} onChange={(e) => { this.updateJoinName(e.target.value) }} />
    <button type="button" className="btn btn-primary mt-2" disabled={this.state.name.length === 0} onClick={() => { this.props.emit('join', { name: this.state.name }) }}>Prisijungti</button>
   </div >
  )
 }
}

