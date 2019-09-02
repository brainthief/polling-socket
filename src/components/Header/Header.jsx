import React from 'react'
import { connect } from 'react-redux'

const Header = (props) => {
 const { status } = props.mainPage
 return (
  <h1>{status ? 'connected' : 'disconencted'}</h1>
 )
}

const mapStateToProps = (state) => {
 return {
  mainPage: state.mainPage
 }
}

export default connect(mapStateToProps, null)(Header)