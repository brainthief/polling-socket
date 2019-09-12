
import React from 'react'
import { connect } from 'react-redux'

import Join from './../Join/Join'


const Audience = (props) => {
 const { emit } = props
 const { status } = props.mainPage
 console.log(props)
 return (

  <ul className="list-group list-group-flush">
   <li className="list-group-item">{status ? <><h2>Prisijunkite prie paskaitos</h2><Join emit={emit} /></> : null}</li>
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