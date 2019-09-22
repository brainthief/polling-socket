import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateSpeakerNameAC, updatePresentationTitleAC } from './../../../redux/mainReducer'

const SpeakerJoin = (props) => {
 const { updateSpeakerName, updatePresentationTitle, emit } = props
 const { speakerName, prasentationTitle } = props.mainPage
 return (
  <div className="form-group">
   <h2>Pradėti prezentaciją</h2>
   <label htmlFor="nameInput1">Prezentacijos vedėjas</label>
   <input type="text" className="form-control" id="nameInput1" placeholder="Įveskite pilną vardą" value={speakerName} onChange={(e) => { updateSpeakerName(e.target.value) }} />
   <label htmlFor="nameInput1">Prezentacijos tema</label>
   <input type="text" className="form-control" id="nameInput1" placeholder="Įveskite prezentacijos pavadinimą" value={prasentationTitle} onChange={(e) => { updatePresentationTitle(e.target.value) }} />
   <button type="button" className="btn btn-primary mt-2" disabled={speakerName.length === 0 || prasentationTitle === 0} onClick={() => { emit('start', { name: speakerName, title: prasentationTitle }) }}>Prisijungti</button>
   <p><Link to="/">Atgal</Link></p>
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
  updateSpeakerName: (name) => { dispatch(updateSpeakerNameAC(name)) },
  updatePresentationTitle: (title) => { dispatch(updatePresentationTitleAC(title)) },
 }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeakerJoin)