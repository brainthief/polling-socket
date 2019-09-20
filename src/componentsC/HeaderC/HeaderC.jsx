import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

export default class Header extends React.Component {
 render() {
  const { status, title } = this.props
  return (
   <div className="row">
    <div className="col-11">
     <strong>Pavadinimas:</strong> {title}
    </div>
    <div className="col-1 text-left">
     {status ? <FontAwesomeIcon style={{ color: 'green' }} icon={faSignal} /> : <FontAwesomeIcon style={{ color: 'red' }} icon={faExclamationTriangle} />}
    </div>
   </div>
  )
 }
}