import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {
 render() {
  const { status, title, speaker } = this.props
  return (
   <div className="row">
    <div className="col-11">
     <h2><strong>Pavadinimas:</strong> {title}</h2>
     <p>{speaker ? speaker.name : null}</p>
    </div>
    <div className="col-1 text-left">
     {status ? <FontAwesomeIcon style={{ color: 'green' }} icon={faSignal} /> : <FontAwesomeIcon style={{ color: 'red' }} icon={faExclamationTriangle} />}
    </div>
   </div>
  )
 }
}