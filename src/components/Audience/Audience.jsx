
import React from 'react'
import { connect } from 'react-redux'

import Join from './../Join/Join'

const Audience = (props) => {
 const { emit } = props
 const { status, member, audience } = props.mainPage

 return (

  <ul className="list-group list-group-flush">
   <li className="list-group-item">
    {status && !member.id ?
     <><h2>Prisijunkite prie paskaitos</h2><Join emit={emit} /></> :
     <><h2>Sveikas prisijungęs {member.name}</h2><p>{audience.length} prisijungę dalyviai</p><p>Klausymai atsiras čia</p></>}
   </li>
   <li className="list-group-item">Dapibus ac facilisis in</li>
   <li className="list-group-item">Vestibulum at eros</li>
  </ul>

 )
}

const mapStateToProps = (state) => {
 return {
  mainPage: state.mainPage
 }
}

export default connect(mapStateToProps, null)(Audience)