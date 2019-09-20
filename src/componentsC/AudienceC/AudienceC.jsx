
import React from 'react'
import Join from '../JoinC/JoinC'

export default class Audience extends React.Component {
 render() {
  const { emit, status, member, audience } = this.props
  return (
   <ul className="list-group list-group-flush">
    <li className="list-group-item">{status && !member.id ?
     <><h2>Prisijunkite prie paskaitos</h2><Join emit={emit} /></> :
     <><h2>Sveikas prisijungęs {member.name}</h2><p>{audience.length} prisijungę dalyviai</p><p>Klausymai atsiras čia</p></>}
    </li>
    <li className="list-group-item">Dapibus ac facilisis in</li>
    <li className="list-group-item">Vestibulum at eros</li>
   </ul>
  )

 }
}
