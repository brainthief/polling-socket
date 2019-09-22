import React from 'react'
import { connect } from 'react-redux'

import SpeakerJoin from './SpeakerJoin/SpeakerJoin'

const Speaker = (props) => {
 const { emit } = props
 const { status, member } = props.mainPage
 return (
  <ul className="list-group list-group-flush">
   <li className="list-group-item">
    {status === true ?
     member.name && member.type === 'speaker' ? <><p>Klausymai</p><p>Attendance</p></> : <SpeakerJoin emit={emit} />
     : null}
   </li>
  </ul>
 )
}


const mapStateToProps = (state) => {
 return {
  mainPage: state.mainPage
 }
}

// const mapDispatchToProps = (dispatch) => {
//  return {
//   updateSpeakerName: (name) => { dispatch(updateSpeakerNameAC(name)) },
//   updatePresentationTitle: (title) => { dispatch(updatePresentationTitleAC(title)) },
//  }
// }

export default connect(mapStateToProps, null)(Speaker)