import React from 'react'
import { connect } from 'react-redux'

import { updateJoinNameAC } from './../../redux/mainReducer'

const Join = (props) => {
 const { updateJoinName, emit } = props
 const { name } = props.mainPage

 return (
  <div className="form-group">
   <label htmlFor="nameInput1">Vartotojo vardas</label>
   <input type="text" className="form-control" id="nameInput1" placeholder="Įveskite vardą" value={name} onChange={(e) => { updateJoinName(e.target.value) }} />
   <button type="button" className="btn btn-primary mt-2" disabled={name.length === 0} onClick={() => { emit('join', { name: name }) }}>Prisijungti</button>
  </div >
 )
}

const mapStateToProps = (state) => {
 return {
  mainPage: state.mainPage
 }
}

const mapDispatchToProps = (dispatch) => {
 return {
  updateJoinName: (name) => { dispatch(updateJoinNameAC(name)) },
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Join)