import React from 'react'
import { Link } from 'react-router-dom'

export default class SpeakerJoin extends React.Component {
 state = {
  speakerName: '',
  presentationTitle: ''
 }

 updateSpeakerName(name) {
  this.setState({ speakerName: name })
 }

 updatePresentationTitle(title) {
  this.setState({ presentationTitle: title })
 }

 render() {
  const { emit } = this.props

  return (
   <div className="form-group">
    <h2>Pradėti prezentaciją</h2>
    <label htmlFor="nameInput1">Prezentacijos vedėjas</label>
    <input type="text" className="form-control" id="nameInput1" placeholder="Įveskite pilną vardą" value={this.state.speakerName} onChange={(e) => { this.updateSpeakerName(e.target.value) }} />
    <label htmlFor="nameInput1">Prezentacijos tema</label>
    <input type="text" className="form-control" id="nameInput1" placeholder="Įveskite prezentacijos pavadinimą" value={this.state.presentationTitle} onChange={(e) => { this.updatePresentationTitle(e.target.value) }} />
    <button type="button" className="btn btn-primary mt-2" disabled={this.state.speakerName.length === 0 || this.state.presentationTitle === 0} onClick={() => { emit('start', { name: this.state.speakerName, title: this.state.presentationTitle }) }}>Prisijungti</button>
    <p><Link to="/">Atgal</Link></p>
   </div >
  )
 }
}