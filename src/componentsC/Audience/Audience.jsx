
import React from 'react'
import Join from './../Join/Join'

export default class Audience extends React.Component {
 render() {
  const { emit, status } = this.props
  return (
   <ul className="list-group list-group-flush">
    <li className="list-group-item">{status ? <><h2>Prisijunkite prie paskaitos</h2><Join emit={emit} /></> : null}</li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
   </ul>
  )

 }
}
